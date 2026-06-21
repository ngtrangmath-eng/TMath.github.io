(function () {
  const mathJaxUrl = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
  const processedAttribute = "data-tmath-mathjax";
  const renderedClassName = "tmath-mathjax-rendered";
  let pendingTypeset = false;

  function ensureMathJaxStyle() {
    if (document.getElementById("tmath-mathjax-style")) return;
    const style = document.createElement("style");
    style.id = "tmath-mathjax-style";
    style.textContent = `
      .${renderedClassName}.frac,
      .${renderedClassName}.mixed,
      .${renderedClassName}.frac-power {
        display: inline-block;
        vertical-align: baseline;
      }

      .math-line.${renderedClassName} mjx-container[jax="CHTML"][display="true"] {
        margin: 0;
      }
    `;
    document.head.appendChild(style);
  }

  function escapeTexText(value) {
    return String(value || "")
      .replace(/\\/g, "\\textbackslash{}")
      .replace(/([{}$%&#_])/g, "\\$1");
  }

  function isAsciiLetter(value) {
    return /^[A-Za-z]$/.test(value);
  }

  function isWordCharacter(value) {
    return /[A-Za-zÀ-ỹĐđ]/.test(value);
  }

  function isNumberCharacter(value) {
    return /[0-9,.]/.test(value);
  }

  function readBalanced(text, start, open, close) {
    let depth = 0;
    let value = "";
    for (let index = start; index < text.length; index += 1) {
      const character = text[index];
      if (character === open) {
        depth += 1;
        if (depth > 1) value += character;
        continue;
      }
      if (character === close) {
        depth -= 1;
        if (depth === 0) return { value, end: index };
        value += character;
        continue;
      }
      value += character;
    }
    return { value, end: text.length - 1 };
  }

  function convertPlainTextToTex(rawText) {
    const text = String(rawText || "")
      .replace(/\u00a0/g, " ")
      .replace(/[–—−]/g, "-")
      .replace(/\s+/g, " ")
      .trim();
    let tex = "";

    for (let index = 0; index < text.length; index += 1) {
      const character = text[index];
      const next = text[index + 1] || "";

      if (character === "^") {
        if (next === "(") {
          const balanced = readBalanced(text, index + 1, "(", ")");
          tex += `^{${convertPlainTextToTex(balanced.value)}}`;
          index = balanced.end;
          continue;
        }
        if (next === "{") {
          const balanced = readBalanced(text, index + 1, "{", "}");
          tex += `^{${convertPlainTextToTex(balanced.value)}}`;
          index = balanced.end;
          continue;
        }
        if (next) {
          let exponent = "";
          let cursor = index + 1;
          while (cursor < text.length && /[A-Za-z0-9+-]/.test(text[cursor])) {
            exponent += text[cursor];
            cursor += 1;
          }
          if (exponent) {
            tex += `^{${convertPlainTextToTex(exponent)}}`;
            index = cursor - 1;
            continue;
          }
        }
        tex += "^";
        continue;
      }

      if (character === "²" || character === "³") {
        tex += `^{${character === "²" ? "2" : "3"}}`;
        continue;
      }

      if (character === "ⁿ") {
        tex += "^{n}";
        continue;
      }

      if (isNumberCharacter(character)) {
        let number = character;
        let cursor = index + 1;
        while (cursor < text.length && /[0-9,. ]/.test(text[cursor])) {
          number += text[cursor];
          cursor += 1;
        }
        tex += number.trim().replace(/\s+(?=\d{3}\b)/g, "\\,");
        index = cursor - 1;
        continue;
      }

      if (isWordCharacter(character)) {
        let word = character;
        let cursor = index + 1;
        while (cursor < text.length && isWordCharacter(text[cursor])) {
          word += text[cursor];
          cursor += 1;
        }
        tex += word.length === 1 && isAsciiLetter(word) ? word : `\\text{${escapeTexText(word)}}`;
        index = cursor - 1;
        continue;
      }

      if (character === " ") {
        tex += " ";
        continue;
      }

      const replacements = {
        "·": "\\cdot ",
        "×": "\\times ",
        "÷": "\\div ",
        "≤": "\\le ",
        "≥": "\\ge ",
        "≠": "\\ne ",
        "∈": "\\in ",
        "∉": "\\notin ",
        "⊂": "\\subset ",
        "⊃": "\\supset ",
        "⊆": "\\subseteq ",
        "⊇": "\\supseteq ",
        "∪": "\\cup ",
        "∩": "\\cap ",
        "∅": "\\varnothing ",
        "ℕ": "\\mathbb{N}",
        "ℤ": "\\mathbb{Z}",
        "ℚ": "\\mathbb{Q}",
        "ℝ": "\\mathbb{R}",
        "√": "\\sqrt{}",
        "±": "\\pm ",
        "→": "\\to ",
        "…": "\\ldots ",
        "{": "\\{",
        "}": "\\}",
        "[": "[",
        "]": "]",
        "<": "<",
        ">": ">",
        ";": ";",
        ":": ":",
        "(": "(",
        ")": ")",
        "+": "+",
        "-": "-",
        "=": "=",
        ",": ",",
        ".": ".",
        "|": "|"
      };

      tex += replacements[character] || escapeTexText(character);
    }

    return tex.trim();
  }

  function childElements(element) {
    return Array.from(element.children || []);
  }

  function nodesToTex(nodes) {
    return Array.from(nodes || [])
      .map(nodeToTex)
      .join("")
      .replace(/\s+/g, " ")
      .trim();
  }

  function nodeToTex(node) {
    if (!node) return "";
    if (node.nodeType === Node.TEXT_NODE) return convertPlainTextToTex(node.textContent);
    if (node.nodeType !== Node.ELEMENT_NODE) return "";

    const element = node;
    if (element.classList.contains("frac")) {
      const parts = childElements(element).filter((child) => child.tagName.toLowerCase() !== "sup");
      const numerator = nodesToTex(parts[0]?.childNodes || []);
      const denominator = nodesToTex(parts[1]?.childNodes || []);
      return `\\frac{${numerator || " "}}{${denominator || " "}}`;
    }

    if (element.classList.contains("mixed")) {
      return nodesToTex(element.childNodes);
    }

    if (element.classList.contains("frac-power")) {
      const exponent = nodesToTex(element.querySelector(":scope > sup")?.childNodes || []);
      const bodyNodes = Array.from(element.childNodes).filter((child) => {
        return !(child.nodeType === Node.ELEMENT_NODE && child.tagName.toLowerCase() === "sup");
      });
      const body = nodesToTex(bodyNodes);
      return exponent ? `${body}^{${exponent}}` : body;
    }

    if (element.tagName.toLowerCase() === "sup") {
      return `^{${nodesToTex(element.childNodes)}}`;
    }

    if (element.tagName.toLowerCase() === "sub") {
      return `_{${nodesToTex(element.childNodes)}}`;
    }

    if (element.tagName.toLowerCase() === "br") {
      return " \\\\ ";
    }

    return nodesToTex(element.childNodes);
  }

  function setMathContent(element, tex, displayMode) {
    if (!tex || element.hasAttribute(processedAttribute)) return;
    element.setAttribute(processedAttribute, tex);
    element.classList.add(renderedClassName);
    element.textContent = displayMode ? `\\[${tex}\\]` : `\\(${tex}\\)`;
  }

  function convertMathLine(element) {
    if (element.closest("textarea, input, select, option, code, pre, mjx-container")) return;
    setMathContent(element, nodesToTex(element.childNodes), true);
  }

  function convertInlineElement(element) {
    if (element.closest("textarea, input, select, option, code, pre, mjx-container, .math-line")) return;
    setMathContent(element, nodeToTex(element), false);
  }

  function getTypesetRoot(root) {
    if (!root || root.nodeType === Node.DOCUMENT_NODE) return document.body || document.documentElement;
    return root;
  }

  function convertMathMarkup(root = document) {
    const target = getTypesetRoot(root);
    if (!target) return;
    if (target.matches?.(".math-line")) convertMathLine(target);
    if (target.matches?.(".math-text, .frac-power, .mixed, .frac")) convertInlineElement(target);
    target.querySelectorAll(".math-line").forEach(convertMathLine);
    target.querySelectorAll(".math-text, .frac-power, .mixed, .frac").forEach(convertInlineElement);
  }

  function typesetMath(root = document) {
    if (!window.MathJax || typeof window.MathJax.typesetPromise !== "function") return Promise.resolve();
    ensureMathJaxStyle();
    convertMathMarkup(root);
    return window.MathJax.typesetPromise([getTypesetRoot(root)]).catch(() => undefined);
  }

  function queueTypeset(root = document) {
    if (pendingTypeset) return;
    pendingTypeset = true;
    window.setTimeout(() => {
      pendingTypeset = false;
      typesetMath(root);
    }, 40);
  }

  function observeDynamicMath() {
    const observer = new MutationObserver((mutations) => {
      const hasMathChange = mutations.some((mutation) => {
        return Array.from(mutation.addedNodes).some((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return false;
          return node.matches?.(".math-line, .math-text, .frac, .mixed, .frac-power") ||
            node.querySelector?.(".math-line, .math-text, .frac, .mixed, .frac-power");
        });
      });
      if (hasMathChange) queueTypeset(document);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function loadMathJax() {
    if (document.querySelector(`script[src="${mathJaxUrl}"]`)) return;
    const script = document.createElement("script");
    script.src = mathJaxUrl;
    script.defer = true;
    script.id = "tmath-mathjax-script";
    document.head.appendChild(script);
  }

  const existingMathJax = window.MathJax || {};
  const existingStartup = existingMathJax.startup || {};

  window.MathJax = {
    ...existingMathJax,
    tex: {
      ...(existingMathJax.tex || {}),
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      processEscapes: true
    },
    options: {
      ...(existingMathJax.options || {}),
      skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code", "option"]
    },
    startup: {
      ...existingStartup,
      pageReady() {
        ensureMathJaxStyle();
        convertMathMarkup(document);
        observeDynamicMath();
        if (typeof existingStartup.pageReady === "function") return existingStartup.pageReady.call(this);
        return window.MathJax.startup.defaultPageReady();
      }
    }
  };

  window.TMathMathJax = {
    convertMathMarkup,
    typeset: typesetMath,
    queueTypeset
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      loadMathJax();
    });
  } else {
    loadMathJax();
  }
})();

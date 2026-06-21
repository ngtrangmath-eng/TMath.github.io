(function () {
  function compactText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function readableText(element) {
    if (!element) return "";
    const clone = element.cloneNode(true);

    clone.querySelectorAll("sup").forEach((sup) => {
      sup.replaceWith(document.createTextNode(`^${compactText(sup.textContent)}`));
    });

    clone.querySelectorAll(".frac").forEach((fraction) => {
      const parts = Array.from(fraction.children).map((child) => compactText(child.textContent));
      if (parts.length >= 2) {
        fraction.replaceWith(document.createTextNode(`${parts[0]}/${parts[1]}`));
      }
    });

    clone.querySelectorAll(".mixed").forEach((mixed) => {
      const parts = Array.from(mixed.childNodes).map((node) => compactText(node.textContent)).filter(Boolean);
      mixed.replaceWith(document.createTextNode(parts.join(" ")));
    });

    return compactText(clone.textContent);
  }

  function cleanAnswerText(value) {
    return compactText(value)
      .replace(/^Đáp án gợi ý:\s*/i, "")
      .replace(/\s*-\s*\d+(?:[,.]\d+)?\s*điểm\.?$/i, "")
      .trim();
  }

  function normalizeLabel(value) {
    return compactText(value).toLowerCase();
  }

  function addEntry(entries, label, text) {
    const cleanLabel = compactText(label);
    const cleanText = cleanAnswerText(text);
    if (!cleanLabel || !cleanText) return;
    entries.push({ label: cleanLabel, key: normalizeLabel(cleanLabel), text: cleanText });
  }

  function collectResultAnswerEntries(entries) {
    document.querySelectorAll(".result-table tbody tr").forEach((row) => {
      const cells = row.querySelectorAll("td");
      const answer = row.querySelector(".result-answer");
      if (cells.length < 2 || !answer) return;
      addEntry(entries, readableText(cells[0]), readableText(answer));
    });
  }

  function collectAnswerTableEntries(entries, source) {
    source.querySelectorAll("table tr").forEach((row) => {
      const cells = row.querySelectorAll("td");
      if (cells.length < 2) return;
      const label = readableText(cells[0]);
      if (/^(câu|đáp án|điểm)$/i.test(label)) return;
      addEntry(entries, label, readableText(cells[1]));
    });
  }

  function collectGroupedAnswerEntries(entries, source) {
    let group = "";
    Array.from(source.querySelectorAll("h4, p, .math-block")).forEach((node) => {
      if (node.matches("h4")) {
        const match = /Bài\s*(\d+)/i.exec(node.textContent || "");
        group = match ? `Bài ${match[1]}` : compactText(node.textContent);
        return;
      }

      const text = cleanAnswerText(readableText(node));
      if (!text || /mỗi câu đúng/i.test(text)) return;

      const letterMatch = /^([a-z])\)\s*(.+)$/i.exec(text);
      if (letterMatch && group) {
        addEntry(entries, `${group}${letterMatch[1].toLowerCase()}`, letterMatch[2]);
        return;
      }

      if (group) addEntry(entries, group, text);
    });
  }

  function collectAnswerEntries() {
    const entries = [];
    collectResultAnswerEntries(entries);

    document.querySelectorAll("#answer-key-section, #answer-section, .answer-section").forEach((source) => {
      collectAnswerTableEntries(entries, source);
      collectGroupedAnswerEntries(entries, source);
    });

    return entries;
  }

  function keysForTextarea(textarea) {
    const keys = [];
    const id = textarea.id || "";

    let match = /^essay-(\d)([a-z]?)$/i.exec(id);
    if (match) {
      keys.push(`câu ${match[1]}${match[2].toLowerCase()}`, `tự luận ${match[1]}`);
    }

    match = /^c-essay-(\d)([a-z]?)$/i.exec(id);
    if (match) {
      keys.push(`bài ${match[1]}${match[2].toLowerCase()}`, `bài ${match[1]}`, `câu ${match[1]}${match[2].toLowerCase()}`);
    }

    if (id === "application-answer" || /vận dụng/i.test(textarea.getAttribute("aria-label") || "")) {
      keys.push("vận dụng", "câu 3", "bài 3");
    }

    const title = textarea.closest(".question")?.querySelector(".question-title")?.textContent || "";
    const titleMatch = /(Tự luận|Câu|Bài)\s*(\d)([a-z]?)/i.exec(title);
    if (titleMatch) {
      keys.push(`${titleMatch[1].toLowerCase()} ${titleMatch[2]}${titleMatch[3].toLowerCase()}`);
    }
    if (/vận dụng/i.test(title)) keys.push("vận dụng");

    return Array.from(new Set(keys.map(normalizeLabel).filter(Boolean)));
  }

  function findAnswer(textarea, entries) {
    const keys = keysForTextarea(textarea);
    for (const key of keys) {
      const matches = entries.filter((entry) => entry.key === key || entry.key.startsWith(`${key} `));
      if (matches.length) return matches.map((entry) => entry.text).join("\n");
    }
    return "";
  }

  function applyAnswerPlaceholders() {
    const section = document.getElementById("phan-c") || document.getElementById("part-c");
    if (!section) return;

    const entries = collectAnswerEntries();
    section.querySelectorAll("textarea").forEach((textarea) => {
      const current = textarea.getAttribute("placeholder") || "";
      if (current && !/^Bài làm(\.\.\.)?$/.test(current)) return;

      const answer = findAnswer(textarea, entries);
      if (!answer) return;
      textarea.placeholder = answer;
      textarea.classList.add("has-answer-placeholder");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyAnswerPlaceholders);
  } else {
    applyAnswerPlaceholders();
  }
})();

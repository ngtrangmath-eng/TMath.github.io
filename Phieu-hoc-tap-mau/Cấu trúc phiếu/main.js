#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT_DIR = __dirname;
const DEFAULT_INPUT = path.join(ROOT_DIR, "bai-hoc", "bai-hoc-mau.json");
const TEMPLATE_FILE = path.join(ROOT_DIR, "template.html");

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    throw new Error(`Khong doc duoc JSON: ${filePath}\n${error.message}`);
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function raw(value) {
  return value == null ? "" : String(value);
}

function stripHtml(value) {
  return raw(value).replace(/<[^>]*>/g, "");
}

function arrayOf(value) {
  return Array.isArray(value) ? value : [];
}

function firstDefined(...values) {
  return values.find((value) => value !== undefined && value !== null && value !== "");
}

function attr(value) {
  return escapeHtml(value);
}

function csv(values) {
  return arrayOf(values).join(",");
}

function jsonAttr(value) {
  return attr(JSON.stringify(value ?? []));
}

function normalizeFileName(value) {
  return String(value || "phieu-hoc-tap")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w.-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function lessonCode(data) {
  const lesson = data.lesson || {};
  const meta = lesson.meta || {};
  return firstDefined(lesson.code, lesson.id, meta["Mã bài"], meta["Ma bai"], "phieu-hoc-tap");
}

function lessonTitle(data) {
  const lesson = data.lesson || {};
  return firstDefined(lesson.title, lessonCode(data), "Phiếu học tập");
}

function computeTotalPoints(data) {
  const test = data.test || {};
  const mc = arrayOf(test.multipleChoice).reduce((sum, question) => sum + Number(question.points ?? 1), 0);
  const written = arrayOf(test.written).reduce((sum, question) => sum + Number(question.points ?? 0), 0);
  return Number(firstDefined(test.totalPoints, data.lesson?.totalPoints, mc + written, 10));
}

function renderHeader(data) {
  const lesson = data.lesson || {};
  const meta = lesson.meta || {
    "Môn": lesson.subject,
    "Lớp": lesson.grade,
    "Chương": lesson.chapter,
    "Bài": lesson.lessonNumber,
    "Mã bài": lessonCode(data),
  };
  const metaItems = Object.entries(meta)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([label, value]) => (
      `<div class="meta-item"><span class="meta-label">${escapeHtml(label)}</span><span class="meta-value">${escapeHtml(value)}</span></div>`
    ))
    .join("\n        ");

  return `
    <header id="header" class="app-header">
      <p class="header-kicker">${raw(lesson.kicker || "Phiếu học tập tương tác")}</p>
      <h1>${raw(lessonTitle(data))}</h1>
      <p class="header-summary">${raw(lesson.summary || "")}</p>
      <div class="meta-grid" aria-label="Thông tin bài học">
        ${metaItems}
      </div>
    </header>

    <section id="student-info" class="student-info" aria-labelledby="student-title">
      <h2 id="student-title" class="section-title">Thông tin học sinh</h2>
      <div class="form-grid">
        <label>
          <span class="field-label">Họ và tên</span>
          <input id="student-name" data-save type="text" autocomplete="name" placeholder="Nhập họ và tên" />
        </label>
        <label>
          <span class="field-label">Lớp</span>
          <input id="student-class" data-save type="text" placeholder="Ví dụ: 6A" />
        </label>
        <label>
          <span class="field-label">Mã bài/lần học</span>
          <input id="student-code" data-save type="text" value="${attr(lessonCode(data))}" />
        </label>
      </div>
    </section>

    <nav id="lesson-nav" class="lesson-nav" aria-label="Điều hướng phiếu học tập">
      <button class="tab-button" type="button" data-tab="part-a" aria-selected="true">A. Kiến thức</button>
      <button class="tab-button" type="button" data-tab="part-b" aria-selected="false">B. Luyện tập</button>
      <button class="tab-button" type="button" data-tab="part-c" aria-selected="false">C. Kiểm tra</button>
      <button class="tab-button" type="button" data-tab="result" aria-selected="false">Kết quả</button>
    </nav>`;
}

function renderList(items, tagName = "ul") {
  if (!arrayOf(items).length) return "";
  return `<${tagName}>\n${items.map((item) => `            <li>${raw(item)}</li>`).join("\n")}\n          </${tagName}>`;
}

function renderContentBlock(block) {
  const listType = block.listType === "ol" ? "ol" : "ul";
  const paragraphs = arrayOf(block.paragraphs).map((paragraph) => `          <p>${raw(paragraph)}</p>`).join("\n");
  const list = renderList(block.items, listType);
  return `
        <article class="content-block">
          ${block.title ? `<h3>${raw(block.title)}</h3>` : ""}
${paragraphs}
          ${list}
          ${raw(block.html || "")}
        </article>`;
}

function renderContentGrid(blocks) {
  if (!arrayOf(blocks).length) return "";
  return `
      <div class="content-grid">
${blocks.map(renderContentBlock).join("\n")}
      </div>`;
}

function renderLeadBox(lead, label = "Giới thiệu") {
  if (!lead) return "";
  if (typeof lead === "object") {
    return `
      <div class="lead-box">
        <strong>${raw(lead.label || label)}:</strong> ${raw(lead.text || lead.html || "")}
      </div>`;
  }
  return `
      <div class="lead-box">
        <strong>${label}:</strong> ${raw(lead)}
      </div>`;
}

function renderNote(note) {
  if (!note) return "";
  if (typeof note === "string") {
    return `<div class="note-box">${raw(note)}</div>`;
  }
  return `
      <div class="note-box">
        ${note.title ? `<strong>${raw(note.title)}:</strong> ` : ""}${raw(note.text || note.html || "")}
      </div>`;
}

function renderTable(table, className = "symbol-table") {
  if (!table || !arrayOf(table.rows).length) return "";
  const headers = arrayOf(table.headers);
  const head = headers.length
    ? `<thead><tr>${headers.map((header) => `<th>${raw(header)}</th>`).join("")}</tr></thead>`
    : "";
  const body = table.rows.map((row) => (
    `<tr>${arrayOf(row).map((cell) => `<td>${raw(cell)}</td>`).join("")}</tr>`
  )).join("\n          ");
  return `
      <table class="${className}">
        ${head}
        <tbody>
          ${body}
        </tbody>
      </table>`;
}

function renderExample(example) {
  if (!example) return "";
  return `
      <div class="question-card">
        ${example.title ? `<h3>${raw(example.title)}</h3>` : ""}
        ${raw(example.html || "")}
      </div>`;
}

function renderMindMap(items) {
  if (!arrayOf(items).length) return "";
  return `
      <div class="mind-map" aria-label="Sơ đồ tư duy mini">
        ${items.map((item) => `<span>${raw(item)}</span>`).join("\n        ")}
      </div>`;
}

function renderSelect(id, options) {
  const optionHtml = arrayOf(options).map((option) => `<option value="${attr(option)}">${raw(option)}</option>`).join("");
  return `<select id="${attr(id)}" data-save><option value="">Chọn</option>${optionHtml}</select>`;
}

function renderSymbolCheck(question, index, prefix = "symbol") {
  const id = question.id || `${prefix}-${index + 1}`;
  const feedbackId = question.feedbackId || `${id}-feedback`;
  return `
      <article class="question-card">
        <div class="question-head">
          <p class="question-title">${raw(question.title || `Câu ${index + 1}. Điền kí hiệu thích hợp`)}</p>
        </div>
        ${question.prompt ? `<p>${raw(question.prompt)}</p>` : ""}
        <div class="inline-answer">
          <label>
            <span class="field-label">${raw(question.label || "Kí hiệu")}</span>
            ${renderSelect(id, question.options || ["∈", "∉"])}
          </label>
          <button class="primary-action" type="button" data-check-symbol="${attr(id)}" data-answer="${attr(question.answer)}" data-feedback="${attr(feedbackId)}" data-explain="${attr(question.explain || "Đúng.")}">Kiểm tra</button>
        </div>
        <div id="${attr(feedbackId)}" class="feedback-box" aria-live="polite"></div>
      </article>`;
}

function renderSetCheck(question, index, prefix = "set") {
  const id = question.id || `${prefix}-${index + 1}`;
  const feedbackId = question.feedbackId || `${id}-feedback`;
  const expectedItems = question.expectedItems || question.items || [];
  const input = question.input === "textarea"
    ? `<textarea id="${attr(id)}" data-save placeholder="${attr(question.placeholder || "Bài làm")}"></textarea>`
    : `<input id="${attr(id)}" data-save type="text" placeholder="${attr(question.placeholder || "")}" />`;
  const guideAttrs = question.guideOnly
    ? ` data-guide-only="true" data-partial-guide="${attr(question.partialGuide || "")}" data-guide="${attr(question.guide || "")}"`
    : "";
  return `
      <article class="question-card">
        <div class="question-head">
          <p class="question-title">${raw(question.title || `Câu ${index + 1}. Viết tập hợp`)}</p>
          ${question.pointsLabel ? `<span class="point-badge">${raw(question.pointsLabel)}</span>` : ""}
        </div>
        ${question.prompt ? `<p>${raw(question.prompt)}</p>` : ""}
        <div class="inline-answer">
          <label>
            <span class="field-label">${raw(question.label || "Bài làm")}</span>
            ${input}
          </label>
          <button class="primary-action" type="button" data-check-set="${attr(id)}" data-name="${attr(question.expectedName || question.name || "")}" data-items="${attr(csv(expectedItems))}" data-feedback="${attr(feedbackId)}" data-points="${attr(question.practicePoints ?? question.points ?? 0)}"${guideAttrs}>Kiểm tra</button>
        </div>
        <div id="${attr(feedbackId)}" class="feedback-box" aria-live="polite"></div>
        ${question.hint ? `<p class="hint">${raw(question.hint)}</p>` : ""}
      </article>`;
}

function renderChecks(checks, prefix) {
  return arrayOf(checks).map((question, index) => {
    if (question.type === "symbol") return renderSymbolCheck(question, index, prefix);
    if (question.type === "set") return renderSetCheck(question, index, prefix);
    return raw(question.html || "");
  }).join("\n");
}

function renderAnswerKey(items) {
  if (!arrayOf(items).length) return "";
  return `
        <details class="answer-key">
          <summary>Đáp án gợi ý</summary>
          <ol>
            ${items.map((item) => `<li>${raw(item)}</li>`).join("\n            ")}
          </ol>
        </details>`;
}

function renderSymbolGroup(group) {
  if (!group || !arrayOf(group.items).length) return "";
  const feedbackId = group.feedbackId || "symbol-group-feedback";
  const ids = group.items.map((item, index) => item.id || `symbol-group-${index + 1}`);
  const answers = group.items.map((item) => item.answer);
  return `
      <article class="question-card">
        <p class="question-title">${raw(group.title || "Điền kí hiệu thích hợp")}</p>
        ${group.prompt ? `<p>${raw(group.prompt)}</p>` : ""}
        <div class="content-grid">
          ${group.items.map((item, index) => `
          <label>
            <span class="field-label">${raw(item.label || item.prompt || `${index + 1}.`)}</span>
            ${renderSelect(ids[index], item.options || group.options || ["∈", "∉"])}
          </label>`).join("\n")}
        </div>
        <div class="action-row">
          <button class="primary-action" type="button" data-check-symbols data-targets="${attr(csv(ids))}" data-answers="${attr(csv(answers))}" data-feedback="${attr(feedbackId)}" data-success-message="${attr(group.successMessage || "")}" data-partial-template="${attr(group.partialTemplate || "")}">Kiểm tra phần điền kí hiệu</button>
        </div>
        <div id="${attr(feedbackId)}" class="feedback-box" aria-live="polite"></div>
        ${renderAnswerKey(group.answerKey)}
      </article>`;
}

function renderCheckboxGame(game) {
  if (!game || !arrayOf(game.options).length) return "";
  const groupId = game.id || "checkbox-game";
  const answers = game.answers || [];
  return `
      <article class="question-card">
        ${game.title ? `<p class="question-title">${raw(game.title)}</p>` : ""}
        ${game.prompt ? `<p>${raw(game.prompt)}</p>` : ""}
        <div class="checkbox-grid" id="${attr(groupId)}" data-game-options>
          ${game.options.map((option, index) => {
            const value = typeof option === "object" ? option.value : option;
            const label = typeof option === "object" ? option.label : option;
            return `<label><input data-save id="${attr(groupId)}-${index}" type="checkbox" value="${attr(value)}" /> ${raw(label)}</label>`;
          }).join("\n          ")}
        </div>
        <div class="action-row">
          <button class="primary-action" type="button" data-check-game data-game-group="${attr(groupId)}" data-answers="${attr(csv(answers))}" data-feedback="${attr(game.feedbackId || `${groupId}-feedback`)}" data-correct-message="${attr(game.correctMessage || "")}" data-partial-template="${attr(game.partialTemplate || "")}">Kiểm tra lựa chọn</button>
        </div>
        <div id="${attr(game.feedbackId || `${groupId}-feedback`)}" class="feedback-box" aria-live="polite"></div>
        ${game.answerKey ? `<details class="answer-key"><summary>Đáp án gợi ý</summary><p>${raw(game.answerKey)}</p></details>` : ""}
      </article>`;
}

function renderTips(part) {
  if (!arrayOf(part.tips).length) return "";
  return renderContentBlock({
    title: part.tipsTitle || "Mẹo làm bài",
    items: part.tips,
  });
}

function renderPartA(data) {
  const part = data.partA || {};
  return `
    <section id="part-a" class="part-panel active" aria-labelledby="part-a-title">
      <h2 id="part-a-title" class="section-title">${raw(part.title || "Phần A - Kiến thức trọng tâm")}</h2>
      ${renderLeadBox(part.lead)}
      ${renderContentGrid(part.blocks)}
      ${renderNote(part.note)}
      ${renderTable(part.symbolTable, "symbol-table")}
      ${renderExample(part.example)}
      ${renderMindMap(part.mindMap)}
      ${renderChecks(part.quickChecks, "a-check")}
      ${part.mistakes?.length ? renderContentBlock({ title: part.mistakesTitle || "Lỗi thường gặp", items: part.mistakes }) : ""}
      <div class="action-row">
        <button class="secondary-action" type="button" data-tab-jump="part-b">Sang phần luyện tập</button>
      </div>
    </section>`;
}

function renderPartB(data) {
  const part = data.partB || {};
  return `
    <section id="part-b" class="part-panel" aria-labelledby="part-b-title">
      <h2 id="part-b-title" class="section-title">${raw(part.title || "Phần B - Luyện tập")}</h2>
      ${renderLeadBox(part.lead, "Nhiệm vụ")}
      ${renderTable(part.referenceTable, "symbol-table")}
      ${renderSymbolGroup(part.symbolGroup)}
      ${arrayOf(part.setQuestions).map((question, index) => renderSetCheck(question, index, "b-set")).join("\n")}
      ${renderCheckboxGame(part.checkboxGame)}
      ${part.challenge ? renderSetCheck(part.challenge, 0, "b-challenge") : ""}
      ${renderTips(part)}
      <div class="action-row">
        <button class="secondary-action" type="button" data-tab-jump="part-a">Quay lại kiến thức</button>
        <button class="primary-action" type="button" data-tab-jump="part-c">Sang phần kiểm tra</button>
      </div>
    </section>`;
}

function renderRubric(test) {
  const rubric = arrayOf(test.rubric);
  if (rubric.length) {
    return renderTable({
      headers: ["Phần", "Nội dung", "Điểm"],
      rows: rubric.map((row) => [row.part, row.description, row.points]),
    }, "score-table");
  }
  const mcPoints = arrayOf(test.multipleChoice).reduce((sum, question) => sum + Number(question.points ?? 1), 0);
  const writtenPoints = arrayOf(test.written).reduce((sum, question) => sum + Number(question.points ?? 0), 0);
  return renderTable({
    headers: ["Phần", "Nội dung", "Điểm"],
    rows: [
      ["Trắc nghiệm", `${arrayOf(test.multipleChoice).length} câu`, mcPoints],
      ["Tự luận/Vận dụng", `${arrayOf(test.written).length} câu`, writtenPoints],
    ],
  }, "score-table");
}

function renderMultipleChoice(question, index) {
  const id = question.id || `q${index + 1}`;
  const points = Number(question.points ?? 1);
  return `
      <article class="question-card" data-quiz="${attr(id)}" data-answer="${attr(question.answer)}" data-points="${attr(points)}">
        <div class="question-head">
          <p class="question-title">Câu ${index + 1}. ${raw(question.prompt || question.question || "")}</p>
          <span class="point-badge">${points} điểm</span>
        </div>
        <div class="choice-list">
          ${arrayOf(question.choices).map((choice) => {
            const value = typeof choice === "object" ? choice.value : String(choice).slice(0, 1);
            const text = typeof choice === "object" ? choice.text : String(choice);
            return `<label><input data-save type="radio" name="${attr(id)}" value="${attr(value)}" /> ${attr(value)}. ${raw(text)}</label>`;
          }).join("\n          ")}
        </div>
      </article>`;
}

function formatExpectedSet(name, items) {
  return `${name} = {${arrayOf(items).join("; ")}}`;
}

function expectedAnswerText(question) {
  if (question.expectedText) return question.expectedText;
  if (arrayOf(question.expectedItems || question.items).length || question.expectedName || question.name) {
    return `<span class="math-text">${escapeHtml(formatExpectedSet(question.expectedName || question.name || "", question.expectedItems || question.items || []))}</span>`;
  }
  if (arrayOf(question.expectedKeywords || question.keywords).length) {
    return `Cần có các ý: ${arrayOf(question.expectedKeywords || question.keywords).map(escapeHtml).join("; ")}`;
  }
  return question.guide || "Giáo viên chấm theo hướng dẫn riêng.";
}

function expectedAnswerPlainText(question) {
  if (question.expectedPlainText) return question.expectedPlainText;
  if (arrayOf(question.expectedItems || question.items).length || question.expectedName || question.name) {
    return formatExpectedSet(question.expectedName || question.name || "", question.expectedItems || question.items || []);
  }
  if (arrayOf(question.expectedKeywords || question.keywords).length) {
    return `Cần có các ý: ${arrayOf(question.expectedKeywords || question.keywords).join("; ")}`;
  }
  return stripHtml(question.expectedText || question.guide || "Giáo viên chấm theo hướng dẫn riêng.");
}

function renderWritten(question, index) {
  const id = question.id || `w${index + 1}`;
  const points = Number(question.points ?? 1);
  const gradeType = question.type || (arrayOf(question.expectedKeywords || question.keywords).length ? "keywords" : "set");
  const expectedItems = question.expectedItems || question.items || [];
  const expectedKeywords = question.expectedKeywords || question.keywords || [];
  const placeholder = question.placeholder || "Bài làm";
  return `
      <article class="question-card" data-written="${attr(id)}" data-grade-type="${attr(gradeType)}" data-name="${attr(question.expectedName || question.name || "")}" data-items="${attr(csv(expectedItems))}" data-keywords="${jsonAttr(expectedKeywords)}" data-min-keywords="${attr(question.minKeywords || "")}" data-expected-text="${attr(expectedAnswerPlainText(question))}" data-points="${attr(points)}">
        <div class="question-head">
          <p class="question-title">${raw(question.title || `Tự luận ${index + 1}. ${question.prompt || ""}`)}</p>
          <span class="point-badge">${points} điểm</span>
        </div>
        ${question.prompt && question.title ? `<p>${raw(question.prompt)}</p>` : ""}
        <textarea id="${attr(id)}" data-save placeholder="${attr(placeholder)}"></textarea>
      </article>`;
}

function renderGeneratedAnswerKey(test) {
  const mcRows = arrayOf(test.multipleChoice).map((question, index) => [
    `Câu ${index + 1}`,
    question.answer,
    Number(question.points ?? 1),
  ]);
  const writtenRows = arrayOf(test.written).map((question, index) => [
    question.answerLabel || (index === arrayOf(test.written).length - 1 ? "Vận dụng" : `Tự luận ${index + 1}`),
    expectedAnswerText(question),
    Number(question.points ?? 1),
  ]);
  return `
      <details class="answer-key">
        <summary>Đáp án và hướng dẫn chấm</summary>
        ${mcRows.length ? renderTable({ headers: ["Câu", "Đáp án", "Điểm"], rows: mcRows }, "score-table") : ""}
        ${writtenRows.length ? renderTable({ headers: ["Câu", "Đáp án gợi ý", "Điểm"], rows: writtenRows }, "score-table") : ""}
      </details>`;
}

function renderPartC(data) {
  const test = data.test || {};
  const duration = Number(test.durationMinutes ?? 15);
  return `
    <section id="part-c" class="part-panel" aria-labelledby="part-c-title">
      <h2 id="part-c-title" class="section-title">${raw(test.title || "Phần C - Kiểm tra đánh giá")}</h2>
      ${renderLeadBox(test.lead, "Yêu cầu")}
      ${renderRubric(test)}
      <div class="test-toolbar">
        <span class="timer" id="timer" aria-live="polite">Thời gian: ${String(duration).padStart(2, "0")}:00</span>
        <div class="action-row">
          <button class="secondary-action" type="button" id="start-timer">Bắt đầu tính giờ</button>
          <button class="secondary-action" type="button" id="reset-timer">Đặt lại thời gian</button>
        </div>
      </div>
      ${arrayOf(test.multipleChoice).map(renderMultipleChoice).join("\n")}
      ${arrayOf(test.written).map(renderWritten).join("\n")}
      <div class="action-row">
        <button class="primary-action" type="button" id="submit-test">Nộp bài và xem kết quả</button>
        <button class="secondary-action" type="button" id="print-page">In phiếu</button>
      </div>
      ${renderGeneratedAnswerKey(test)}
    </section>`;
}

function renderFooter(data) {
  const sources = arrayOf(data.lesson?.sources);
  if (!sources.length) return "";
  return `<p class="footer-note">Nguồn nội dung: ${sources.map(escapeHtml).join(", ")}</p>`;
}

function renderHtml(data) {
  const template = fs.readFileSync(TEMPLATE_FILE, "utf8");
  const test = data.test || {};
  const replacements = {
    TITLE: escapeHtml(lessonTitle(data)),
    BODY_LESSON_ID: attr(data.lesson?.bodyLessonId || lessonCode(data)),
    STORAGE_KEY: attr(data.lesson?.storageKey || `${normalizeFileName(lessonCode(data)).toLowerCase()}-worksheet`),
    TIMER_MINUTES: String(Number(test.durationMinutes ?? 15)),
    TOTAL_POINTS: String(computeTotalPoints(data)),
    HEADER: renderHeader(data),
    PART_A: renderPartA(data),
    PART_B: renderPartB(data),
    PART_C: renderPartC(data),
    FOOTER_NOTE: renderFooter(data),
  };

  return Object.entries(replacements).reduce((html, [key, value]) => (
    html.replace(new RegExp(`{{${key}}}`, "g"), value)
  ), template);
}

function resolveInput(arg) {
  return arg ? path.resolve(process.cwd(), arg) : DEFAULT_INPUT;
}

function resolveOutput(arg, data) {
  if (arg) return path.resolve(process.cwd(), arg);
  const output = data.lesson?.output;
  if (output) return path.resolve(ROOT_DIR, output);
  return path.join(ROOT_DIR, "output", `${normalizeFileName(lessonCode(data))}.html`);
}

function main() {
  const [inputArg, outputArg] = process.argv.slice(2);
  const inputFile = resolveInput(inputArg);
  const data = readJson(inputFile);
  const outputFile = resolveOutput(outputArg, data);
  const html = renderHtml(data);

  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, html, "utf8");

  console.log(`Da tao phieu hoc tap: ${outputFile}`);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

(function () {
  const pages = [
    {
      id: "bai-1",
      label: "Bài 1",
      title: "Tập hợp",
      href: "../Toan6-Chuong1-Bai1/Toan6-Chuong1-Bai1.html",
      gradeLabel: "Lớp 6",
      chapterLabel: "Chương 1",
      chapterHash: "toan6-chapter-1",
      trackProgress: true
    },
    {
      id: "bai-2",
      label: "Bài 2",
      title: "Cách ghi số tự nhiên",
      href: "../Toan6-Chuong1-Bai2/Toan6-Chuong1-Bai2.html",
      gradeLabel: "Lớp 6",
      chapterLabel: "Chương 1",
      chapterHash: "toan6-chapter-1",
      trackProgress: true
    },
    {
      id: "bai-3",
      label: "Bài 3",
      title: "Thứ tự trong tập hợp các số tự nhiên",
      href: "../Toan6-Chuong1-Bai3/Toan6-Chuong1-Bai3.html",
      gradeLabel: "Lớp 6",
      chapterLabel: "Chương 1",
      chapterHash: "toan6-chapter-1",
      trackProgress: true
    },
    {
      id: "bai-4",
      label: "Bài 4",
      title: "Phép cộng và phép trừ số tự nhiên",
      href: "../Toan6-Chuong1-Bai4/Toan6-Chuong1-Bai4.html",
      gradeLabel: "Lớp 6",
      chapterLabel: "Chương 1",
      chapterHash: "toan6-chapter-1",
      trackProgress: true
    },
    {
      id: "bai-5",
      label: "Bài 5",
      title: "Phép nhân và phép chia số tự nhiên",
      href: "../Toan6-Chuong1-Bai5/Toan6-Chuong1-Bai5.html",
      gradeLabel: "Lớp 6",
      chapterLabel: "Chương 1",
      chapterHash: "toan6-chapter-1",
      trackProgress: true
    },
    {
      id: "bai-6",
      label: "Bài 6",
      title: "Lũy thừa với số mũ tự nhiên",
      href: "../Toan6-Chuong1-Bai6/Toan6-Chuong1-Bai6.html",
      gradeLabel: "Lớp 6",
      chapterLabel: "Chương 1",
      chapterHash: "toan6-chapter-1",
      trackProgress: true
    },
    {
      id: "bai-7",
      label: "Bài 7",
      title: "Thứ tự thực hiện các phép tính",
      href: "../Toan6-Chuong1-Bai7/Toan6-Chuong1-Bai7.html",
      gradeLabel: "Lớp 6",
      chapterLabel: "Chương 1",
      chapterHash: "toan6-chapter-1",
      trackProgress: true
    },
    {
      id: "on-tap",
      label: "Ôn tập",
      title: "Ôn tập Chương 1",
      href: "../Toan6-Chuong1-OnTap/Toan6-Chuong1-OnTap.html",
      gradeLabel: "Lớp 6",
      chapterLabel: "Chương 1",
      chapterHash: "toan6-chapter-1",
      trackProgress: true
    }
  ];

  const accountsKey = "phieuhoctap.accounts";
  const currentAccountKey = "phieuhoctap.auth.current";
  const openAuthRequestKey = "phieuhoctap.openAuth";
  const assessmentResultsKey = "tmath.assessmentResults";
  const writtenImageUploadsKeyPrefix = "tmath.writtenAnswerImages";
  const teacherEmail = "ngtrang.math@gmail.com";
  const scriptUrl = document.currentScript && document.currentScript.src ? document.currentScript.src : "";
  const homeHref = getHomeHref();
  let assessmentStartedAt = null;
  let lastSavedAssessmentId = "";
  let lastAutoEmailId = "";
  let writtenImageUploads = [];

  function getHomeHref(hash = "") {
    if (!scriptUrl) return `../index.html?guest=1${hash ? `#${hash}` : ""}`;
    try {
      const url = new URL("../index.html", scriptUrl);
      url.searchParams.set("guest", "1");
      if (hash) url.hash = hash;
      return url.href;
    } catch (_error) {
      return `../index.html?guest=1${hash ? `#${hash}` : ""}`;
    }
  }

  function getProgressPrefix() {
    const accountKey = localStorage.getItem(currentAccountKey) || "";
    return accountKey ? `phieuhoctap.user.${accountKey}.chuong1` : "";
  }

  function progressKey(name) {
    const prefix = getProgressPrefix();
    return prefix ? `${prefix}.${name}` : "";
  }

  function readVisited() {
    const key = progressKey("visited");
    if (!key) return new Set();
    try {
      return new Set(JSON.parse(localStorage.getItem(key) || "[]"));
    } catch (_error) {
      return new Set();
    }
  }

  function todayKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function rememberStudyDay() {
    const key = progressKey("studyDays");
    if (!key) return;
    let days = [];
    try {
      days = JSON.parse(localStorage.getItem(key) || "[]");
    } catch (_error) {
      days = [];
    }
    const day = todayKey();
    if (!days.includes(day)) {
      days.push(day);
      localStorage.setItem(key, JSON.stringify(days));
    }
  }

  function remember(page) {
    if (!page || !page.trackProgress) return;
    if (!getCurrentAccount()) return;
    const visitedKey = progressKey("visited");
    const lastLessonKey = progressKey("lastLesson");
    if (!visitedKey || !lastLessonKey) return;
    const visited = readVisited();
    visited.add(page.id);
    localStorage.setItem(visitedKey, JSON.stringify(Array.from(visited)));
    localStorage.setItem(lastLessonKey, page.id);
    rememberStudyDay();
  }

  function createLink(text, href, className) {
    const link = document.createElement("a");
    link.className = className;
    link.href = href;
    link.textContent = text;
    return link;
  }

  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_error) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function isLoggedIn() {
    return Boolean(localStorage.getItem(currentAccountKey));
  }

  function getCurrentAccount() {
    const accountKey = localStorage.getItem(currentAccountKey) || "";
    const accounts = readJson(accountsKey, {});
    if (!accountKey || !accounts[accountKey]) return null;
    return { ...accounts[accountKey], accountKey };
  }

  function ensureLoginNotice() {
    let notice = document.querySelector(".login-required-panel");
    if (notice) return notice;

    const partC = document.getElementById("part-c");
    if (!partC || !partC.parentNode) return null;

    notice = document.createElement("section");
    notice.className = "login-required-panel";
    notice.hidden = true;

    const title = document.createElement("h2");
    title.textContent = "Cần đăng nhập để làm kiểm tra";

    const message = document.createElement("p");
    message.textContent = "Em hãy đăng nhập tài khoản học sinh trước khi vào Phần C - Kiểm tra đánh giá.";

    const loginLink = createLink("Về trang chủ đăng nhập", homeHref, "login-required-panel__button");
    loginLink.addEventListener("click", () => {
      sessionStorage.setItem(openAuthRequestKey, "1");
    });

    notice.append(title, message, loginLink);
    partC.parentNode.insertBefore(notice, partC);
    return notice;
  }

  function showLoginNotice() {
    const notice = ensureLoginNotice();
    if (!notice) return;
    notice.hidden = false;
    notice.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function lockAssessmentUntilLogin() {
    const partC = document.getElementById("part-c");
    if (!partC || isLoggedIn()) return;

    const partCTab = document.querySelector('[data-tab="part-c"]');
    if (partCTab) {
      partCTab.classList.add("is-locked");
      partCTab.setAttribute("aria-disabled", "true");
      partCTab.title = "Em cần đăng nhập để làm kiểm tra.";
    }

    partC.classList.add("is-login-locked");
    partC.querySelectorAll("input, textarea, select, button").forEach((control) => {
      control.disabled = true;
      control.setAttribute("aria-disabled", "true");
    });

    document.addEventListener(
      "click",
      (event) => {
        const trigger = event.target.closest('[data-tab="part-c"], [data-tab-jump="part-c"]');
        if (!trigger || isLoggedIn()) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        showLoginNotice();
      },
      true
    );
  }

  function markAssessmentStart() {
    if (!assessmentStartedAt) assessmentStartedAt = new Date();
  }

  function formatDateTime(date) {
    return date.toLocaleString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });
  }

  function formatDuration(ms) {
    const totalSeconds = Math.max(0, Math.round(ms / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    if (minutes <= 0) return `${seconds} giây`;
    return `${minutes} phút ${seconds} giây`;
  }

  function parseScore(text) {
    const match = /(\d+(?:[,.]\d+)?)\s*\/\s*10/.exec(String(text || ""));
    return match ? Number(match[1].replace(",", ".")) : null;
  }

  function getTotalScore() {
    const resultContent = document.getElementById("result-content");
    if (!resultContent) return null;

    const metrics = Array.from(resultContent.querySelectorAll(".result-metric"));
    for (const metric of metrics) {
      const label = metric.querySelector("span")?.textContent || "";
      if (label.toLowerCase().includes("tổng điểm")) {
        const score = parseScore(metric.querySelector("strong")?.textContent || "");
        if (score !== null) return score;
      }
    }
    return parseScore(resultContent.textContent);
  }

  function getRank(score) {
    if (score >= 9) return "Xuất sắc";
    if (score >= 7) return "Tốt";
    if (score >= 5) return "Đạt";
    return "Cần cố gắng";
  }

  function getFieldValue(id, fallback = "Chưa nhập") {
    const field = document.getElementById(id);
    const value = field && "value" in field ? field.value.trim() : "";
    return value || fallback;
  }

  function getWrittenImagesKey(current) {
    return `${writtenImageUploadsKeyPrefix}.${current.id}`;
  }

  function getQuestionLabel(textarea, index) {
    const card = textarea.closest(".question-card");
    const title = card?.querySelector(".question-title")?.textContent.trim();
    if (title) return title.replace(/\s+/g, " ");
    return `Tự luận ${index + 1}`;
  }

  function estimateDataUrlBytes(dataUrl) {
    const payload = String(dataUrl || "").split(",")[1] || "";
    return Math.round((payload.length * 3) / 4);
  }

  function formatFileSize(bytes) {
    if (!bytes) return "0 KB";
    if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  function safeFileName(value) {
    return String(value || "bai-lam")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9._-]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80) || "bai-lam";
  }

  function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(String(reader.result || "")));
      reader.addEventListener("error", () => reject(reader.error || new Error("Không thể đọc ảnh.")));
      reader.readAsDataURL(file);
    });
  }

  async function normalizeImageFile(file) {
    const rawDataUrl = await readFileAsDataUrl(file);
    return new Promise((resolve) => {
      const image = new Image();
      image.addEventListener("load", () => {
        try {
          const maxSide = 1400;
          const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
          const width = Math.max(1, Math.round(image.width * scale));
          const height = Math.max(1, Math.round(image.height * scale));
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const context = canvas.getContext("2d");
          context.fillStyle = "#ffffff";
          context.fillRect(0, 0, width, height);
          context.drawImage(image, 0, 0, width, height);
          const dataUrl = canvas.toDataURL("image/jpeg", 0.82);
          resolve({
            dataUrl,
            type: "image/jpeg",
            size: estimateDataUrlBytes(dataUrl)
          });
        } catch (_error) {
          resolve({
            dataUrl: rawDataUrl,
            type: file.type || "image/*",
            size: estimateDataUrlBytes(rawDataUrl)
          });
        }
      });
      image.addEventListener("error", () => {
        resolve({
          dataUrl: rawDataUrl,
          type: file.type || "image/*",
          size: estimateDataUrlBytes(rawDataUrl)
        });
      });
      image.src = rawDataUrl;
    });
  }

  function readWrittenImageUploads(current) {
    return readJson(getWrittenImagesKey(current), []).filter((item) => item && item.fieldId && item.dataUrl);
  }

  function persistWrittenImageUploads(current) {
    try {
      writeJson(getWrittenImagesKey(current), writtenImageUploads);
      return true;
    } catch (_error) {
      return false;
    }
  }

  function getWrittenImage(fieldId) {
    return writtenImageUploads.find((item) => item.fieldId === fieldId) || null;
  }

  function setWrittenImage(current, imageRecord) {
    writtenImageUploads = writtenImageUploads.filter((item) => item.fieldId !== imageRecord.fieldId);
    writtenImageUploads.push(imageRecord);
    return persistWrittenImageUploads(current);
  }

  function removeWrittenImage(current, fieldId) {
    writtenImageUploads = writtenImageUploads.filter((item) => item.fieldId !== fieldId);
    persistWrittenImageUploads(current);
  }

  function getUploadedWrittenImages() {
    return writtenImageUploads.filter((item) => item && item.dataUrl);
  }

  function getManualReviewItems() {
    return getUploadedWrittenImages().map((item) => `${item.questionLabel} (${item.fileName})`);
  }

  function updateUploadPreview(control, imageRecord) {
    const preview = control.querySelector(".written-image-upload__preview");
    const img = control.querySelector("img");
    const meta = control.querySelector(".written-image-upload__meta");
    const removeButton = control.querySelector("[data-remove-written-image]");

    if (!preview || !img || !meta || !removeButton) return;

    if (!imageRecord) {
      preview.hidden = true;
      img.removeAttribute("src");
      meta.textContent = "";
      removeButton.hidden = true;
      return;
    }

    img.src = imageRecord.dataUrl;
    img.alt = `Ảnh bài làm: ${imageRecord.questionLabel}`;
    meta.textContent = `${imageRecord.fileName} - ${formatFileSize(imageRecord.size)}`;
    preview.hidden = false;
    removeButton.hidden = false;
  }

  function setUploadStatus(control, message, isError = false) {
    const status = control.querySelector(".written-image-upload__status");
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("is-error", Boolean(isError));
  }

  function createWrittenImageControl(current, textarea, index) {
    if (!textarea.id) textarea.id = `written-answer-${index + 1}`;
    const fieldId = textarea.id;
    const control = document.createElement("div");
    control.className = "written-image-upload";
    control.dataset.writtenImageControl = fieldId;

    const inputId = `${fieldId}-image-upload`;
    const questionLabel = getQuestionLabel(textarea, index);
    control.innerHTML = `
      <div class="written-image-upload__actions">
        <label class="written-image-upload__button" for="${inputId}">Tải ảnh bài làm</label>
        <input id="${inputId}" type="file" accept="image/*" />
        <button type="button" data-remove-written-image hidden>Gỡ ảnh</button>
      </div>
      <p class="written-image-upload__hint">Dùng khi em làm tự luận trên giấy. Hệ thống không tự chấm ảnh chữ viết tay; ảnh sẽ được báo giáo viên chấm lại.</p>
      <div class="written-image-upload__preview" hidden>
        <img alt="" />
        <span class="written-image-upload__meta"></span>
      </div>
      <p class="written-image-upload__status" role="status"></p>
    `;

    const fileInput = control.querySelector("input[type='file']");
    const removeButton = control.querySelector("[data-remove-written-image]");

    fileInput.addEventListener("change", async () => {
      const file = fileInput.files && fileInput.files[0];
      if (!file) return;
      if (!file.type.startsWith("image/")) {
        setUploadStatus(control, "Em vui lòng chọn file ảnh.", true);
        fileInput.value = "";
        return;
      }

      setUploadStatus(control, "Đang xử lý ảnh...");
      try {
        const normalized = await normalizeImageFile(file);
        const imageRecord = {
          fieldId,
          questionLabel,
          fileName: file.name || `${fieldId}.jpg`,
          type: normalized.type,
          size: normalized.size,
          originalSize: file.size,
          uploadedAt: formatDateTime(new Date()),
          dataUrl: normalized.dataUrl
        };
        const saved = setWrittenImage(current, imageRecord);
        updateUploadPreview(control, imageRecord);
        setUploadStatus(
          control,
          saved
            ? "Đã lưu ảnh. Khi nộp bài, giáo viên sẽ nhận thông báo cần chấm lại câu này."
            : "Đã nhận ảnh trong phiên hiện tại, nhưng bộ nhớ trình duyệt không đủ để lưu lâu dài.",
          !saved
        );
        markAssessmentStart();
      } catch (_error) {
        setUploadStatus(control, "Không thể đọc ảnh này. Em hãy thử ảnh khác.", true);
      }
    });

    removeButton.addEventListener("click", () => {
      removeWrittenImage(current, fieldId);
      fileInput.value = "";
      updateUploadPreview(control, null);
      setUploadStatus(control, "Đã gỡ ảnh bài làm.");
    });

    updateUploadPreview(control, getWrittenImage(fieldId));
    return control;
  }

  function bindWrittenImageUploads(current) {
    const partC = document.getElementById("part-c");
    if (!partC) return;

    writtenImageUploads = readWrittenImageUploads(current);
    const textareas = Array.from(partC.querySelectorAll(".question-card textarea[data-save]"));
    textareas.forEach((textarea, index) => {
      if (textarea.nextElementSibling?.classList.contains("written-image-upload")) return;
      const control = createWrittenImageControl(current, textarea, index);
      textarea.insertAdjacentElement("afterend", control);
    });
  }

  function createWrittenImageDownloadLink(imageRecord, index) {
    const link = document.createElement("a");
    link.className = "written-image-review__download";
    link.href = imageRecord.dataUrl;
    link.download = `${safeFileName(imageRecord.questionLabel)}-${index + 1}.jpg`;
    link.textContent = "Tải ảnh";
    return link;
  }

  function renderWrittenImageReviewList(container) {
    const images = getUploadedWrittenImages();
    if (!images.length) return;

    const review = document.createElement("div");
    review.className = "written-image-review";

    const title = document.createElement("h4");
    title.textContent = "Ảnh bài làm cần giáo viên chấm lại";

    const note = document.createElement("p");
    note.textContent = "Email phản hồi đã nêu các câu có ảnh. Do trình duyệt không cho tự đính kèm file vào email, em hãy tải ảnh dưới đây rồi đính kèm khi gửi cho giáo viên.";

    const list = document.createElement("div");
    list.className = "written-image-review__list";

    images.forEach((imageRecord, index) => {
      const item = document.createElement("article");
      item.className = "written-image-review__item";

      const img = document.createElement("img");
      img.src = imageRecord.dataUrl;
      img.alt = `Ảnh bài làm ${imageRecord.questionLabel}`;

      const info = document.createElement("div");
      const label = document.createElement("strong");
      label.textContent = imageRecord.questionLabel;
      const meta = document.createElement("span");
      meta.textContent = `${imageRecord.fileName} - ${formatFileSize(imageRecord.size)}`;
      info.append(label, meta, createWrittenImageDownloadLink(imageRecord, index));
      item.append(img, info);
      list.append(item);
    });

    review.append(title, note, list);
    container.append(review);
  }

  function getAssessmentRecords() {
    return readJson(assessmentResultsKey, []);
  }

  function saveAssessmentRecord(record) {
    const records = getAssessmentRecords();
    records.push(record);
    writeJson(assessmentResultsKey, records);
    return records;
  }

  function buildAssessmentRecord(current) {
    const score = getTotalScore();
    if (score === null || Number.isNaN(score)) return null;

    const account = getCurrentAccount();
    const submittedAt = new Date();
    const startedAt = assessmentStartedAt || submittedAt;
    const studentName = getFieldValue("student-name", account?.username || "Chưa nhập");
    const className = getFieldValue("student-class", account?.className || "Chưa nhập");
    const lessonCode = getFieldValue("student-code", current.id);
    const correct = Number(score.toFixed(2));
    const wrong = Number(Math.max(0, 10 - score).toFixed(2));
    const manualReviewItems = getManualReviewItems();
    const needsManualReview = manualReviewItems.length > 0;

    return {
      id: `${lessonCode}-${submittedAt.getTime()}`,
      username: account?.accountKey || "khach",
      student_name: studentName,
      school: account?.school || "Chưa nhập",
      class_name: className,
      email: account?.email || "Chưa nhập",
      chapter: "Chương 1",
      lesson: current.label,
      test_name: current.title,
      start_time: formatDateTime(startedAt),
      submit_time: formatDateTime(submittedAt),
      duration: formatDuration(submittedAt - startedAt),
      score: correct,
      correct_answers: correct,
      wrong_answers: wrong,
      rank: getRank(score),
      status: needsManualReview ? "Cần giáo viên chấm lại ảnh bài làm" : "Hoàn thành",
      manual_review_required: needsManualReview ? "Có" : "Không",
      manual_review_items: manualReviewItems.join("; "),
      uploaded_image_count: manualReviewItems.length,
      teacher_email: teacherEmail,
      page_url: window.location.href
    };
  }

  function csvEscape(value) {
    const text = String(value ?? "");
    if (/[",\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
    return text;
  }

  function recordsToCsv(records) {
    const columns = [
      ["STT", (_record, index) => index + 1],
      ["Tên đăng nhập", (record) => record.username],
      ["Họ và tên", (record) => record.student_name],
      ["Trường", (record) => record.school],
      ["Lớp", (record) => record.class_name],
      ["Email", (record) => record.email],
      ["Chương", (record) => record.chapter],
      ["Bài", (record) => record.lesson],
      ["Tên bài kiểm tra", (record) => record.test_name],
      ["Thời gian bắt đầu", (record) => record.start_time],
      ["Thời gian nộp bài", (record) => record.submit_time],
      ["Tổng thời gian làm bài", (record) => record.duration],
      ["Điểm", (record) => record.score],
      ["Số câu/ý đúng", (record) => record.correct_answers],
      ["Số câu/ý sai", (record) => record.wrong_answers],
      ["Xếp loại", (record) => record.rank],
      ["Trạng thái", (record) => record.status],
      ["Cần chấm lại ảnh", (record) => record.manual_review_required || "Không"],
      ["Các câu có ảnh bài làm", (record) => record.manual_review_items || ""],
      ["Số ảnh đã tải", (record) => record.uploaded_image_count || 0],
      ["Email giáo viên", (record) => record.teacher_email]
    ];
    const header = columns.map(([label]) => csvEscape(label)).join(",");
    const rows = records.map((record, index) => columns.map(([_label, getter]) => csvEscape(getter(record, index))).join(","));
    return `\uFEFF${[header, ...rows].join("\n")}`;
  }

  function downloadAssessmentCsv(records) {
    const csv = recordsToCsv(records);
    const date = new Date().toISOString().slice(0, 10);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `TKKetQua_Toan6_Chuong1_${date}.csv`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function buildEmailBody(record) {
    const lines = [
      "Kính gửi cô,",
      "",
      "Hệ thống TMath gửi cô thống kê kết quả bài kiểm tra của học sinh.",
      "",
      `Họ và tên: ${record.student_name}`,
      `Tên đăng nhập: ${record.username}`,
      `Trường: ${record.school}`,
      `Lớp: ${record.class_name}`,
      `Email học sinh: ${record.email}`,
      `Bài kiểm tra: ${record.lesson} - ${record.test_name}`,
      `Thời gian bắt đầu: ${record.start_time}`,
      `Thời gian nộp bài: ${record.submit_time}`,
      `Tổng thời gian làm bài: ${record.duration}`,
      `Điểm: ${record.score}/10`,
      `Số câu/ý đúng: ${record.correct_answers}`,
      `Số câu/ý sai: ${record.wrong_answers}`,
      `Xếp loại: ${record.rank}`,
      `Trạng thái: ${record.status}`,
    ];

    if (record.manual_review_required === "Có") {
      lines.push(
        "",
        "Phản hồi cần giáo viên chấm lại:",
        `Học sinh đã tải ${record.uploaded_image_count} ảnh bài làm ở phần tự luận/vận dụng.`,
        `Các câu có ảnh: ${record.manual_review_items}`,
        "Hệ thống không tự chấm ảnh chữ viết tay. Em cần đính kèm ảnh bài làm trong email này, hoặc tải ảnh từ phần Kết quả trên trang để gửi cô chấm lại và phản hồi."
      );
    }

    lines.push(
      "",
      "Nếu cần bảng dữ liệu, học sinh có thể bấm nút Tải file Excel trên trang kết quả rồi đính kèm vào email này.",
      "",
      "Trân trọng."
    );

    return lines.join("\n");
  }

  function openTeacherEmail(record) {
    const subjectPrefix = record.manual_review_required === "Có" ? "Cần chấm lại ảnh bài làm" : "Thống kê kết quả bài kiểm tra";
    const subject = encodeURIComponent(`${subjectPrefix} Toán 6 - ${record.lesson}`);
    const body = encodeURIComponent(buildEmailBody(record));
    window.location.href = `mailto:${teacherEmail}?subject=${subject}&body=${body}`;
  }

  function getAssessmentAnswerKeySource() {
    const keys = Array.from(document.querySelectorAll("#part-c details.answer-key"));
    if (!keys.length) return null;
    return keys.find((key) => /đáp án.*hướng dẫn chấm/i.test(key.querySelector("summary")?.textContent || "")) || keys[keys.length - 1];
  }

  function renderAnswerKeyInResult() {
    const result = document.getElementById("result");
    const source = getAssessmentAnswerKeySource();
    if (!result || !source) return;

    result.querySelector(".result-answer-key")?.remove();
    const answerKey = source.cloneNode(true);
    answerKey.classList.remove("answer-key");
    answerKey.classList.add("result-answer-key");
    answerKey.open = true;
    answerKey.querySelectorAll("[id]").forEach((element) => element.removeAttribute("id"));

    const summary = answerKey.querySelector("summary");
    if (summary) summary.textContent = "Đáp án và hướng dẫn chấm";

    const reportPanel = result.querySelector(".assessment-report-panel");
    if (reportPanel) {
      result.insertBefore(answerKey, reportPanel);
    } else {
      result.append(answerKey);
    }
  }

  function ensureReportPanel() {
    let panel = document.querySelector(".assessment-report-panel");
    if (panel) return panel;

    const result = document.getElementById("result");
    if (!result) return null;
    panel = document.createElement("section");
    panel.className = "assessment-report-panel";
    result.append(panel);
    return panel;
  }

  function renderReportPanel(record, records) {
    const panel = ensureReportPanel();
    if (!panel) return;

    panel.textContent = "";
    const title = document.createElement("h3");
    title.textContent = "Thống kê kết quả gửi giáo viên";

    const summary = document.createElement("p");
    summary.textContent = `Kết quả bài làm đã được lưu lại và gửi cho giáo viên. Hệ thống tự động cập nhật vào trang tính gửi vào tài khoản ${teacherEmail}.`;

    const actions = document.createElement("div");
    actions.className = "assessment-report-actions";

    const downloadButton = document.createElement("button");
    downloadButton.type = "button";
    downloadButton.textContent = "Tải file Excel";
    downloadButton.addEventListener("click", () => downloadAssessmentCsv(records));

    const emailButton = document.createElement("button");
    emailButton.type = "button";
    emailButton.textContent = "Mở lại email gửi giáo viên";
    emailButton.addEventListener("click", () => openTeacherEmail(record));

    actions.append(downloadButton, emailButton);
    panel.append(title, summary, actions);
    renderWrittenImageReviewList(panel);
  }

  function handleAssessmentSubmitted(current) {
    const record = buildAssessmentRecord(current);
    if (!record) return;
    if (record.id === lastSavedAssessmentId) return;
    lastSavedAssessmentId = record.id;
    const records = saveAssessmentRecord(record);
    renderAnswerKeyInResult();
    renderReportPanel(record, records);

    if (record.id !== lastAutoEmailId) {
      lastAutoEmailId = record.id;
      window.setTimeout(() => openTeacherEmail(record), 120);
    }
  }

  function bindAssessmentReporting(current) {
    const partC = document.getElementById("part-c");
    const submitButton = document.getElementById("submit-test");
    if (!partC || !submitButton) return;

    partC.addEventListener("input", markAssessmentStart, true);
    partC.addEventListener("focusin", markAssessmentStart);
    partC.addEventListener("click", markAssessmentStart, true);

    submitButton.addEventListener(
      "click",
      () => {
        markAssessmentStart();
        window.setTimeout(() => handleAssessmentSubmitted(current), 80);
      },
      true
    );
  }

  function mount() {
    const currentId = document.body ? document.body.dataset.lessonId : "";
    const currentIndex = pages.findIndex((page) => page.id === currentId);
    if (currentIndex === -1 || document.querySelector(".learning-site-bar")) return;

    const current = pages[currentIndex];
    const next = pages[currentIndex + 1];
    remember(current);

    const bar = document.createElement("nav");
    bar.className = "learning-site-bar";
    bar.setAttribute("aria-label", "Điều hướng website học tập");

    const inner = document.createElement("div");
    inner.className = "learning-site-bar__inner";

    const brand = createLink("TMath - Nền tảng học toán trực tuyến", homeHref, "learning-site-bar__brand");
    const mark = document.createElement("span");
    mark.className = "learning-site-bar__mark";
    mark.textContent = "T";
    brand.prepend(mark);

    const nav = document.createElement("div");
    nav.className = "learning-site-bar__nav";

    const chapterHref = getHomeHref(current.chapterHash || "danh-sach-bai");

    nav.append(createLink("Trang chủ", homeHref, "learning-site-bar__link"));
    nav.append(createLink(current.gradeLabel || "Lớp", chapterHref, "learning-site-bar__link"));
    nav.append(createLink(current.chapterLabel || "Chương", chapterHref, "learning-site-bar__link"));

    const currentLabel = document.createElement("span");
    currentLabel.className = "learning-site-bar__current";
    currentLabel.textContent = current.label;
    currentLabel.setAttribute("aria-current", "page");
    nav.append(currentLabel);

    if (next) nav.append(createLink("Bài sau", next.href, "learning-site-bar__link"));

    const printButton = document.createElement("button");
    printButton.className = "learning-site-bar__button";
    printButton.type = "button";
    printButton.textContent = "In";
    printButton.addEventListener("click", () => window.print());
    nav.append(printButton);

    inner.append(brand, nav);
    bar.append(inner);
    document.body.prepend(bar);
    bindWrittenImageUploads(current);
    lockAssessmentUntilLogin();
    bindAssessmentReporting(current);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();

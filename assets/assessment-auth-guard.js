(function () {
  const accountsKey = "phieuhoctap.accounts";
  const currentAccountKey = "phieuhoctap.auth.current";
  const openAuthRequestKey = "phieuhoctap.openAuth";

  function readAccounts() {
    try {
      return JSON.parse(localStorage.getItem(accountsKey) || "{}");
    } catch (_error) {
      return {};
    }
  }

  function isLoggedIn() {
    const accountKey = localStorage.getItem(currentAccountKey) || "";
    return Boolean(accountKey && readAccounts()[accountKey]);
  }

  function getHomeHref() {
    const scriptUrl = document.currentScript && document.currentScript.src;
    try {
      const url = new URL("../index.html", scriptUrl || window.location.href);
      url.hash = "dang-nhap";
      return url.href;
    } catch (_error) {
      return "../../../index.html#dang-nhap";
    }
  }

  function addStyles() {
    if (document.getElementById("assessment-auth-guard-styles")) return;
    const style = document.createElement("style");
    style.id = "assessment-auth-guard-styles";
    style.textContent = `
      .assessment-login-notice { background:#fff8e7; border:1px solid #e7c875; border-left:5px solid #c88a00; border-radius:10px; color:#3e3520; margin:18px 0; padding:18px; }
      .assessment-login-notice[hidden] { display:none !important; }
      .assessment-login-notice h2 { margin:0 0 8px; }
      .assessment-login-notice p { margin:0 0 14px; }
      .assessment-login-notice a { background:#176f78; border-radius:8px; color:#fff; display:inline-flex; font-weight:700; padding:10px 14px; text-decoration:none; }
      .assessment-tab-locked { cursor:not-allowed !important; opacity:.62; }
      .assessment-content-locked { opacity:.72; }
    `;
    document.head.appendChild(style);
  }

  function findAssessmentPanel() {
    return document.getElementById("part-c") || document.getElementById("phan-c");
  }

  function isAssessmentTrigger(element) {
    if (!element || !element.closest) return false;
    return Boolean(element.closest('[data-tab="part-c"], [data-tab-jump="part-c"], [data-target="phan-c"], a[href="#part-c"], a[href="#phan-c"]'));
  }

  function ensureNotice(panel) {
    let notice = document.querySelector(".assessment-login-notice");
    if (notice) return notice;
    notice = document.createElement("section");
    notice.className = "assessment-login-notice";
    notice.hidden = true;
    notice.setAttribute("role", "status");
    notice.innerHTML = "<h2>Cần đăng nhập để làm kiểm tra</h2><p>Em hãy đăng nhập tài khoản học sinh trước khi vào phần Kiểm tra đánh giá.</p>";
    const loginLink = document.createElement("a");
    loginLink.href = getHomeHref();
    loginLink.textContent = "Về trang chủ đăng nhập";
    loginLink.addEventListener("click", function () {
      sessionStorage.setItem(openAuthRequestKey, "1");
    });
    notice.appendChild(loginLink);
    panel.parentNode.insertBefore(notice, panel);
    return notice;
  }

  function showNotice(panel) {
    const notice = ensureNotice(panel);
    notice.hidden = false;
    notice.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function lockAssessment() {
    const panel = findAssessmentPanel();
    if (!panel || isLoggedIn()) return;
    addStyles();
    document.querySelectorAll('[data-tab="part-c"], [data-target="phan-c"], a[href="#part-c"], a[href="#phan-c"]').forEach(function (trigger) {
      trigger.classList.add("assessment-tab-locked");
      trigger.setAttribute("aria-disabled", "true");
      trigger.title = "Em cần đăng nhập để làm kiểm tra.";
    });
    panel.classList.add("assessment-content-locked");
    panel.querySelectorAll("input, textarea, select, button").forEach(function (control) {
      control.disabled = true;
      control.setAttribute("aria-disabled", "true");
    });
    document.addEventListener("click", function (event) {
      if (!isAssessmentTrigger(event.target) || isLoggedIn()) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      showNotice(panel);
    }, true);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", lockAssessment, { once: true });
  else lockAssessment();
})();

const path = require("path");
const { chromium } = require("/Users/trangtrang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "skkn_assets");

async function capture() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    args: ["--no-sandbox", "--disable-gpu"],
  });
  const page = await browser.newPage({ viewport: { width: 1365, height: 900 }, deviceScaleFactor: 1 });

  await page.goto(`file://${path.join(root, "index.html")}`, { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outDir, "website-trang-chu.png"), fullPage: false });

  await page.click("[data-open-auth]");
  await page.waitForSelector("#dang-nhap:not([hidden])");
  await page.locator("#dang-nhap").screenshot({ path: path.join(outDir, "website-dang-nhap.png") });

  await page.click("[data-open-guide]");
  await page.waitForSelector("#huong-dan:not([hidden])");
  await page.locator("#huong-dan").screenshot({ path: path.join(outDir, "website-huong-dan.png") });

  await page.click("[data-open-course]");
  await page.waitForSelector("#danh-sach-bai:not([hidden])");
  await page.screenshot({ path: path.join(outDir, "website-danh-sach-bai.png"), fullPage: false });

  await page.addInitScript(() => {
    localStorage.setItem("phieuhoctap.auth.current", "demo");
  });

  await page.goto(`file://${path.join(root, "Toan6-Chuong1-Bai1", "Toan6-Chuong1-Bai1.html")}`, {
    waitUntil: "networkidle",
  });
  await page.screenshot({ path: path.join(outDir, "website-phieu-bai-1.png"), fullPage: false });

  await page.click('[data-tab="part-a"]');
  await page.screenshot({ path: path.join(outDir, "phieu-bai-1-phan-a.png"), fullPage: false });

  await page.click('[data-tab="part-b"]');
  await page.screenshot({ path: path.join(outDir, "phieu-bai-1-phan-b.png"), fullPage: false });
  await page.selectOption("#b-symbol-1", "∈");
  await page.selectOption("#b-symbol-2", "∉");
  await page.selectOption("#b-symbol-3", "∈");
  await page.click("[data-check-symbols]");
  await page.screenshot({ path: path.join(outDir, "phieu-bai-1-hoat-dong-luyen-tap.png"), fullPage: false });

  await page.click('[data-tab="part-c"]');
  await page.screenshot({ path: path.join(outDir, "phieu-bai-1-phan-c.png"), fullPage: false });

  await page.fill("#student-name", "Nguyễn Minh Anh");
  await page.fill("#student-class", "6A");
  await page.check('input[name="q1"][value="B"]');
  await page.check('input[name="q2"][value="B"]');
  await page.check('input[name="q3"][value="C"]');
  await page.check('input[name="q4"][value="A"]');
  await page.check('input[name="q5"][value="D"]');
  await page.fill("#w1", "A = {0; 1; 2; 3; 4; 5}");
  await page.fill("#w2", "B = {T; O; A; N}");
  await page.fill("#w3", "T = {Mai; Nam; Lan}");
  await page.click("#submit-test");
  await page.locator("#result").scrollIntoViewIfNeeded();
  await page.locator("#result").screenshot({ path: path.join(outDir, "phieu-bai-1-ket-qua.png") });

  await page.goto(`file://${path.join(root, "index.html")}`, { waitUntil: "networkidle" });
  await page.evaluate(() => {
    const accountKey = "demo";
    const today = new Date();
    const dayKey = (offset) => {
      const date = new Date(today);
      date.setDate(date.getDate() - offset);
      return date.toISOString().slice(0, 10);
    };
    localStorage.setItem("phieuhoctap.auth.current", accountKey);
    localStorage.setItem(
      "phieuhoctap.accounts",
      JSON.stringify({
        demo: {
          username: "Nguyễn Minh Anh",
          email: "minhanh6a@example.com",
        },
      })
    );
    localStorage.setItem(
      "phieuhoctap.user.demo.chuong1.visited",
      JSON.stringify(["bai-1", "bai-2", "bai-3", "bai-4"])
    );
    localStorage.setItem("phieuhoctap.user.demo.chuong1.lastLesson", "bai-4");
    localStorage.setItem("phieuhoctap.user.demo.chuong1.studyDays", JSON.stringify([dayKey(2), dayKey(1), dayKey(0)]));
  });
  await page.reload({ waitUntil: "networkidle" });
  await page.locator("#chuoi-hoc-tap").scrollIntoViewIfNeeded();
  await page.locator("#chuoi-hoc-tap").screenshot({ path: path.join(outDir, "website-tien-do.png") });

  await browser.close();
}

capture().catch((error) => {
  console.error(error);
  process.exit(1);
});

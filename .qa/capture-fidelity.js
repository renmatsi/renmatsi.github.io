const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const output = 'C:/Users/Renan/Documents/Brain/Hermes/Auditorias/portfolio-renan/fidelity-qa';
fs.mkdirSync(output, { recursive: true });
const report = { consoleErrors: [], failedRequests: [], captures: [] };

async function attachDiagnostics(page) {
  page.on('console', message => {
    if (message.type() === 'error') report.consoleErrors.push(message.text());
  });
  page.on('requestfailed', request => {
    report.failedRequests.push({ url: request.url(), error: request.failure()?.errorText || 'unknown' });
  });
}

async function revealAll(page, selector = 'body') {
  await page.locator(selector).evaluate(async element => {
    const scroller = element === document.body ? document.scrollingElement : element;
    const maximum = scroller.scrollHeight - scroller.clientHeight;
    for (let y = 0; y <= maximum; y += Math.max(400, Math.floor(scroller.clientHeight * 0.7))) {
      scroller.scrollTo(0, y);
      await new Promise(resolve => setTimeout(resolve, 80));
    }
    scroller.scrollTo(0, 0);
  });
  await page.waitForTimeout(600);
}

async function waitForImages(page, selector = 'img') {
  await page.waitForFunction(target => [...document.querySelectorAll(target)].slice(0, 2).every(image => image.complete && image.naturalWidth > 0), selector, { timeout: 60000 });
}

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, colorScheme: 'dark' });
  const page = await context.newPage();
  await attachDiagnostics(page);
  await page.goto('http://127.0.0.1:8765/?qa=fidelity', { waitUntil: 'networkidle' });
  await waitForImages(page);
  const desktop = path.join(output, 'homepage-desktop.png');
  await page.screenshot({ path: desktop });
  report.captures.push(desktop);

  await page.locator('[data-project="tactical-operative"]').click();
  await page.waitForSelector('#projectDialog[open]');
  await page.addStyleTag({ content: '* { animation: none !important; transition: none !important; }' });
  await waitForImages(page, '#projectDialog .dialog-main img');
  await page.waitForTimeout(300);
  const tacticalTop = path.join(output, 'tactical-top.png');
  await page.screenshot({ path: tacticalTop });
  report.captures.push(tacticalTop);

  for (const section of ['final-renders', 'character', 'portrait', 'topology', 'sculpt', 'equipment']) {
    await page.locator(`[data-section="${section}"]`).evaluate(element => {
      const dialog = element.closest('dialog');
      const offset = element.getBoundingClientRect().top - dialog.getBoundingClientRect().top;
      dialog.scrollTop += offset - 18;
    });
    await page.waitForTimeout(250);
    await waitForImages(page, `[data-section="${section}"] img`);
    const target = path.join(output, `tactical-${section}.png`);
    await page.screenshot({ path: target });
    report.captures.push(target);
  }
  await page.locator('#dialogClose').click();

  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, colorScheme: 'dark' });
  const mobilePage = await mobile.newPage();
  await attachDiagnostics(mobilePage);
  await mobilePage.goto('http://127.0.0.1:8765/?qa=fidelity-mobile', { waitUntil: 'networkidle' });
  await waitForImages(mobilePage);
  const mobileShot = path.join(output, 'homepage-mobile.png');
  await mobilePage.screenshot({ path: mobileShot });
  report.captures.push(mobileShot);

  report.status = report.consoleErrors.length || report.failedRequests.length ? 'WARN' : 'PASS';
  fs.writeFileSync(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  await mobile.close();
  await context.close();
  await browser.close();
})().catch(error => {
  console.error(error);
  process.exit(1);
});

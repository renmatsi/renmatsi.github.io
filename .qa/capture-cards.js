const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const output = 'C:/Users/Renan/Documents/Brain/Hermes/Auditorias/portfolio-renan/fidelity-qa';
fs.mkdirSync(output, { recursive: true });
const projects = ['tactical-operative', 'stylized-armory', 'pantufa', 'tiny-hero', 'ranay'];

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, colorScheme: 'dark' });
  const consoleErrors = [];
  const failedRequests = [];
  page.on('console', message => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  page.on('requestfailed', request => failedRequests.push({ url: request.url(), error: request.failure()?.errorText || 'unknown' }));

  await page.goto('http://127.0.0.1:8765/?qa=cards', { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: '* { animation: none !important; transition: none !important; }' });

  const captures = [];
  const states = {};
  for (const project of projects) {
    const card = page.locator(`[data-project="${project}"]`);
    await card.scrollIntoViewIfNeeded();
    await card.locator('img').evaluate(image => {
      if (image.complete && image.naturalWidth > 0) return;
      return new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error(`Image timeout: ${image.src}`)), 30000);
        image.addEventListener('load', () => { clearTimeout(timer); resolve(); }, { once: true });
        image.addEventListener('error', () => { clearTimeout(timer); reject(new Error(`Image failed: ${image.src}`)); }, { once: true });
      });
    });
    await card.locator('img').evaluate(async image => {
      await image.decode();
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    });
    const target = path.join(output, `contained-v2-card-${project}.png`);
    states[project] = await card.locator('img').evaluate(image => ({
      src: image.getAttribute('src'),
      complete: image.complete,
      naturalWidth: image.naturalWidth,
      imageOpacity: getComputedStyle(image).opacity,
      imageVisibility: getComputedStyle(image).visibility,
      imageDisplay: getComputedStyle(image).display,
      imageFilter: getComputedStyle(image).filter,
      imageTransform: getComputedStyle(image).transform,
      imageZIndex: getComputedStyle(image).zIndex,
      cardOpacity: getComputedStyle(image.closest('.project-card')).opacity,
      detailsOpen: image.closest('details')?.open ?? null,
      bounds: image.getBoundingClientRect().toJSON()
    }));
    await card.screenshot({ path: target });
    if (project === 'pantufa') {
      await card.locator('img').screenshot({ path: path.join(output, 'contained-v2-pantufa-image-element.png') });
    }
    captures.push(target);
  }

  const report = { status: consoleErrors.length || failedRequests.length ? 'WARN' : 'PASS', consoleErrors, failedRequests, states, captures };
  fs.writeFileSync(path.join(output, 'cards-report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  await browser.close();
})().catch(error => {
  console.error(error);
  process.exit(1);
});

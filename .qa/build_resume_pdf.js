const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const root = path.resolve(__dirname, '..');
  const outputDir = path.join(root, 'assets', 'resume');
  const output = path.join(outputDir, 'Renan-Matos-Lead-3D-Character-Artist.pdf');
  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:8765/resume.html', { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });
  await page.pdf({
    path: output,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
    outline: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  await browser.close();
  console.log(output);
})();

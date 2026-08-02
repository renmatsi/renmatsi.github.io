const { test, expect } = require('@playwright/test');

test.use({
  channel: 'msedge',
  viewport: { width: 1440, height: 900 },
  colorScheme: 'dark'
});

test('homepage opens directly on the art catalog', async ({ page }) => {
  await page.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle' });

  await expect(page.locator('.hero')).toHaveCount(0);
  const firstFeaturedBox = await page.locator('#projectsGrid .project-card').first().boundingBox();
  expect(firstFeaturedBox.y).toBeLessThan(600);
  await expect(page.locator('[data-project="male-character"] img')).toHaveAttribute('src', 'assets/work/male-character/portrait.webp');
});

test('homepage presents one ordered art catalog without visible classifications', async ({ page }) => {
  await page.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle' });

  await expect(page.locator('#projectsGrid .project-card')).toHaveCount(6);
  await expect(page.locator('.portfolio-group-heading')).toHaveCount(0);
  await expect(page.locator('#archiveDisclosure')).toHaveCount(0);

  const visibleProjectIds = await page.locator('#projectsGrid .project-card').evaluateAll(cards => cards.map(card => card.dataset.project));
  expect(visibleProjectIds).toEqual([
    'male-character',
    'priestess',
    'trial-xtreme-freedom',
    'ranay',
    'pantufa',
    'tiny-hero'
  ]);
});

test('featured case exposes contribution and a deliberate visual narrative', async ({ page }) => {
  await page.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle' });
  await page.locator('[data-project="male-character"]').click();

  const dialog = page.locator('#projectDialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('[data-fact="contribution"]')).toContainText('Character creation');
  await expect(dialog.locator('[data-fact="context"]')).toContainText('Personal');

  await expect(dialog.locator('.case-section')).toHaveCount(4);
  await expect(dialog.locator('.case-section h3')).toHaveText([
    'Final character',
    'Anatomy & surface',
    'Wardrobe & materials',
    'Prop study'
  ]);

  const altText = await dialog.locator('.case-media img').evaluateAll(images => images.map(image => image.alt));
  expect(altText.length).toBeGreaterThanOrEqual(8);
  expect(altText.length).toBeLessThanOrEqual(10);
  expect(altText.every(Boolean)).toBe(true);
});

test('production case groups four characters and states authorship boundaries', async ({ page }) => {
  await page.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle' });

  const card = page.locator('[data-project="trial-xtreme-freedom"]');
  await expect(card.locator('img')).toHaveAttribute('src', 'assets/covers/trial-xtreme.webp');
  await card.click();

  const dialog = page.locator('#projectDialog');
  await expect(dialog.locator('[data-fact="contribution"]')).toContainText('Selected character work');
  await expect(dialog.locator('[data-fact="context"]')).toContainText('Trial Xtreme Freedom');
  await expect(dialog.locator('[data-fact="boundaries"]')).toContainText('No claim');
  await expect(dialog.locator('.case-section h3')).toHaveText(['Bart', 'Bob', 'Cody', 'Kayla']);

  const imageSources = await dialog.locator('img').evaluateAll(images => images.map(image => image.getAttribute('src')));
  expect(imageSources.some(source => source && source.includes('assets/covers/bob.webp'))).toBe(false);
  const altText = await dialog.locator('.case-media img').evaluateAll(images => images.map(image => image.alt));
  expect(altText.length).toBe(13);
  expect(altText.every(Boolean)).toBe(true);
});

test('resume is machine-readable, evidence-based and downloadable', async ({ page }) => {
  await page.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle' });
  await expect(page.locator('nav a[href="resume.html"]')).toBeVisible();
  await page.locator('nav a[href="resume.html"]').click();
  await page.waitForLoadState('networkidle');

  await expect(page.locator('h1')).toHaveText('Renan Matos');
  await expect(page.locator('[data-resume-role]')).toContainText('Lead 3D Character Artist');
  await expect(page.locator('[data-resume-section="experience"] article')).toHaveCount(4);
  await expect(page.locator('[data-resume-section="skills"]')).toContainText('ZBrush');
  await expect(page.locator('[data-resume-section="skills"]')).toContainText('Unreal Engine');
  await expect(page.locator('a[download][href$=".pdf"]')).toHaveAttribute('href', 'assets/resume/Renan-Matos-Lead-3D-Character-Artist.pdf');

  const resumeText = await page.locator('main').innerText();
  expect(resumeText).not.toContain('AAA-quality');
  expect(resumeText).toContain('Gameplay Galaxy');
  expect(resumeText).toContain('Fire Games');
  expect(resumeText).toContain('Fiverr');
  expect(resumeText).toContain('BeByte');
  await expect(page.locator('canvas')).toHaveCount(0);
});

test('second featured project has local evidence and explicit project context', async ({ page }) => {
  await page.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle' });
  await page.locator('[data-project="priestess"]').click();

  const dialog = page.locator('#projectDialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('[data-fact="contribution"]')).toContainText('3D character artwork');
  await expect(dialog.locator('[data-fact="context"]')).toContainText('Personal character study');
  await expect(dialog.locator('.case-section h3')).toHaveText([
    'Final presentation',
    'Form and materials',
    'Topology evidence'
  ]);

  const sources = await dialog.locator('.case-media img').evaluateAll(images => images.map(image => image.getAttribute('src')));
  expect(sources.length).toBe(7);
  expect(sources.every(src => src.startsWith('assets/work/priestess/'))).toBe(true);
  const altText = await dialog.locator('.case-media img').evaluateAll(images => images.map(image => image.getAttribute('alt')?.trim()));
  expect(altText.every(Boolean)).toBe(true);
});

test('mobile catalog is single-column, named and free of horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle' });

  await expect(page.locator('#projectsGrid .project-card')).toHaveCount(6);
  const firstCard = await page.locator('#projectsGrid .project-card').first().boundingBox();
  const secondCard = await page.locator('#projectsGrid .project-card').nth(1).boundingBox();
  expect(Math.abs(firstCard.x - secondCard.x)).toBeLessThan(2);
  expect(firstCard.width).toBeLessThanOrEqual(358);

  const unnamedButtons = await page.locator('button').evaluateAll(buttons => buttons.filter(button => {
    const name = button.getAttribute('aria-label') || button.textContent;
    return !name || !name.trim();
  }).length);
  expect(unnamedButtons).toBe(0);

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);

  await page.locator('[data-project="male-character"]').click();
  await expect(page.locator('#projectDialog')).toBeVisible();
  await expect(page.locator('#dialogClose')).toBeVisible();
});

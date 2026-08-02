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
  await expect(page.locator('[data-project="male-character"] img')).toHaveAttribute('src', 'assets/work/male-character/canva-cover.webp');
});

test('homepage presents one ordered art catalog without visible classifications', async ({ page }) => {
  await page.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle' });

  await expect(page.locator('#projectsGrid .project-card')).toHaveCount(16);
  await expect(page.locator('.portfolio-group-heading')).toHaveCount(0);
  await expect(page.locator('#archiveDisclosure')).toHaveCount(0);

  const visibleProjectIds = await page.locator('#projectsGrid .project-card').evaluateAll(cards => cards.map(card => card.dataset.project));
  expect(visibleProjectIds).toEqual([
    'male-character',
    'priestess',
    'tactical-operative',
    'nordic-warrior',
    'trial-xtreme-freedom',
    'tiny-hero',
    'stone-age-family',
    'pirate-ship',
    'stylized-armory',
    'revolver',
    'ranay',
    'pantufa',
    'athletic-girl',
    'neon-sentinel',
    'realistic-portraits',
    'hooded-wanderer'
  ]);
});

test('featured case exposes contribution and a deliberate visual narrative', async ({ page }) => {
  await page.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle' });
  await page.locator('[data-project="male-character"]').click();

  const dialog = page.locator('#projectDialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('[data-fact="contribution"]')).toContainText('Character creation');
  await expect(dialog.locator('[data-fact="context"]')).toContainText('Character artwork');

  const surfaceRadii = await dialog.locator('.dialog-main-media, .project-facts, .case-media').evaluateAll(elements =>
    elements.map(element => getComputedStyle(element).borderTopLeftRadius)
  );
  expect(surfaceRadii.length).toBeGreaterThan(2);
  expect(surfaceRadii.every(radius => radius === '16px')).toBe(true);

  const tagRadius = await dialog.locator('.dialog-tags span').first().evaluate(element => getComputedStyle(element).borderTopLeftRadius);
  expect(tagRadius).toBe('999px');

  await expect(dialog.locator('.case-section')).toHaveCount(4);
  await expect(dialog.locator('.case-section h3')).toHaveText([
    'Final character',
    'Wardrobe',
    'Boot construction',
    'Anatomy & surface'
  ]);

  const altText = await dialog.locator('.case-media img').evaluateAll(images => images.map(image => image.alt));
  expect(altText.length).toBe(13);
  expect(altText.every(Boolean)).toBe(true);
  await expect(dialog.getByText('Prop study', { exact: true })).toHaveCount(0);
});

test('production case groups the complete rider lineup and states authorship boundaries', async ({ page }) => {
  await page.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle' });

  const card = page.locator('[data-project="trial-xtreme-freedom"]');
  await expect(card.locator('img')).toHaveAttribute('src', 'assets/covers/trial-xtreme.webp');
  await card.click();

  const dialog = page.locator('#projectDialog');
  await expect(dialog.locator('[data-fact="contribution"]')).toContainText('Selected character work');
  await expect(dialog.locator('[data-fact="context"]')).toContainText('Trial Xtreme Freedom');
  await expect(dialog.locator('[data-fact="boundaries"]')).toContainText('No claim');
  await expect(dialog.locator('.case-section h3')).toHaveText([
    'Streetwear rider',
    'Formal rider',
    'Motocross rider',
    'Beach rider',
    'Athlete rider'
  ]);

  const imageSources = await dialog.locator('img').evaluateAll(images => images.map(image => image.getAttribute('src')));
  expect(imageSources.some(source => source && source.includes('assets/covers/bob.webp'))).toBe(false);
  const altText = await dialog.locator('.case-media img').evaluateAll(images => images.map(image => image.alt));
  expect(altText.length).toBe(20);
  expect(altText.every(Boolean)).toBe(true);
});

test('stylized armory is an independent project with all weapon families', async ({ page }) => {
  await page.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle' });
  await page.locator('[data-project="stylized-armory"]').click();

  const dialog = page.locator('#projectDialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('.case-section h3')).toHaveText(['Axes', 'Shields', 'Blades']);
  await expect(dialog.locator('[data-fact="evidence"]')).toContainText('10 axes · 5 shields · 11 blades');
  await expect(dialog.locator('.case-media img')).toHaveCount(25);

  const importedSources = await dialog.locator('img').evaluateAll(images => images.map(image => image.getAttribute('src')));
  expect(importedSources.every(src => src.startsWith('assets/work/stylized-armory/'))).toBe(true);
});

test('revolver is published as an independent hard-surface asset', async ({ page }) => {
  await page.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle' });
  await page.locator('[data-project="revolver"]').click();

  const dialog = page.locator('#projectDialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('#dialogTitle')).toHaveText('Revolver');
  await expect(dialog.locator('.dialog-main img')).toHaveAttribute('src', 'assets/work/revolver/turnaround.webp');
  await expect(dialog.locator('[data-fact="source"]')).toContainText('Existing local portfolio archive');
  await expect(dialog.locator('[data-fact="type"]')).toContainText('Independent hard-surface weapon asset');
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
  await expect(dialog.locator('[data-fact="context"]')).toContainText('Character artwork');
  await expect(dialog.locator('.case-section h3')).toHaveText([
    'Feature portrait',
    'Final presentation',
    'Form and materials',
    'Topology evidence'
  ]);

  const sources = await dialog.locator('.case-media img').evaluateAll(images => images.map(image => image.getAttribute('src')));
  expect(sources.length).toBe(8);
  expect(sources.every(src => src.startsWith('assets/work/priestess/'))).toBe(true);
  const altText = await dialog.locator('.case-media img').evaluateAll(images => images.map(image => image.getAttribute('alt')?.trim()));
  expect(altText.every(Boolean)).toBe(true);
});

test('mobile catalog is single-column, named and free of horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle' });

  await expect(page.locator('#projectsGrid .project-card')).toHaveCount(16);
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

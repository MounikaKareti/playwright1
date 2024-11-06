import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 730,
    width: 1730
  }
});

test('test', async ({ page }) => {
  await page.locator('body').click();
});
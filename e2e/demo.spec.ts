import { test, expect } from '@playwright/test';

test('Widget bubblegum-ui-textarea', async ({ page }) => {
  await page.goto('http://localhost:7000/');

  await expect(page).toHaveTitle('Bubblegum User interface widgets experiment');

  const getStarted = page.locator('text=Lorem ipsum');

  await getStarted.click();

});

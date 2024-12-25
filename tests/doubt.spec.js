import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Mahidhar');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('mahi#1234');

  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
  await page.locator("//a[normalize-space()='Add to cart']").click()
});
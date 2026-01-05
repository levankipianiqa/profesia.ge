import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://profesia.ge/ka');
  await page.getByRole('link', { name: 'პროფესიები' }).click();
  await expect(page.locator('section')).toMatchAriaSnapshot(`- text: იპოვე შენი პროფესია`);
});
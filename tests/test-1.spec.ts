import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://profesia.ge/ka');
  await page.getByRole('link', { name: 'პროფესიები' }).click();
  await page.getByRole('textbox', { name: 'მაგ. დიზაინერი…' }).click();
  await page.getByRole('textbox', { name: 'მაგ. დიზაინერი…' }).fill('ანალიტიკოსი');
  await page.getByRole('button', { name: 'MagnifyingGlass.svg' }).click();
  await expect(page.locator('h1')).toContainText('კიბერუსაფრთხოების ანალიტიკოსი');
});
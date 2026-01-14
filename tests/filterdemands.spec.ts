import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://profesia.ge/ka/professions');
  await page.getByRole('button', { name: 'მაღალი მოთხოვნა' }).click();
  await page.locator('#max-slider').fill('3100');
  await page.getByRole('button', { name: 'ფილტრი' }).click();
  await page.goto('https://profesia.ge/ka/professions?demands%5B%5D=1&min_salary=500&max_salary=3100');
  await expect(page.locator('section')).toContainText('შეგირჩიე 2 პროფესია');
});
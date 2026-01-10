import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://profesia.ge/ka/professions');
  await page.getByRole('button', { name: 'მარკეტინგი' }).click();
  await page.getByRole('button', { name: 'ფილტრი' }).click();
  await expect(page.locator('section')).toContainText('შეგირჩიე 0 პროფესია');
});
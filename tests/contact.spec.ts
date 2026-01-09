import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://profesia.ge/ka');
  await page.getByRole('link', { name: 'კონტაქტი' }).click();
  await expect(page.locator('body')).toContainText('საკონტაქტო ინფორმაცია');
});
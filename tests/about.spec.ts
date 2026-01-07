import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://profesia.ge/ka');
  await page.getByRole('link', { name: 'ჩვენ შესახებ' }).click();
  await expect(page.locator('body')).toContainText('ჩვენ შესახებ');
});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://profesia.ge/ka');
  await page.getByRole('link', { name: 'ქვიზი', exact: true }).click();
  await expect(page.getByRole('heading')).toContainText('აღმოაჩინე შენი პროფესია');
});
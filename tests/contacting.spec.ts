import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://profesia.ge/ka');
  await page.getByRole('link', { name: 'კონტაქტი' }).click();
  await page.getByRole('textbox', { name: 'სახელი / გვარი' }).click();
  await page.getByRole('textbox', { name: 'სახელი / გვარი' }).fill('John Smith');
  await page.getByRole('textbox', { name: 'ელ.ფოსტა' }).click();
  await page.getByRole('textbox', { name: 'ელ.ფოსტა' }).fill('johnsmithtest111@gmail.com');
  await page.getByRole('textbox', { name: 'მოგვწერე' }).click();
  await page.getByRole('textbox', { name: 'მოგვწერე' }).fill('This is just a test');
  await page.getByRole('button', { name: 'გაგზავნა' }).click();
  await expect(page.locator('h3')).toContainText('შეტყობინება წარმატებით გაიგზავნა');
});
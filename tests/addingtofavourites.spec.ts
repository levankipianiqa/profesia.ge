import { test, expect } from '@playwright/test';

test('add profession to favourites', async ({ page }) => {
    await page.goto('https://profesia.ge/ka/professions');
    
    // Click the heart icon with data-id="7"
    await page.locator('div[class="PS-heart-div"][data-id="7"]').click();
    await page.locator('#PS-myBtn').click();
    
    // Assert that the heart element is visible
    await expect(page.locator('div[class="PS-heart-div"][data-id="7"]')).toBeVisible();

    
});
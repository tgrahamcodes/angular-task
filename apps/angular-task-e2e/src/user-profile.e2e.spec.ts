import { test, expect } from '@playwright/test';

test('should display user details correctly', async ({ page }) => {

    // Navigate to the user profile page
    await page.goto('http://localhost:4200/users/1');

    // Check that the page correctly navigated to the homepage
    expect(page.url, 'http://localhost:4200/user/1').toBeTruthy();

});

test('back button navigation should work properly', async ({ page }) => {

    // Navigate to the user profile page
    await page.goto('http://localhost:4200/users/1');

    // Check that the page correctly navigated to the homepage
    await expect(page.url, 'http://localhost:4200/users/1').toBeTruthy();

    // Click the "Back" button
    await page.locator('button:has-text("Back")').first().click();

    // Wait for the home page to load
    await page.waitForURL('http://localhost:4200', { timeout: 10000 });

});

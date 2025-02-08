import { test, expect } from '@playwright/test';

test('should navigate to user profile page when clicking "View Profile"', async ({ page }) => {

    //  Step 1: Start at Home Page
    await page.goto('http://localhost:4200');

    //  Step 2: Click "View Profile" button
    await page.locator('button:has-text("View Profile")').first().click();

    //  Step 3: Wait for navigation to complete
    await page.waitForURL(/\/users\/\d+$/, { timeout: 10000 });

    //  Step 5: Ensure user profile container is visible
    await expect(page.locator('.profile-container')).toBeVisible();

});

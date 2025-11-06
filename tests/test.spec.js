const { test, expect } = require('@playwright/test');

// Need to set the base URL in the config file for these tests to work

test.describe('Example page tests', () => {
    test('Check URL and title', async ({ page }) => {
        await page.goto('/example-page');
    });

    test('Check for specific text on the page', async ({ page }) => {
        await page.goto('/');
        // Goes to the baseURL set in playwright.config.js
        const content = await page.textContent('body');
        expect(content).toContain('This is an example page');
    });
});
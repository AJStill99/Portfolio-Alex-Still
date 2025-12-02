const { test } = require('../fixtures'); // Import the custom test with fixtures
const { expect } = require('@playwright/test'); // Import expect for assertions

// Need to set the base URL in the config file for these tests to work

test.describe('Example page tests', () => {
    test('Check URL and title', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveURL('https://sauce-demo.myshopify.com/');
        await expect(page).toHaveTitle('Sauce Demo');
        // Is there a way to make this dynamic rather than hardcoding?
    });

    test('Check if heading text is correct', async ({ page }) => {
        await page.goto('/');
        const heading = page.getByAltText('Sauce Demo');
        // This will fail, as the h1 element is actually an image on the page
        // # TODO - change to check for an image, and check it's alt text maybe? 
        // DONE - changed for alt text, but what assertion should I use here? 
    });

    test('Navigate from home to a product page', async ({ page }) => {
        // Go to Base URL, navigate to products page, and ensure URL contains sub string
        await page.goto('/');
        await page.click('a[href="/collections/all"]');
        await expect(page).toHaveURL(/\/collections\/all/);
    });
});
const { test } = require('../fixtures'); // Import the custom test with fixtures
const { expect } = require('@playwright/test'); // Import expect for assertions

test.describe('Checking the add to cart functionality', () => {
    test('Go to URL and check it is stable', async ({ page }) => {
        test.setTimeout(10000);
        // Setting timeout to 10 seconds. Realistically, this should be loading within this time frame easily
        
        // Go to Base URL
        await page.goto('/');
    });

    test('Add the first product on the page to the cart', async ({ page }) => {
        await page.goto('/');

        const firstProduct = page.locator('text=Grey jacket');
        await firstProduct.click();

        const addToCartButton = page.locator('.add-to-cart');
        await addToCartButton.click();

        // Seems to fail as it's checking it too fast

        const cartCount = page.locator('#cart-target-desktop');
        await cartCount.waitFor(); // Wait for the cart count to update
        await expect(cartCount).toHaveText(/1/); // Sub string check for 1 item in cart
        // Done this as string contains brackets, rather focus on the number itself
    });
});
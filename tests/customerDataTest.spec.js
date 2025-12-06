const { test } = require('../fixtures'); // Import the custom test with fixtures
const { expect } = require('@playwright/test'); // Import expect for assertions
const customerData = require('../test-customer-data.json');
const { fillCustomerDetails, goToCart } = require('../helpers');

test.describe('Filling in customer data during checkout', () => {
    test('Go to cart and fill in customer details', async ({ page }) => {
        await page.goto('/');
        await page.locator('text=Grey jacket').click();
        await page.locator('.add-to-cart').click();
        await page.locator('a.toggle-drawer.cart.desktop').click();
        await page.locator('text=Check out').click(); // Seems to be very flaky here, relying on dodgy animation might not be the way. Try another
        await page.locator('.checkout').click();

        await fillCustomerDetails(page, customerData.validUser);

        // TODO : Change this to bypass dodgy animation by clicking check out next to my cart instead
    });
});
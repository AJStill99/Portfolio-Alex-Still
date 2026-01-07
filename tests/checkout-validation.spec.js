const { test, expect } = require('@playwright/test');
const {
  goToBaseURL,
  clickProduct,
  goToCart,
} = require('../helpers');

test.describe('Checkout validation', () => {
  test('Shows error for invalid email format', async ({ page }) => {
    await goToBaseURL(page);

    await clickProduct(page, 'grey_jacket');
    await page.locator('#add').click();

    await page.waitForTimeout(3000); // wait for animation to complete

    await goToCart(page);
    await page.locator('text=Check out').click();
    await page.locator('#checkout').click();

    await page.fill('#email', 'not-an-email');

    await page.locator('#checkout-pay-button').click();

    const emailError = page.locator('#error-for-email'); 
    await expect(emailError).toBeVisible();

    await expect(emailError).toHaveText('Enter a valid email');
});

test('Shows errors when required fields are empty', async ({ page }) => {
    await goToBaseURL(page); // Could just use page.goto('/') here also, showcasing the helper function

    await clickProduct(page, 'grey_jacket');
    await page.locator('#add').click();

    await page.waitForTimeout(3000); // wait for animation to complete

    await goToCart(page);
    await page.locator('text=Check out').click();
    await page.locator('#checkout').click();


    await page.locator('#checkout-pay-button').click(); // Submit without filling anything

    const allErrors = page.locator('p[id^="error-for-"]');
    await expect(allErrors.first()).toBeVisible();

    const errorCount = await allErrors.count();

    if (errorCount === 0) {
        console.log('No errors appeared — form may be pre-filled or valid.');
        expect(errorCount).toBe(0); 
    } else {
        console.log(`Found ${errorCount} error(s) on checkout page:`);
        for (let i = 0; i < errorCount; i++) {
            const error = allErrors.nth(i);
            if (await error.isVisible()) {
                const text = await error.textContent();
                const id = await error.getAttribute('id');
                const field = id?.replace('error-for-', '').replace(/-/g, ' ') ?? 'unknown field';
                console.log(`- ${field}: "${text}"`);
            }
        }

        expect(errorCount).toBeGreaterThan(0);
    }
});

});

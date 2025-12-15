// NOTE - Want this test to run positive and negative login tests
const { test } = require('../fixtures'); // Import the custom test with fixtures
const { expect } = require('@playwright/test'); // Import expect for assertions
const testData = require('../test-data/users.json');
const { beforeEach } = require('node:test');

// Initial Variables
const users = testData.users;

beforeEach(async ({ page }) => {
    // Navigate to the login page before each test
    await page.goto('/login');
});

test.describe('Checking the authentication functionality', () => {
    test('Login with valid credentials', async ({ page, loginAsStandardUser }) => {
        await loginAsStandardUser();
    });
});
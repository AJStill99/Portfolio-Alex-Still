const { test: base } = require('@playwright/test');

const test = base.extend({
    // Define fixtures here if needed
    logToConsole: async ({}, use) => {
        console.log('Starting test...');
        await use();
        console.log('Test finished.');
    },
    // Logs to the console before and after each test -- similar to how a beforeEach and afterEach would work
});

module.exports = { test };
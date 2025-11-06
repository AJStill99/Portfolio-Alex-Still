// Helper functions
const { expect } = require('@playwright/test');

async function goToURL(url) {
    await page.goto(url);
    await expect(page).toHaveURL(url);
    // Above line may be redundant but ensures URL is correct
}

async function checkPageTitle(expectedTitle) {
    const title = await page.title();
    expect(title).toBe(expectedTitle);
}

async function checkHeaderText(expectedText) {
    const headerText = await page.textContent('h1');
    expect(headerText).toBe(expectedText);
}

module.exports = {
    goToURL,
    checkPageTitle,
    checkHeaderText,

};

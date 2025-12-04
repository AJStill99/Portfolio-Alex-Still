/* 
    Helper functions: 
    - Have these to make reptitive tasks easier to call
    - e.g. going to the base URL, or going to a specific page by URL extension
*/

async function goToBaseURL(page) { 
    await page.goto('/');
}

async function goTo(page, URL_extension) {
    await page.goto(`/${URL_extension}`);
}

module.exports = { 
    goToBaseURL, 
    goTo 
};
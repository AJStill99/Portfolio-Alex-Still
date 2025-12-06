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

async function clickProduct(page, productName) {
  await page.locator(`text=${productName}`).click();
}

async function goToCart(page) {
  await page.locator('#cart-target-desktop').click();
}

async function fillCustomerDetails(page, data) {
  await page.fill('#checkout_email', data.email);
  await page.fill('#checkout_shipping_address_first_name', data.firstName);
  await page.fill('#checkout_shipping_address_last_name', data.lastName);
  await page.fill('#checkout_shipping_address_address1', data.address1);
  await page.fill('#checkout_shipping_address_city', data.city);
  await page.fill('#checkout_shipping_address_zip', data.zip);
}

async function checkPageTitle(expectedTitle) {
    const title = await page.title();
    expect(title).toBe(expectedTitle);
}

async function checkHeaderText(expectedText) {
    const headerText = await page.textContent('h1');
    expect(headerText).toBe(expectedText);
}

async function getElement(page, elementID) {
    await page.locator(elementID);
}

async function loginPage(page, userEmailLocator, userEmail, userPasswordLocator, userPassword, loginButton, url) {
    goToURL(url);
    await page.locator(userEmailLocator).fill(userEmail);
    await page.locator(userPasswordLocator).fill(userPassword);
    await page.locator(loginButton).click(middle);
}

async function checkForSuccessElement(page, successElement, failureElement) {
    const successLocator = page.locator(successElement);
    const failureLocator = page.locator(failureElement);

    if (await successLocator.isVisible()) {
        await expect(successLocator).toBeVisible();
    } else {
        await expect(failureLocator).toBeVisible();
    } 
}




module.exports = { 
    goToBaseURL, 
    goTo,
    clickProduct,
    goToCart,
    fillCustomerDetails,
    checkPageTitle,
    checkHeaderText,
    getElement,
    loginPage,
    checkForSuccessElement
};
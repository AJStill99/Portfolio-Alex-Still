// components/products.js
module.exports = (page) => {
  // Private helper for Add to Cart button on product detail page
  const clickAddToCart = async () => {
    const addButton = page.locator('#add');
    await addButton.click();
  };

  return {
    // --- Collection page methods ---

    async getProductCount() {
      const productCards = page.locator('section.product-grid a');
      return await productCards.count();
    },

    async getProductTitleByIndex(index) {
      const productCards = page.locator('section.product-grid a');
      const productTitles = productCards.locator('h3');
      return await productTitles.nth(index).textContent();
    },

    async getProductPriceByIndex(index) {
      const productCards = page.locator('section.product-grid a');
      const productPrices = productCards.locator('h4');
      return await productPrices.nth(index).textContent();
    },

    async getProductHrefByIndex(index) {
      const productCards = page.locator('section.product-grid a');
      const href = await productCards.nth(index).getAttribute('href');
      if (!href) throw new Error(`No href found for product at index ${index}`);
      return `https://sauce-demo.myshopify.com${href}`;
    },

    async getAllProducts() {
      const total = await this.getProductCount();
      const products = [];
      for (let i = 0; i < total; i++) {
        const title = await this.getProductTitleByIndex(i);
        const price = await this.getProductPriceByIndex(i);
        const href = await this.getProductHrefByIndex(i);
        products.push({ title, price, href });
      }
      return products;
    },

    // --- Add to cart methods (navigate directly to product page) ---

    async addProductToCartByIndex(index) {
      const href = await this.getProductHrefByIndex(index);
      await page.goto(href);
      await clickAddToCart();
    },

    async addFirstProductToCart() {
      await this.addProductToCartByIndex(0);
    },

    async addLastProductToCart() {
      const total = await this.getProductCount();
      await this.addProductToCartByIndex(total - 1);
    },

    async addNthProductToCart(index) {
      await this.addProductToCartByIndex(index);
    },
  };
};

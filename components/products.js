// components/products.js
module.exports = (page) => {
  let cachedProducts = [];
  const addToCart = async () => {
    await page.locator('#add').click();
  };

  return {
    async captureProducts() {
      const cards = page.locator('section.product-grid a');
      const count = await cards.count();

      cachedProducts = [];

      for (let i = 0; i < count; i++) {
        const card = cards.nth(i);

        cachedProducts.push({
          index: i,
          title: await card.locator('h3').textContent(),
          price: await card.locator('h4').textContent(),
          href: await card.getAttribute('href'),
        });
      }

      return cachedProducts;
    },

    // 2️⃣ Pure data access (NO Playwright here)
    getFirstProduct() {
      return cachedProducts[0];
    },

    getLastProduct() {
      return cachedProducts[cachedProducts.length - 1];
    },

    getNthProduct(n) {
      if (n < 0 || n >= cachedProducts.length) {
        throw new Error('Index out of bounds');
      }
      return cachedProducts[n];
    },

    // 3️⃣ Navigation + add to cart
    async addProductToCart(product) {
      await page.goto(`https://sauce-demo.myshopify.com${product.href}`);
      await addToCart();
    },
  };
};

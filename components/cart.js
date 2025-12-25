const { expect } = require('@playwright/test');

module.exports = (page) => {
  const cartLink = page.getByRole('link', { name: /^my cart/i });
  const cartCount = page.locator('#cart-target-desktop');

  return {
    async goToCart() {
      await cartLink.click();
    },

    async getItemCount() {
      const text = await cartCount.textContent(); // "(0)"
      return Number(text.replace(/[()]/g, ''));
    },

    async expectItemCount(expectedCount) {
      await expect(cartCount).toHaveText(`(${expectedCount})`);
    },
  };
};

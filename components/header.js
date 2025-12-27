// The below is a good example of closures

module.exports = (page) => {
  const aboutLink = page.getByRole('link', { name: /^about us$/i });
  const loginLink = page.getByRole('link', { name: /^log in$/i });
  const signUpLink = page.getByRole('link', { name: /^sign up$/i });
  const cartLink = page.getByRole('link', { name: /^my cart/i });
  const checkoutLink = page.getByRole('link', { name: /^check out$/i });
  const searchInput = page.getByRole('textbox', { name: /search/i });
  const searchSubmit = page.locator('#search-submit');

  return {
    async goToAbout() {
      await aboutLink.click();
    },

    async goToLogin() {
      await loginLink.click();
    },

    async goToSignUp() {
      await signUpLink.click();
    },

    async goToCart() {
      await cartLink.click();
    },

    async goToCheckout() {
      await checkoutLink.click();
    },

    // Search behaviour
    async searchFor(term) {
      await searchInput.fill(term);
      await searchSubmit.click();
    },
  };
};

const { test, expect } = require('@playwright/test');
const Products = require('../components/products');

test('Product actions demo - safe collection handling', async ({ page }) => {
  const products = Products(page);

  // Go to the collection page
  const collectionURL = 'https://sauce-demo.myshopify.com/collections/frontpage';
  await page.goto(collectionURL);

  // --- Capture all product info first ---
  const total = await products.getProductCount();
  console.log('Total products:', total);
  expect(total).toBeGreaterThan(0);

  const allProducts = await products.getAllProducts();
  allProducts.forEach((p, i) => {
    console.log(`Product ${i + 1}: ${p.title} - ${p.price}`);
  });

  await products.addFirstProductToCart();
  console.log('Added first product to cart');

  await products.addLastProductToCart();
  console.log('Adding last product to cart');

  if (total >= 2) {
    await products.addNthProductToCart(1); // zero-based index
    console.log('Added 2nd product to cart');
  }

  expect(allProducts[0].title).toBeTruthy();
  expect(allProducts[0].price).toMatch(/£\d+/);

  if (total >= 2) {
    expect(allProducts[1].title).toBeTruthy();
    expect(allProducts[1].price).toMatch(/£\d+/);
  }
});

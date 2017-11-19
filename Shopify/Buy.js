/*
  Shopify buy SDK logic
  Product number for Underarmour shoe: 11350003663
  Author: Daniel Laframboise
*/


// Creates a Shop Client
var shopClient = ShopifyBuy.buildClient({
  accessToken: '0c0190fb349aa0883cdbb7c83c5d88c5',
  domain: 'storefrontvr.myshopify.com',
  appId: '6'
});


// Shopify's product listing API that retrieves product based on product
// number found in shopify admin (11350003663)
shopClient.fetchProduct('8569911558')
  .then(function (product) {
    console.log(product);
  })
  .catch(function () {
    console.log('Request failed');
  });

// Create a cart globally to store products
var cart;
shopClient.createCart().then(function (newCart) {
  cart = newCart;
  // do something with updated cart
});

// Adding items to a cart after creation
cart.addVariants({variant: product.selectedVariant, quantity: 1}).then(function (cart) {
  // do something with updated cart
});

// Creating a cart checkout URL for a cart
document.location.href = cart.checkoutUrl;

const express = require("express");

const cartDS = require("../dataSource/cart");

const routers = express.Router();

routers.post("/", (request, response) => {
  const cartItem = request.body;
  console.log(cartItem);
  const itemId = cartDS.addItemToCart(cartItem);
  response.status(201).location(`cart/${itemId}`).send();
});

routers.get("/", (request, response) => {
  response.status(200).json(cartDS.fetchCartItems());
});

routers.get("/:id", (request, response) => {
  const cartItemId = request.params.id;
  const cartItem = cartDS.findCartItemById(cartItemId);
  if (cartItem != undefined) response.status(200).json(cartItem);
  else response.status(404).send();
});

routers.delete("/:id", (request, response) => {
  const cartItem = cartDS.deleteCartItemById(request.params.id);
  response.status(cartItem != undefined ? 200 : 404).send();
});

routers.delete("/", (request, response) => {
  cartDS.clearCart();
  response.send();
});

routers.patch("/:id", (request, response) => {
  const productId = request.params.id;
  const productUpdates = request.body;
  const updatedProduct = cartDS.updateCartItem(productId, productUpdates);
  updatedProduct != undefined
    ? response.json(updatedProduct)
    : response.status(404).send();
});

module.exports = routers;

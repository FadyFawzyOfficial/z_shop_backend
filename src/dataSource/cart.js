const { v4: uuidV4 } = require("uuid");

const cart = [];

const cartDS = {
  fetchCartItems: () => cart,

  addItemToCart: (cartItem) => {
    cartItem.id = uuidV4();
    cart.push(cartItem);
    return cartItem.id;
  },

  findCartItemById: (id) => cart.find((item) => item.id == id),
};

module.exports = cartDS;

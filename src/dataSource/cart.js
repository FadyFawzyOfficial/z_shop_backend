const { v4: uuidV4 } = require("uuid");

let cart = [];

const cartDS = {
  fetchCartItems: () => cart,

  addItemToCart: (cartItem) => {
    cartItem.id = uuidV4();
    cart.push(cartItem);
    return cartItem.id;
  },

  findCartItemById: (id) => cart.find((item) => item.id == id),

  deleteCartItemById: (id) => {
    const cartItemIndex = cart.findIndex((item) => item.id == id);
    if (cartItemIndex != -1) return cart.splice(cartItemIndex, 1)[0];
    return undefined;
  },

  clearCart: () => (cart = []),
};

module.exports = cartDS;

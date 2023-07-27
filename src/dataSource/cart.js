const { v4: uuidV4 } = require("uuid");

const cart = [];

const cartDS = {
  addItemToCart: (cartItem) => {
    cart.push(cartItem);
    return uuidV4();
  },
};

module.exports = cartDS;

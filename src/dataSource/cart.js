const cart = [];

const cartDS = {
  addItemToCart: (cartItem) => {
    cart.push(cartItem);
    return 1;
  },
};

module.exports = cartDS;

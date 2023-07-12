/**
 * This fucntion calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total proce
 */
export const totalPrice = (products) => {
  const total = products.reduce((total, product) => total + product.price, 0);
  return total;
};

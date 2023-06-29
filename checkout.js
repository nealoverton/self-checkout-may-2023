/* 1- As a user, I would like to be able to scan an item using a barcode so its details can be found from products list (test data).
2 - As a user, I would like to be able to add an item to my basket.
3 - As a user, I would like to be able to see the total price of all items in my basket.
4 - As a user, I would like to be able to remove an item from my basket.
 */

const { orange, pineapple, kiwi, apple, banana, catalogue } = require("./data");

let basket = [];

function emptyBasket() {
  basket = [];
}

function findItem(barcode) {
  return catalogue.find((item) => item.barcode === barcode);
}

function addItemToBasket(barcode) {
  const item = findItem(barcode);
  basket.push(item);
  return basket;
}

function getTotalPrice() {
  return basket.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);
}

function removeItem(barcode) {
  basket = basket.filter((item) => item.barcode !== barcode);
  return basket;
}

module.exports = {
  findItem,
  addItemToBasket,
  getTotalPrice,
  emptyBasket,
  removeItem,
};

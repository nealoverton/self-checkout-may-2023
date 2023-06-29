let {
  findItem,
  addItemToBasket,
  getTotalPrice,
  emptyBasket,
  removeItem,
} = require("./checkout");
const { orange, pineapple, kiwi, apple, banana, catalogue } = require("./data");

afterEach(() => {
  emptyBasket();
});

describe("findItem", () => {
  test("returns item that matches the barcode", () => {
    expect(findItem(789)).toEqual(orange);
    expect(findItem(123)).toEqual(apple);
    expect(findItem(456)).toEqual(banana);
  });
});

describe("addItemToBasket", () => {
  test("when passed abarcode, adds item to basket", () => {
    expect(addItemToBasket(789)).toEqual([orange]);
  });
});

describe("getTotalPrice", () => {
  test("returns total price of items in basket", () => {
    addItemToBasket(456);
    expect(getTotalPrice()).toBe(6);
    addItemToBasket(456);
    expect(getTotalPrice()).toBe(12);
    addItemToBasket(765);
    expect(getTotalPrice()).toBe(37);
  });
});

describe("removeItem", () => {
  test("When passed a barcode, returns basket with item removed", () => {
    addItemToBasket(456);
    addItemToBasket(123);

    expect(removeItem(123)).toEqual([banana]);
    expect(removeItem(456)).toEqual([]);
  });
});

/// write test cases each function used in the
/// route get prices of products.

// WE ARE USING JEST TO TEST FRAGMENTS OF OUR CODE

// Inporting all functions that needs to be tested!;
const usedFunctions = require('./functions');

// FIRST TEST CASE
test("getting the price when only one type of product is picked", () => {
   expect(usedFunctions.singleInput({bookOne: 4, bookTwo: 0, bookThree: 0,
   bookFour: 0, bookFive: 0})).toBe(32);
});

// SECOND TEST CASE
test("check if content of request body is changed to an array containing integers",
() =>{ expect(usedFunctions.changeContentsOfArrayToIntegers({bookOne: 4, bookTwo: null,
  bookThree: 1, bookFour: 0, bookFive: null})).toBe([4, 0, 1, 0, 0])});

//THIRD TEST
test("return discount on different Category of product", () => {
   expect(usedFunctions.getDiscounts(4)).toBe(0.20 * 4 * 8);
});

//FOURTH TEST
test("getting total number of variety of product", () => {
   expect(functions.loopContainer([1, 3, 0, 3, 1])).toBe(4);
});

// FIFTH TEST
test("checking for three different conditions", () => {
   expect(usedFunctions.checkingForVarietyOfItems([0, 0, 0, 0, 0])).toBe("equal to zero")
});

// SIXTH TEST
test("price for remaining undiscounted item", () => {
   expect(usedFunctions.leftSingleProductTypeRemaining([3, 0, 0, 0, 0])).toBe(24);
});

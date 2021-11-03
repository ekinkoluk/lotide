
//const assertEqual = require('../assertEqual');
const head = require("../head");
const assert = require('chai').assert;


describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns undefined when empty array given", ()=> {
    assert.strictEqual(head([]), undefined);
  })
});

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// // An array with only one element should still yield that one element as its head
// assertEqual(head([1]), 1);
// // An empty array should yield undefined as its head
// assertEqual(head([]), undefined);
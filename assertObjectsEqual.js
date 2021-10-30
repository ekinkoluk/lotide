//FUNCTION IMPLEMENTATION

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let k = 0; k < arr1.length; k++) {
      if (arr1[k] !== arr2[k]) {
        return false;
      }
    }
  }
  return true;
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const arr of arr1) {
    if (Array.isArray(object1[arr]) && Array.isArray(object2[arr])) {

      return eqArrays(object1[arr], object2[arr]);
    } else if (object1[arr] !== object2[arr]) {
      return false;
    }
  }
  return true;
 
};
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab,abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd,dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd,cd2); // => false

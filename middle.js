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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log("🛑🛑🛑 Assertion Failed");
  }
  
};

const middle = function(array) {
  if (array.length === 1  || array.length === 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[array.length / 2 - 1],array[array.length / 2]];
  } else if (array.length % 2 !== 0) {
    return [array[Math.floor(array.length / 2)]];
  }
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []


console.log(middle([1, 2, 3]));// => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([10, 20, 30, 40, 50, 60])); // => [3, 4]


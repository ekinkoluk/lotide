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

const without = function(source, itemsToRemove) {
  let myArray = source;

  for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (myArray[i] === itemsToRemove[j]) {
        myArray.splice(i, 1);
      }
    }
  }
  return myArray;
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(without(words, ["lighthouse","hey", "world"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

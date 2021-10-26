//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//TEST CODE

assertEqual("Lighthouse Labs" , "Bootcamp");
assertEqual(1,1);

// Comparing identical strings
assertEqual("Ekin", "Ekin");

// Comparing non-identical strings
assertEqual("Ekin", "Yekta");
// Comparing identical numbers
assertEqual(5,5);
// Comparing non-identical numbers
assertEqual(11, 11.11);
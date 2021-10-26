//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const tail = function(array){
let newArr = array.slice(1);
return newArr;

};

console.log (tail([1,2,3]));

//HOW TO TEST IT

const result = tail (["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// The tail function should be returning a new array and not modify the original array that is passed in.
//Let's write a test case to ensure this

const words = ["Yo Yo", "Lighthouse", "Labs"];

tail(words); //no need to capture the return value since we are not checking it
assertEqual(words.length, 3); //original array should still have 3 elements

//TIPS
// You should always be thinking about other scenarios to test. Here are some sucj
// examples and how they should be handled

// An array with only one element should yield an empty array for its tail
console.log(tail([1]));
// An empty array should yield an empty array for its tail
console.log(tail([]));
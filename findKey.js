const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// const callbackFunc = function (objectkey){
//   return objectkey.stars;
// };
const findKey = function (object, callback){

const keys = Object.keys(object);

 for (let k = 0; k < keys.length ; k++){
   
     if(callback(object[keys[k]])){
     return keys[k];
     }
}

};

const obj1 = {
  "Blue Hill": { star: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};


//console.log(findKey(obj1));
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, (x) => x.stars === 2)); // => "noma"




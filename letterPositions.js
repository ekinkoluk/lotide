const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let k = 0; k < sentence.length; k++) {
    let char = sentence[k];
    if (char !== " ") {
      
      if (results[char]) {
        results[char].push(k);
      } else {
        results[char] = [k];
      }

    }
  }
  return results;
};


console.log(letterPositions("lighthouse in the house"));
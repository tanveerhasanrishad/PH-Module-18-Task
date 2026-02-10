function longWords(str) {
  let result = "";
  for (const word of str.split(" ")) {
    if (result.length < word.length) {
      result = word;
    }
  }
  return result;
}

const string = "I am learning Programming to become a programmer";

const result = longWords(string);

console.log(result);

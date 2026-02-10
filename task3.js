function vowelCount(str) {
  let count = 0;
  for (const ch of str.toLowerCase()) {
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      count++;
    }
  }
  return count;
}

const result = vowelCount("HEllO World");

console.log(result);

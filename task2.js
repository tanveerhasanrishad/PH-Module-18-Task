function repeatedNum(arr, number) {
  let count = 0;
  for (const num of arr) {
    if (num === number) {
      count++;
    }
  }
  return count;
}

const result = repeatedNum([5, 6, 11, 12, 98, 5], 25);
console.log(result);

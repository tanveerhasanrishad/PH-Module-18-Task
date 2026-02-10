function randomNum() {
  const num = Math.round(20 * Math.random());
  if (num < 10) {
    return num + 10;
  } else {
    return num;
  }
}

console.log(randomNum());

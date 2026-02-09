function celToFahren(celsius) {
  if (isNaN(celsius)) {
    return "Invaild Input";
  } else {
    return celsius * (9 / 5) + 32;
  }
}

const result = celToFahren(122);

console.log(result.toFixed(2));

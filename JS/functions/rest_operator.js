function sum(...prices) {
  return prices.reduce((a, b) => a + b);
}

console.log(sum(2, 3, 4, 5, 6));

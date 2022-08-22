function sum(a, b) {
  let sum = 0;
  for (const value of arguments) sum += value;
  return sum;
}

console.log(sum(2, 3, 3, 4, 5));

function pow(x, n) {
  // 2, 3
  return n == 1 ? x : x * pow(x, n - 1); // 2 * 2
  // 2 * 2 * 2
}

console.log(pow(2, 2));

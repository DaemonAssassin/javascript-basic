function includes(array, searchElement) {
  for (let element of array) {
    if (element === searchElement) return true;
  }
  return false;
}

const hasElement = includes([1, 2, 3, 4], 0);
console.log(hasElement);

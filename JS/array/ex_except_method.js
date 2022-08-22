function except(array, excluded) {
  const output = [];
  let isAvailable = false;
  for (let element of array) {
    for (let value of excluded) {
      if (element === value) {
        isAvailable = true;
        break;
      }
    }
    isAvailable ? (isAvailable = false) : output.push(element);
  }

  return output;
}

console.log(except([1, 2, 3, 4, 1, 1], [1, 2]));

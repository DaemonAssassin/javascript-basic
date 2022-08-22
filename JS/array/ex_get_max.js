function getMax(array) {
  return array.reduce(function (previous, current) {
    return previous > current ? previous : current;
  }, undefined);
}

const max = getMax([2, 4, 2, 5, 6, 2]);
console.log(max);

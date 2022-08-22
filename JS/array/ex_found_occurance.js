function countOccurrences(array, searchElement) {
  return array.reduce(function (previous, current) {
    return current === searchElement ? ++previous : previous;
  }, 0);
}

console.log(countOccurrences([1, 2, 3, 1], -1));

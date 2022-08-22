function arrayFromRange(min, max) {
  const array = [];
  for (let i = min; i <= max; i++) array.push(i);
  return array;
}

const array = arrayFromRange(-10, -4);
console.log(array);

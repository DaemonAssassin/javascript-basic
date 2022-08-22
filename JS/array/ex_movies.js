const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

// All movies in 2018 | rating > 4
// sort by rating
// desc order
// pick their title
//* 'b'
//* 'a'
const value = movies
  .filter((m) => m.rating >= 4 && m.year >= 2018) // 4.5 4.7
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(value);

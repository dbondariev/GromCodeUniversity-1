const increaseEvenEl = (arr, delta) => !Array.isArray(arr) ? null : arr.map(el => (el % 2 === 0) ? el + delta : el);

const array = [1, 2, 3, 4, 5];
const delta = 1;

console.log(increaseEvenEl(array, delta)); // ===> [2, 4, 6, 8, 10]
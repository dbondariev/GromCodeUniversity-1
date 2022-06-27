const arrAverage = (arr) => !Array.isArray(arr) ? null : arr.reduce((a, b) => a + b) / arr.length;

const arr = [1, 2, 3, 4];
console.log(arrAverage(arr)); // ===> 2.5
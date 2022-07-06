const sum = (arr) => !Array.isArray(arr) ? null : arr.reduce((a, b) => a + b);

const arr = [1, 2, 3, 4];
console.log(sum(arr)); // ===> 10
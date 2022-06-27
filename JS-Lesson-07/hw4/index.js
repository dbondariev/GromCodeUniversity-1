const cloneArr = (arr) => !Array.isArray(arr) ? null : arr.slice();

const arr = [1, 5, 3, 4, 5];

console.log(cloneArr(arr));
console.log(arr);
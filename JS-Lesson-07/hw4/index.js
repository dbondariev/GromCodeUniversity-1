//Algorithm:
//1. if the array is not an array, return null
//2. use slice() to get a copy of the array

//Dont forget to test your code

const cloneArr = (arr) => !Array.isArray(arr) ? null : arr.slice();

const arr = [1, 5, 3, 4, 5];

console.log(cloneArr(arr));
console.log(arr);
//Algorithm:
//1. if the array is not an array, return null
//2. use reduce() to get average of the array
//3. return the average

//Dont forget to test your code


const arrAverage = (arr) => !Array.isArray(arr) ? null : arr.reduce((a, b) => a + b) / arr.length;

const arr = [1, 2, 3, 4];
console.log(arrAverage(arr)); // ===> 2.5
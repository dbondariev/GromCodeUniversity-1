//reduce();
//input: prevValue, currentValue, index, array
//output: sum of the array

//The reduce() method reduces the array to a single value.

//Algorithm:
//1. if the array is not an array, return null
//2. use reduce() to sum the array
//3. return the sum

//Dont forget to test your code.

const sum = (arr) => !Array.isArray(arr) ? null : arr.reduce((a, b) => a + b);

const arr = [1, 2, 3, 4];
console.log(sum(arr)); // ===> 10
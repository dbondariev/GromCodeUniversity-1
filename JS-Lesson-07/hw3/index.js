//Algorithm:
//1. if the array is not an array, return null
//2. use slice() to get a copy of the array
//3. use reverse() to reverse the copy
//4. return the reversed copy

//dont forget to test your code

const reverseArray = (arr) => (!Array.isArray(arr)) ? null : arr.slice().reverse();

const arr = [1, 2, 3, 4, 5];

console.log(reverseArray(arr)); // ===> [5, 4, 3, 2, 1]
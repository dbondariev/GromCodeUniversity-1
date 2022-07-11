//squareArray();

//slice();
//input: start and end index
//output: extracted part of the array

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from the list specified in the parameters.

//map();
//input: callback function, element, index, array,thisArg(optional)
//output: a new array with each element being the result of the callback function.

//The map() method creates a new array with the results of calling a function for every array element.

//Algorithm:
//1. if the array is not an array, return null
//2. Use slice() to get a copy of the array
//3. Use map() to map the copy
//4. Return the mapped copy

//dont forget to test your code

const squareArray = (arr) =>
    (!Array.isArray(arr)) ? null : arr.slice().map(x => x * x);


const arr = [1, 2, 3, 4, 5];

console.log(squareArray(arr)); // ===> [1, 4, 9, 16, 25]
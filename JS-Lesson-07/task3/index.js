//flatArray();
//The function should return an array of numbers.

//slice();
//input: start and end index
//output: extracted part of the array

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from the list specified in the parameters.

//flat();
//input: array of arrays
//output: array of numbers
//The flat() method flattens a multi-dimensional array into a one-dimensional array.

//sort();
//input: compare function
//first parameter - first element
//second parameter - second element
//output: sorted array

//The sort() method sorts the elements of an array in place and returns the sorted array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.

//Algorithm:
//1. Use slice() to get a copy of the array
//2. Use flat() to flatten the copy
//3. Use sort() to sort the copy
//4. Return the sorted copy

//Dont forget to test your code

const flatArray = (arr) =>
    arr.slice().flat().sort((a, b) => a - b);



console.log(flatArray([1, [10, 3], 4, [2, 5]]));
const arr = [1, 10, 3, 4, 2, 5];

console.log(arr);
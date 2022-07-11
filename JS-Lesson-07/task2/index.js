//sortDesc();
//Sort array in descending order

//slice();
//input: start and end index
//output: extracted part of the array

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from the list specified in the parameters.

//sort();
//input: compare function
//first parameter - first element
//second parameter - second element
//output: sorted array

//The sort() method sorts the elements of an array in place and returns the sorted array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.

//Algorithm:
//1. Use slice() to get a copy of the array
//2. Use sort() to sort the copy
//3. Return the sorted copy

//P.S. Dont forget to test your code

const sortDesc = (arr) => {
    return arr.slice().sort((a, b) => b - a);
}

const arr = [1, 10, 3, 4, 2, 5];

console.log(sortDesc(arr));
console.log(arr);
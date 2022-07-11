// Algorithm:
// 1. Create a function that takes one argument (number = 0)
// 2. Create a variable that will hold the value of the last operation
// 3. Check if the argument is a number
// 4. Run a loop and create a function for each iteration
// 5. Return the array of functions

// Don't forget to test your code

 function createArrayOfFunctions(integer = 0) {
    const arr = [];
    if (typeof integer !== 'number') {
        return null;
    }

    for (let i = 0; i < integer; i += 1) {
        arr[i] = function () {
            return i;
        };
    }

    return arr;
}




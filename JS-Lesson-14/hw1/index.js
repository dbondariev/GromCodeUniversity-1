// Algorithm:
// 1. Create a memory variable that will hold the value of the last operation
//2. Create a function named changeNumber that takes no arguments and it will return add, decrease, reset and getMemo functions

// 3. Create a function named add that takes one argument (number)
// 4. Add the number to the memory variable

// 5. Create a function named decrease that takes one argument (number)
// 6. Subtract the number from the memory variable

// 7. Create a function named reset that takes no arguments
// 8. Set the memory variable to 0

// 9. Create a function named getMemo that takes no arguments
// 10. Return the value of the memory variable

// Dont forget to test your code

let memory = 0;

function changeNumber() {

    return {
        add,
        decrease,
        reset,
        getMemo,
    }
}

export function add(number) {
    memory += number;
}

export function decrease(number) {
    memory -= number;
}

export function reset() {
    memory = 0;
}

export function getMemo() {
    return memory
}
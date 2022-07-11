// Algorithm:
// 1. Create a function named makeCounter that takes no arguments
// 2. Create a variable that will hold the value of the last operation
// 3. Increment the variable by 1
// 4. Return the variable

function makeCounter() {
    let counter = -1;

    return function () {
        counter += 1;
        return counter;
    };
}

const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter1());
console.log(counter2());
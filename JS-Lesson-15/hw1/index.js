
// Algorithm:
// 1. Create arrow function named createCalculator that takes no arguments
// 2. Create a memory variable that will hold the value of the last operation and it will be 0
// 3. Create a function named add that takes one argument (number)
// 4. Add the number to the memory variable
// 5. Create a function named decrease that takes one argument (number)
// 6. Subtract the number from the memory variable
// 7. Create a function named reset that takes no arguments
// 8. Create a function named getMemo that takes no arguments
// 9. Return the value of the memory variable

// Don't forget to test your code


const createCalculator = () => {
    let memory = 0;

    function add(number) {
        memory += number;
    }

    function decrease(number) {
        memory -= number;
    }

    function reset() {
        memory = 0;
    }

    function getMemo() {
        return memory;
    }
    return {
        add,
        decrease,
        reset,
        getMemo,
    };
};

const calculator1 = createCalculator();
const calculator2 = createCalculator();
console.log(calculator1.add(10));
console.log(calculator1.getMemo());
console.log(calculator1.add(10));
console.log(calculator1.decrease(5));
console.log(calculator1.getMemo());
console.log(calculator2.add(5));
console.log(calculator2.add(500));
console.log(calculator2.decrease(255));
console.log(calculator2.reset());
console.log(calculator2.getMemo());
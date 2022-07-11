//Algorithm:
//1. Create a function that takes one argument (str)
//2. Create a variable that will hold the result of the function
//3. Create switch statement that will iterate through the possible operators
//4. Create a variable that will hold the result of the operation
//5. Return the result
//6. Return null if the str is not a string

//Dont forget to test your code

const calc = str => {
    const [a, operator, b] = [...str.split(' ')];
    let result;

    switch (operator) {
        case '+':
            result = +a + +b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;

        default:
            break;
    }
    return `${str} = ${result}`;
};

console.log(calc('2 + 2')); // ===> 4
console.log(calc('2 - 2')); // ===> 0
console.log(calc('2 * 2')); // ===> 4
console.log(calc('2 / 2')); // ===> 1
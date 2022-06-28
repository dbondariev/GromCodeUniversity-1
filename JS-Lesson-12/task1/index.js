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
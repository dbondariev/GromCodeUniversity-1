//filter();
//input: array of numbers
//output: array of special numbers

const getSpecialNumbers = (numbers) => {
    return numbers.filter(number => number % 3 === 0);
}
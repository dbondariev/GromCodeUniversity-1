const squareArray = (arr) =>
    (!Array.isArray(arr)) ? null : arr.slice().map(x => x * x);


const arr = [1, 2, 3, 4, 5];

console.log(squareArray(arr)); // ===> [1, 4, 9, 16, 25]
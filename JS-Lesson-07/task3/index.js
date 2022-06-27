const flatArray = (arr) =>
    arr.slice().flat().sort((a, b) => a - b);



console.log(flatArray([1, [10, 3], 4, [2, 5]]));
const arr = [1, 10, 3, 4, 2, 5];

console.log(arr);
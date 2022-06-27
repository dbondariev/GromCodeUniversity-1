const sortDesc = (arr) => {
    return arr.slice().sort((a, b) => b - a);
}

const arr = [1, 10, 3, 4, 2, 5];

console.log(sortDesc(arr));
console.log(arr);
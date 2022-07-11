// Algorithm:
// 1. Create a function that takes one argument (arr)
// 2. Create a variable that will hold the result of the function
// 3. Use join method to join the array into a string
// 4. Use split method to split the string into an array
// 5. Use map method to iterate through the array
// 6. Use filter method to filter the array
// 7. Use map method to return result of the operation toFixed(2)

//Dont forget to test your code

const cleanTransactionsList = arr => {
    const cleanedArr = [...arr]
        .join()
        .split(',')
        .map(el => el.trim())
        .filter(el => el - 0 === +el)
        .map(el => `$${Number(el).toFixed(2)}`);
    return cleanedArr;
};

console.log(cleanTransactionsList([1, 2, 3, 4, 5, '2dollars'])); // ===> ['$1.00', '$2.00', '$3.00', '$4.00', '$5.00']
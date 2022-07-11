//Algorithm:
//1. Create function that takes an array as an argument
//2. Use the map method to get the amount of each transaction
//3. Use the reduce method to sum the amounts
//4. Return the result of the function

//Dont forget to test your code

const getTotalPrice = arr =>
    `$${Math.floor([...arr].reduce((total, el) => total + el, 0) * 100) / 100}`;
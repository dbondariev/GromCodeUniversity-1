//Algorithm:
//1. Create function that takes transactions array as an argument
//2. Use the map method to get the amount of each transaction
//3. Use the reduce method to sum the amounts
//4. Return the result of the function

//Dont forget to test your code

const getTotalRevenue = transactions =>
    transactions.map(el => el.amount).reduce((total, i) => total + i, 0);

// examples
const dayTransactions = [
    { userId: 22, amount: 22, operation: 'sell' },
    { userId: 22, amount: 22, operation: 'buy' },
    { userId: 44, amount: 22, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
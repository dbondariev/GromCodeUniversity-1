//Algorithm:
//1. Create a function that takes three parameters: clients, balances, client and amount
//2. Create a variable called clientBalance and set it to the result of balances[clients.indexOf(client)]
//3. Return clientBalance < amount ? -1 : clientBalance - amount
//4. Call the function and pass it the following parameters: clients, balances, client and amount
//5. Print the result of the function

//Dont forget to test your code.

const withdraw = (clients, balances, client, amount) => {
    const clientBalance = balances[clients.indexOf(client)];

    return clientBalance < amount ? -1 : clientBalance - amount;
};

//input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));


//output
//37
//и массив balances должен быть [1400, 37, -6]



//example 2:

//input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)); 

//output
//-1
//и массив balances должен быть [1400, 87, -6]


console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', -10));
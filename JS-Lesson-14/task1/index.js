// Algorithm:
// 1. Create a function named sendMessage that takes one argument (name)
// 2. Create a variable that will hold the name of a sender inside the function
// 3. Create a variable that will hold the message outside the function
//4. Use console.log to print the message


// 5. Create a function named setMessage that takes one argument (text)
// 6. Create a variable that will hold name to whom message will be sent
//7. Create a variable that will hold the name of a sender inside the function
//8. Create a variable named message that is equal to the text argument
//9. Use console.log to print the message

//Dont forget to test your code


let message = 'Just learn it';

 const sendMessage = (name) => {
    const sender = 'Gromcode';
    console.log(`${name}, ${message}! Your ${sender}`);
};

 function setMessage(text) {
    const name = 'Anna';
    const sender = 'Gromcode';
    const message = text;
    console.log(`${name}, ${message}! Your ${sender}`);
}

sendMessage('Ann');
setMessage('Good job');
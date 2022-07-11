// Algorithm:
// 1. Create a function named createMessenger that takes no arguments
// 2. Create a varible that will hold the message inside same function (message)
// 3. Create a variable that will hold the name of a sender inside same function (sender)

// 4. Create a function named setMessage that takes one argument (text)
// 5. Message will be equal to the text argument

// 6. Create a function named setSender that takes one argument (name)
// 7. Sender will be equal to the name argument

// 7. Create a function named sendMessage that takes one argument (name)
// 8. Console log the message in a right format

function createMessenger() {
    let message = 'Just learn it';
    let sender = 'Gromcode';

    function setMessage(text) {
        message = text;
    }

    function setSender(name) {
        sender = name;
    }

    function sendMessage(name) {

        console.log(`Hello, ${ name }! ${ message }! This message was sent by ${ sender }`);
    }

    return {
        sendMessage,
        setMessage,
        setSender,
    }
}

// examples
const messanger1 = createMessenger();
messanger1.sendMessage('Anna'); // ===> Hello, Anna! Just learn it! This message was sent by Gromcode

const messanger2 = createMessenger();
messanger2.setMessage('You are learning JS and you do it well');
messanger2.sendMessage('Michael'); // ===> Hello, Michael! You are learning JS and you do it well! This message was sent by Gromcode

const messanger3 = createMessenger();
messanger3.setMessage('The weather is amazing today');
messanger3.setSender('Anna');
messanger3.sendMessage('Alex'); // ===> Hello, Alex! The weather is amazing today! This message was sent by Anna
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
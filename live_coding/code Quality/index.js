//Gleb's solution:

// const withdraw = (clients, balances, client, amount) => {
//remote logit from if 
//get rid of duplicated code
//dont use find

// BAD
//balances.find((balance, index) => clients[index] === client)

// GOOD
//balances[clients.indexOf(client)]


//     if (balances.find((item, index) => clients.indexOf(client) === index) < amount) {
//         return -1;
//     }
//     return balances.find((item, index) => clients.indexOf(client) === index) - amount;
// };

//IGor's solution:
//BAD
// const withdraw = (clients, balances, client, amount) =>{
//   return   balances[clients.indexOf(client)] >= amount
//         ? (balances[clients.indexOf(client)] -= amount)
//         : -1;

//const res = bool ? value1 : value2;
// }

//Oleksis's solution:
//Bad solution:
// const withdraw = (clients, balances, client, amount) => {
//     let clientBalance = balances[clients.indexOf(client)]
//     if (clientBalance >= amount) {
//         clientBalance -= amount;
//         balances[clients.indexOf(client)] = clientBalance;
//         return (clientBalance);
//     };

//     return -1;
// }


//Good solution:
// const withdraw = (clients, balances, client, amount) => {
//     const clientIndex = balances[clients.indexOf(client)];

//     if (balance[clientIndex] < amount) {
//         return -1
//     }
//     balances[clientIndex] -= amount;
//     return balances[clientIndex];
// };

// 'use strict';


//Serhiy's solution:
//Bad solution:
// const withdraw = (clients, balances, client, amount) => {
//     const curentClient = clients.indexOf(client);
//     const newBalance = balances[curentClient] - amount;
//     return newBalance > 0 ? newBalance : -1;
// };

//Denis's solution:
//Norm solution:
// const withdraw = function (clients, balances, client, amount) {
//     if (balances[clients.indexOf(client)] - amount < 0) {
//         return -1;
//     }
//     balances[clients.indexOf(client)] -= amount;
//     return balances[clients.indexOf(client)];
// };

// //Good solution:
// const withdraw = function (clients, balances, client, amount) {
//     const clientIndex = clients.indexOf(client);

//     if (balances[clientIndex] - amount < 0) {
//         return -1;
//     }

//     balances[clientIndex] -= amount;
//     return balances[clientIndex];
// };

//=========================================================================

//0.5 0
//Anna
// const getRandomNumbers = (length, from, to) => {
//     const arr = new Array(length);
//     if (to - from < 1) {
//         return null;
//     }
//     return arr.fill(Math.trunc(Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)));
// };

// 0.9 0
// const getRandomNumbers = (length, from, to) => {
//     if(Math.floor(to - from) < 1) {
//         return null;
//     }

//     const arr = new Array(length);
//     return arr.fill(Math.trunc(Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)));
// };


const getRandomNumbers = (length, from, to) => {
    const fromCeil = Math.ceil(from);
    const toCeil = Math.ceil(to);

    if (toCeil === fromCeil) {
        return null;
    }

    const arr = new Array(length);
    return arr.map(() => Math.trunc(Math.random() * (toCeil - fromCeil) + fromCeil));
}

//Algorithm:
//1. Create function that takes an object as an argument
//2. Create an array
//3. Concatenate the values of the object
//4. Destructing the object
//5. Call the map method on the array
//6. Return the result of the map method

//Dont forget to test your code

const getPeople = obj => [].concat(...Object.values(obj)).map(el => el.name);

const rooms = {
    room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
    room2: [{ name: 'Dan' }],
    room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};
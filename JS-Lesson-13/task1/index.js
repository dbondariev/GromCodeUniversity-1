// Algorithm:
// 1. Create a fucntion that takes two argumets (arr, delta)
// 2. Return a distructed array applying map method to only add delta to even numbers

//Dont forget to test your code

const filter = (arr, delta) => [...arr].map(el => (el % 2 === 0 ? el + delta : el));

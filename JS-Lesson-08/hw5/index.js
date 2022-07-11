/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

//Algorithm:
//1. Create function that takes an object as an argument
//2. Call Object.keys() on the object
//3. Call Object.reduce() on the result of Object.keys()
//4. If the value of the current key is greater than or equal to 18, add it to the accumulator
//5. Return the accumulator
//6. Return the result of the reduce

//Dont forget to test your code

const getAdults = obj => Object.keys(obj).reduce((acc, key) => {
    if (obj[key] >= 18) {
        acc[key] = obj[key];
    }
    return acc;
}
, {});

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }

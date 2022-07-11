/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

//Algorithm:
//1. Create function that takes an object and an array of properties as arguments
//2. reduce the array of properties to an object
//3. return the result of the reduce

//Dont forget to test your code


const pickProps = (obj, props) => 
    props.reduce((acc, prop) => {
        acc[prop] = obj[prop];
        return acc;
    }, {});



// examples
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }

// Algorithm:
// 1. Create a function that takes one argument (str)
// 2. Check if the str is a string and return null if it is not
// 3. Use split method to split the string into an array
// 4. Use reverse method to reverse the array
// 5. Use join method to join the array into a string
// 6. Return the string

//Dont forget to test your code

const reverseString = (string) => typeof (string) !== 'string' ? null : string.split('').reverse().join('');

console.log(reverseString('Привет')); // ===> 'тевиР'

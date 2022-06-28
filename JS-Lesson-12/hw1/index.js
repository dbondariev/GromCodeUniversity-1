const reverseString = (string) => typeof (string) !== 'string' ? null : string.split('').reverse().join('');

console.log(reverseString('Привет')); // ===> 'тевиР'

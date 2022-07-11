'use strict';

/**
 * @param {object} obj
 * @return {undefined}
 */

//Algorithm:
//1. Create function that takes an object as an argument
//2. Use the Object.keys method to get the keys of the object
//3. Use the forEach method to iterate over the keys
//4. Use the console.log method to print the key

//Dont forget to test your code

function getKeys(obj) {
    Object.keys(obj).forEach(key => {
        console.log(key);
    }
    );
}

// examples
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel

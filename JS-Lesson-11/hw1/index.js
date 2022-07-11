// Algorithm:
// 1. Create a function that takes two arguments (str, len = 10)
// 2. Create a variable that will hold the result of the function
//2.a. Create a variable that will hold the length of the string
//3. Check if the str is a string
//4. If it is return null
//5. Use while loop to iterate until the str length is less than len
//6. Use substr method to get the substring
//7. Push the substring to the result variable
//8. Increment the start variable
//9. Check if the start variable is greater than the length of the string
//10. Array push the last chunk of text
//11. Return the result

//Dont forget to test your code


const splitString = (str, len = 10) => {
    const arr = [];
    let start = 0;

    if (typeof str !== 'string') {
        return null;
    }

    while (true) {
        const chunk = str.substr(start, len);
        arr.push(chunk);
        start += len;

        if (start + len >= str.length) {
            break;
        }
    }

    if (arr.join('').length < str.length) {
        const lastChunk = str.substr(arr.join('').length, len - 1);
        arr.push(lastChunk + '.'.repeat(len - lastChunk.length));
    }
    return arr;
};


console.log(splitString('Привет мир!')); // ===> ['Привет', 'мир!']
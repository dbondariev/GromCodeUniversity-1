// Algorithm:
// 1. Create a function that takes two arguments (text, str)
// 2. Create variable that will hold count of the occurrences
// 3. Check if the str is a string
// 4. If it is return null
// 5. Use for loop to iterate until the text length is less than str length
// 6. Use substr method to get the substring
// 7. Check if the substring includes the str
// 8. If it does increment the count variable
// 9. Return the count

//Dont forget to test your code


const countOccurrences = (text = '', str) => {
    let count = 0;

    if (str === '') {
        return null;
    }
    for (let i = 0; i < text.length; i += 1) {
        if (text.substr(i, str.length).includes(str)) {
            count += 1;
        }
    }
    return count;
};


console.log(countOccurrences('Привет мир!', 'и')); // ===> 2
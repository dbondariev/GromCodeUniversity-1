//Algorithm:
//1. Create a function that takes two arguments (num=10, str)
//2. Create a variable that will hold the result of the function
//3. Check if the str is a string
//4. If it is return null
//5. Create a while loop that will iterate until the str length is less than num
//6. Create a variable that will hold the chunck of text 
//7. Use substr to get the chunk of text
//8. Use the push method to add the chunk to the array
//9. Increment the sp variable
//10. Return joined array

//Dont forget to test your code

const splitText = (str, num = 10) => {
    let sp = 0;
    const arr = [];

    if (typeof str !== 'string') {
        return null;
    }
    while (true) {
        const chunk = str.substr(sp, num);
        arr.push(chunk[0].toUpperCase() + chunk.slice(1));
        sp += num;

        if (sp >= str.length) {
            break;
        }
    }

    return arr.join('\n');
};

console.log(splitText('hello world mazafaka', 2)); // ===> ["He", "ll", "o ", "Wo", "rl", "d"]
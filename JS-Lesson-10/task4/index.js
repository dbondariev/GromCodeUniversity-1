//Algorithm:
//1. Create function that takes an array as an argument
//2. Check if parent is an array and if it is empty
//3. If its not an array or empty return null
//4. Use Math.max.apply to get the max absolute number
//5. Distruct an array
//6. Use map method to get the absolute value of each element


//Dont forget to test your code


const getMaxAbsoluteNumber = arr =>
    Array.isArray(arr) && [...arr].length > 0
        ? Math.max.apply(
            null,
            [...arr].map(el => Math.abs(el)),
        )
        : null;

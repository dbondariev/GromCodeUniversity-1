//Algorithm:
//1. Create function that takes 3 arguments (length, from, to)
//2. Create an empty array
//3. Check if to - from < 1
//4. If it is return null
//5. Create a for loop that will iterate from 1 to length
//6. Push a random number to the array
//7. Return the array

//Dont forget to test your code

const getRandomNumbers = (length, from, to) => {
    const arr = [];
    if (to - from < 1) {
        return null;
    }

    for (let i = 0; i < length; i++) {
        arr.push(Number((Math.random() * (to - from) + from).toFixed()));
    }
    return arr;
};


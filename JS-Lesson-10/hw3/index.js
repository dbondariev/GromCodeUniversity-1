//Algorithm:
//1. Create a function that takes two arguments (num, prec)
//2. Create a variable that will hold the result of the function
//3. Use the superRound function to get the result
//4. Return the result

//Dont forget to test your code

const multiRound = (num, prec) => {
    let multifier = 1;
    for (let i = 1; i <= prec; i += 1) {
        multifier *= 10;
    }
    return [
        Math.floor(num * multifier) / multifier,
        Math.trunc(num * multifier) / multifier,
        Math.ceil(num * multifier) / multifier,
        Math.round(num * multifier) / multifier,
        Number(num.toFixed(prec)),
    ];
};

const superRound = (num, prec) => {
    return multiRound(num, prec);
};
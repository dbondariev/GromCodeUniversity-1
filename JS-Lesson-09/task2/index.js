//Algorithm:
//1. Create function that takes an object as an argument
//2. Return the result of the Object.assign method

//Dont forget to test your code

const copyObj = (obj) => {
    return Object.assign({}, obj);
}


const obj = { 'John Doe': 19, Tom: 17, Bob: 18 };

console.log(obj);
console.log(copyObj(obj));

//Algorithm:
//1. Create function that takes an object as an argument
//2. Check if the object is empty
//3. If the object is empty return an empty array
//4. Create an empty array
//5. Create a for in loop that iterates over the object
//6. If the value of the current key is greater than or equal to 18, push the key to the array
//7. Push the value to the array
//8. Return the array

//Dont forget to test your code


const getAdults = (obj) => {
    if (Object.keys(obj).length === 0) { return [] }
    const result = [];
    for (const key in obj) {
        if (obj[key] >= 18) {
            result.push(key);
            result.push(obj[key]);
        }
    }
    return result;
}

// examples

const obj = { 'John Doe': 19, Tom: 17, Bob: 18 };

console.log(getAdults(obj)); // ==> { 'John Doe': 19, Bob: 18 }

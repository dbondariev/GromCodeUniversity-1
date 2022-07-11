//Algorithm:
// Check if the argument is an array
// If it is an array, reduce it to an object

//Dont forget to test your code

const transformToObject = arr => !Array.isArray(arr) ? {} : arr.reduce((acc, item) => {
    acc[item] = item;
    return acc;
}
 , {});
// examples
console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }

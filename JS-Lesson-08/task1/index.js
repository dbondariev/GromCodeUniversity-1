const transformToObject = arr => !Array.isArray(arr) ? {} : arr.reduce((acc, item) => {
    acc[item] = item;
    return acc;
}
 , {});
// examples
console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }

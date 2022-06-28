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

const copyObj = (obj) => {
    return Object.assign({}, obj);
}


const obj = { 'John Doe': 19, Tom: 17, Bob: 18 };

console.log(obj);
console.log(copyObj(obj));

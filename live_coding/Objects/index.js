// function addPropertyV1(obj, key, value) {
//     obj[key] = value;
//     return obj;
// }

// // put your code here
// function addPropertyV2(obj, key, value) {
//     return Object.assign(obj, { [key]: value });
// }

// // put your code here
// function addPropertyV3(obj, key, value) {
//     return Object.assign({}, obj, { [key]: value });
// }

// // put your code here
// function addPropertyV4(obj, key, value) {
//     return { ...obj, [key]: value };
// }
// // examples
// const transaction = {
//     value: 170,
// };
// addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }

//Objects:
// Language: javascript
// Path: live_coding/Objects/index.js
'use strict';
const transaction = {
    value: 170,
};


//==============================================================

//input":obj,string,value)
//output: obj

function addPropertyv1(obj, key, value) {
    obj[key] = value;
    return obj;
}

//test:
console.log(addPropertyv1({}, 'key', 'value')); //==> { key: 'value' }
console.log(addPropertyv1({}, '', 'value')); //==> { '': 'value' }
console.log(addPropertyv1({}, 'key', '')); //==> { key: '' }
console.log(addPropertyv1({}, '', '')); //==> { '': '' }

//==============================================================

function addPropertyv2(obj, key, value) {

    //input : The target object to copy to.The source object from which to copy properties.
    //output: The modified object.
    return Object.assign(obj, { [key]: value });

}

//test:
console.log(addPropertyv2({}, 'key', 'value')); //==> { key: 'value' }
console.log(addPropertyv2({}, '', 'value')); //==> { '': 'value' }
console.log(addPropertyv2({}, 'key', '')); //==> { key: '' }
console.log(addPropertyv2({}, '', '')); //==> { '': '' }

//==============================================================
// function addPropertyV3(object, key, value) {
//     return Object.assign({}, object, { [key]: value });
// }

// const user = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
// };

// console.log(addPropertyV3(user, 'isSingle', 'false')); //==> { name: 'John', age: 30, isAdmin: false, '': '' }
// console.log(user);//==> { name: 'John', age: 30, isAdmin: false, '': '' }

//==============================================================

function addPropertyV3(obj, key, value) {
    return Object.assign({}, obj, { [key]: value });
}



//test data:
const res01 = addPropertyV3(transaction, 'currency', 'USD');//==> { value: 170, currency: 'USD' }
const res02 = addPropertyV3(transaction, 'amount', 300);//==> { value: 170, currency: 'USD', amount: 300 }
console.log('result test 1:', res01);//==> { value: 170, currency: 'USD' }
console.log('result test 2:', res02);//==> { value: 170, currency: 'USD', amount: 300 }
console.log('obj after,:', transaction);//==> { value: 170, currency: 'USD', amount: 300 }

//==============================================================

function addPropertyV4(obj, key, value) {
    return { ...obj, [key]: value };
}

//test data:
const res1 = addPropertyV4({}, 'key', 'value');//==> { key: 'value' }
const res2 = addPropertyV4({}, '', 'value');//==> { '': 'value' }
const res3 = addPropertyV4({}, 'key', '');//==> { key: '' }
const res4 = addPropertyV4({}, '', '');//==> { '': '' }
console.log('result test 1:', res1);//==> { key: 'value' }
console.log('result test 2:', res2);//==> { '': 'value' }
console.log('result test 3:', res3);//==> { key: '' }
console.log('result test 4:', res4);//==> { '': '' }
console.log('obj after,:', transaction);//==> { value: 170, currency: 'USD', amount: 300 }

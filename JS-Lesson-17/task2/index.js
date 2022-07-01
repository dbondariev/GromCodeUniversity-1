function bind(func, context, ...args1) {
    return function (...args2) {
        return func.call(context, ...args1, ...args2);
    };
}


const user = {
    name: 'John',
    age: 18,
    job: 'unemployed',
    sayInfo(phone, email) {
        console.log(`Name: ${this.name}, phone: ${phone}, email: ${email}`);
    },
    sum(a, b, c) {
        console.log(this.age + b + a + c);
        return this.age + b + a + c;
    },
};

const test = bind(user.sayInfo, user, 322, 'jkq');

// const test3 = bind(user.sum, use
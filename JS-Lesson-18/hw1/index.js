function saveCalls(func) {
    const calls = [];

    return function withMemory(...args) {
        calls.push([...args]);
        withMemory.calls = calls;
        return func.apply(this);
    };
}

function sum(a, b) {
    return a + b;
}

const user1 = {
    name: 'John',
    sayHi() {
        return this.name;
    },
};

const test = saveCalls(user1.sayHi);
const test1 = saveCalls(sum);

function first(func) {
    return function setParam() {
        return func.apply(this);
    };
}
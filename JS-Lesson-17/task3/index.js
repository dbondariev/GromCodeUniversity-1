const user = {
    name: 'Tom',
    sayHi() {
        console.log(`Hi, ${this.name}`);
    },
};

function sum(a, b) {
    console.log(a + b);
}

function deferr(func) {
    return function () {
        const setParam = () => func.apply(this, arguments);
        return setParam();
    };
}

const deferredSayHi = deferr(user.sayHi);
deferredSayHi.call(user);

const deferredSum = deferr(sum);
deferredSum(1, 4);
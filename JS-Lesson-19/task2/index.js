export const getOwnProps = obj =>
    Object.entries(obj)
        .filter(el => typeof el[1] !== 'function')
        .map(el => el[0]);

const obj = {
    name: 'Вася',
    age: 30
};

console.log(getOwnProps(obj));
const customers = {
    'customers-id-1': {
        name: 'William',
        age: 54,
    },
    'customers-id-2': {
        name: 'Tom',
        age: 17,
    },
    'customers-id-3': {
        name: 'John',
        age: 34,
    },
    'customers-id-4': {
        name: 'Maria',
        age: 25,
    },
};

const getCustomersList = obj => {
    Object.entries(obj)
    .map(([id, cutomers]) => ({ id, ...cutomers }))
    .sort((a, b) => a.age - b.age);
};
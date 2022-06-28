const sortContacts = (arr, boolean = true) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    if (boolean) {
        return arr.sort((a, b) => a.name.localeCompare(b.name));
    }
    return arr.sort((a, b) => b.name.localeCompare(a.name));
}

const customers = [
    {
        name: 'Alarak',
        age: 54,
    },
    {
        name: 'Antonin',
        age: 17,
    },
    {
        name: 'Cypher',
        age: 34,
    },
    {
        name: 'Bladur',
        age: 25,
    },
];

console.log(sortContacts(customers, true)); // ===> [{ name: 'Antonin', age: 17 }, { name: 'Bladur', age: 25 }, { name: 'Cypher', age: 34 }, { name: 'Alarak', age: 54 }]
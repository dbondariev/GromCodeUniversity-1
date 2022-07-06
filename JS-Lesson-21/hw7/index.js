const filterNames = (arr, text) =>
    arr.filter(name => name.toLowerCase().includes(text.toLowerCase())).filter(name => name.length > 5);


const names = ['Иван', 'Петр', 'Сергей', 'Андрей'];
console.log(filterNames(names, 'Сергей')); // ===> ['Сергей']
//Includes();
//input: arr, value
//output: true or false

//The includes() method determines whether an array includes a certain value among its entries.

//Algorithm:
//1. Create a function that takes two parameters: arr and text
//2. Create a variable called filteredNames and set it to the result of filterNames(arr, text)
//3. Return filteredNames

//Dont forget to test your code.

const filterNames = (arr, text) =>
    arr.filter(name => name.toLowerCase().includes(text.toLowerCase())).filter(name => name.length > 5);


const names = ['Иван', 'Петр', 'Сергей', 'Андрей'];
console.log(filterNames(names, 'Сергей')); // ===> ['Сергей']
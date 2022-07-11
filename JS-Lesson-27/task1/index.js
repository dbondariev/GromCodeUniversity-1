localStorage.setItem('Person', JSON.stringify({
    name: 'Dima',
    age: '34',
    hobbies: ['code', 'travel', 'music'],
    cars: [{
        model: 'BMW',
        year: '2015',
        color: 'black',
    }, {
        model: 'Audi',
        year: '2017',
        color: 'red',
    }],
    hometown: {
        city: 'New York',
        country: 'USA',
    },
    currentCity: {
        city: 'Lviv',
        country: 'Ukraine',
    },
    isMarried: true,
    isInLove: true,

}));

//input : none
//output: object

//Algorithm:
//1. Create a variable named data and set it to localStorage.getItem('Person')
//2. Create and export a function named getLocalStorageData that takes no arguments
//3. Create a variable named data and set it to JSON.parse(data)
//4. Inplement try/catch block
//5. Return data

//Dont forget to test your code


export function getLocalStorageData() {
    return Object.entries(localStorage).reduce((acc, [key, value]) => {
        let newValue;
        try {
            newValue = JSON.parse(value);
        } catch (e) {
            newValue = value;
        }
        return {
            ...acc,
            [key]: newValue,
        };
    }, {});
}
console.log(getLocalStorageData());
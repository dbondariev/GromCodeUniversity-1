const students = [
    { name: 'Tom', birthDate: '01/15/2010' },
    { name: 'Ben', birthDate: '01/17/2008' },
    { name: 'Sam', birthDate: '03/15/2010' }]


// console.log(studentsBirthDays(students));

export const studentsBirthDays = (arr)  => {
    return arr.map(item => {
        const date = new Date(item.birthDate);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${item.name} was born on ${month}/${day}/${year}`;
    }
    );
    
}

console.log(studentsBirthDays(students));


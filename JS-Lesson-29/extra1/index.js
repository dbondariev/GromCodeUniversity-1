export const studentsBirthDays = (students) => {
    const result = [];
    for (let i = 0; i < students.length; i++) {
        result.push(`name: ${students[i].name}, birhDate: ${students[i].birthDate}`);
    }
    return result;
}

const students = [
{ name: 'Tom', birthDate: '01/15/2010' },
{ name: 'Ben', birthDate: '01/17/2008' },
{ name: 'Sam', birthDate: '03/15/2010' }]


console.log(studentsBirthDays(students));
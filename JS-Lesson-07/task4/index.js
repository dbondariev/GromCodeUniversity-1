const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
    const bestStudents = allStudentsList.filter(student => {
        return studentsForRetake.indexOf(student) === -1;
    });
    const messages = bestStudents.map(student => {
        return `Good job, ${student}`;
    });
    return messages;

};

// examples
const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest1 = ['John', 'Mike'];
console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1)); // ===> ['Good job, Den', 'Good job, Ann']

const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
console.log(getMessagesForBestStudents(allStudTest2, retakeStudTest2)); // ===> []

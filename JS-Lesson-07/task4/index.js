//filter();
//input: callback function,element,index,array
//output: array of elements that satisfy the callback function

//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

//map();
//input: callback function, element, index, array,thisArg(optional)
//output: a new array with each element being the result of the callback function.

//The map() method creates a new array with the results of calling a function for every array element.


//Algorithm:
//1.Create a function that takes two parameters: allStudentsList and studentsForRetake
//2.Create a variable called bestStudents and set it to the result of allStudentsList.filter(student => {
//    return studentsForRetake.indexOf(student) === -1;
//}
//3.Create a variable called messages and set it to the result of bestStudents.map(student => {
//    return `Good job, ${student}`;
//}
//4.Return messages
//5.Call the function and pass it the following parameters: allStudentsList and studentsForRetake
//6.Print the result of the function


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

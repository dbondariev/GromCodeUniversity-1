//Algorithm:
// 1.Create a custructor function for the User object.
// 2.Create a method for the User object getFullName().
//3.Create a method for the User object setFullName().
//4.Test if works correctly.

 const user = { //User object
    firstName: 'John', 
    lastName: 'Doe',

    getfullName() { //get full name
        return `${this.firstName} ${this.lastName}`;

    },
    setfullName(fullName) { //set full name
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    },
};

export default user;


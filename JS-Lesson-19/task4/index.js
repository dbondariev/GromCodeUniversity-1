//Algorithm:
// 1.Create a custructor function for the User object.
// 2.Create a method for the User object getFullName().
//3.Create a method for the User object setFullName().
//4.Test if works correctly.

const user = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    },
};


export default user;

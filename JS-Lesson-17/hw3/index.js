export const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    setFullName(str) {
        const [personFirstName, personLastName] = str.split(' ');
        this.firstName = personFirstName;
        this.lastName = personLastName;
    },
};

user.setFullName('Jaime Lannister');
console.log(user);
console.log(user.getFullName());
const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    setFullName(str) {
        const [personName, personSurname] = str.split(' ');
        this.firstName = personName;
        this.lastName = personSurname;
    },
};

user.setFullName('Jaime Lannister');
console.log(user);
console.log(user.getFullName());
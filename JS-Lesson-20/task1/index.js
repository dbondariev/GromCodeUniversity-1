export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static compare(user1, user2) {
        return user1.age - user2.age;
    }

    static createEmpty() {
        return new User('', 0);
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }

    setAge(value) {
        if (value < 0) {
            return false;
        }
        this.age = value;
        if (value >= 25) {
            this.requestNewPhoto();
        }
        return value;
    }
}

// test-data
const user1 = new User('Tom', 17);
const user2 = new User('Dima', 34);
console.log(user1);
console.log(user2);
console.log(User.compare(user1, user2));
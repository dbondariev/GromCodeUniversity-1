//Algorithm:
// 1.Create a custructor function for the User object.
// 2.Create a method for the User object sayHi().
//3.Test function with new User().sayHi();
//4.Create a method for the User object requestNewPhoto().
//5.Test function with new User().requestNewPhoto();
//6.Create a method prototype setAge() for the User object.

export function User(name, age) {
    this.name = name;
    this.age = age;

    User.prototype.requestNewPhoto = function () {
        console.log(`New photo request was sent for ${this.name}`);
    };
    User.prototype.setAge = function (newAge) {
        this.age = newAge;
        if (this.age >= 25) {
            console.log(`New photo request was sent for ${this.name}`);
        }
        if (this.age < 0) {
            return false;
        }
        return this.age;
    };
    User.prototype.sayHi = function () {
        console.log(`Hi, I am ${this.name}`);
    };
}
const user = new User('Tomas', 22);
user.sayHi();
user.requestNewPhoto();
user.setAge(30);

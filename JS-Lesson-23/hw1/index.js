'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {
    constructor(price, city, type, id) {
        this.id = id;
        this.price = price;
        this.dateCreated = new Date();
        this.isConfirmed = null;
        this.dateConfirmed = false;
        this.city = city;
        this.type = type;
    }

    checkPrice() {
        return this.price > 1000;
    }

    confimOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = new Date();
    }

    isValidType() {
        return !!(this.type === 'Buy' || this.type === 'Sell');
    }
}

//test data:
const order1 = new Order(900, 'Lviv', 'Sell');
console.log(order1);

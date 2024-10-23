import Customer from './Customer';
// const Customer = require('./Customer');

class Sellor extends Customer {
    constructor(name, age, product) {
        super(name, age);
        this.product = product;
    }
    sell() {
        console.log(this.name, this.age, this.product);
    }
}

export default Sellor;
// module.exports = Sellor;

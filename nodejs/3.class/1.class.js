class Customer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log(this.name, this.age);
    }
}

console.log(Customer.prototype.constructor === Customer); // true
let c1 = new Customer('Tom', 18);
c1.say(); // Tom 18

console.log(c1.__proto__ === Customer.prototype); // true
console.log(Customer === Customer.prototype.constructor); // true
console.log(Customer.prototype.constructor === Customer); // true
console.log(Customer.prototype.constructor.prototype === Customer.prototype); // true
console.log(Customer.prototype.constructor.prototype.constructor === Customer); // true

console.log(c1.constructor === Customer); // true

console.log(typeof c1.say); // function
console.log(typeof Customer.prototype.say); // function

console.log(typeof Customer.constructor); // function

// for문 연습.
// const people = ['Tom', 'Jerry', 'Mike', 'Tom', 'Jerry', 'Tom'];

// function forPractice() {
//     for (const one of people) {
//         console.log(one);
//     }
// }

// forPractice();

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greeting() {
        console.log(`Hello, I'm ${this.name}`);
    }

    getInCar(car) {
        console.log(`Getting in the ${car.brand}...`);
    }
}

export default Person;

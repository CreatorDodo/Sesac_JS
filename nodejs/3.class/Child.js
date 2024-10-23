import Person from './Person.js';

class Child extends Person {
    constructor(name, age, gender, grade) {
        super(name, age, gender);
        this.grade = grade;
    }

    playInCar() {
        console.log('Playing in the car...');
    }

    sing() {
        console.log('Singing a song...');
    }
}

export default Child;

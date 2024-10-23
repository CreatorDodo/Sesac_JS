import Person from './Person.js';

class Parent extends Person {
    constructor(name, age, gender, favorite) {
        super(name, age, gender);
        this.favorite = favorite;
    }

    driveCar() {
        console.log('Driving the car...');
    }
}

export default Parent;

import Car from './Car.js';

class SUV extends Car {
    constructor(brand, model, year) {
        super(brand, model);
        this.year = year;
    }
    offRoad() {
        console.log('Off-roading...');
    }
}

export default SUV;

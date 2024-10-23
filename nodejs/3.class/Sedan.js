import Car from './Car.js';

class Sedan extends Car {
    constructor(brand, model, year, color) {
        super(brand, model);
        this.year = year;
        this.color = color;
    }
    openTrunk() {
        console.log('Opening the trunk...');
    }
}

export default Sedan;

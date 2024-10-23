class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    show() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }

    start() {
        console.log('Starting...');
    }

    stop() {
        console.log('Stopping...');
    }

    drive() {
        console.log('Driving...');
    }

    // Overriding the toString method
    toString() {
        return `Brand: ${this.brand}, Model: ${this.model}`;
    }
}

export default Car;

class Car {
    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    start() {
        return 'Car is starting...';
    }

    drive() {
        return `${this.brand} ${this.model} is driving...`;
    }

    stop() {
        console.log('Car is stopping...');
    }
}

const myCar = new Car('Toyota', 'Camry', 2019, 'white');
console.log(myCar); // Car { brand: 'Toyota', model: 'Camry', year: 2019, color: 'white' }

console.log(myCar.drive()); // Toyota Camry is driving...

const status2 = myCar.drive();
console.log(status2); // Toyota Camry is driving...

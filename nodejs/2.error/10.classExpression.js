const Car = class {
    // 익명/실명 O, 호이스팅 X,
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
};

const myCar = new Car('Toyota', 'Camry', 2019, 'white');
console.log(myCar); // Car { brand: 'Toyota', model: 'Camry', year: 2019, color: 'white' }

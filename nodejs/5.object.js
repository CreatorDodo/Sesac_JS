let Car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2019,
    color: 'white',
    start: function () {
        return 'Car is starting...';
    },
    stop: function () {
        console.log('Car is stopping...');
    },
};

console.log(Car.brand); // Toyota
console.log(Car.model); // Camry
console.log(Car.start); // [Function: start]
console.log(Car.stop); // [Function: stop]
console.log(Car.start()); // Car is starting...
console.log(Car.stop()); // Car is stopping...

Car.brand = 'Honda';
console.log(Car.brand); // Honda

// 객체 지향으로 Shape 만들기.
class Shape {
    constructor(type) {
        this.type = type;
        this.width = 0;
        this.height = 0;
    }

    getArea() {
        return 0;
    }

    getInfo() {
        console.log(`shape: shape`);
    }
}

class Square extends Shape {
    constructor(width, height) {
        super('Square');
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.width;
    }

    getInfo() {
        console.log(`shape: Squre, width: ${this.width}`);
    }

    toString() {
        return `shape: ${this.type}, width: ${this.width}`;
    }
}

class Triangle extends Shape {
    constructor(width, height) {
        super('Triangle');
        this.width = width;
        this.height = height;
    }

    getArea() {
        return (this.width * this.height) / 2;
    }

    getInfo() {
        console.log(
            `shape: Triangle, width: ${this.width}, height: ${this.height}`,
        );
    }

    toString() {
        return `shape: ${this.type}, width: ${this.width}, height: ${this.height}`;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getInfo() {
        console.log(
            `shape: Circle, radius: ${this.radius}, width: ${this.width}, height: ${this.height}`,
        );
    }

    toString() {
        return `shape: ${this.type}, radius: ${this.radius}`;
    }
}

class Trapezium extends Shape {
    constructor(width, base, height) {
        super('Trapezium');
        this.width = width;
        this.height = height;
        this.base = base;
    }

    getArea() {
        return ((this.base + this.width) * this.height) / 2;
    }

    getInfo() {
        console.log(
            `shape: Trapezium, width: ${this.width}, base: ${this.base}, height: ${this.height}`,
        );
    }

    toString() {
        return `shape: ${this.type}, width: ${this.width}, base: ${this.base}, height: ${this.height}`;
    }
}

const square = new Square(5);
const triangle = new Triangle(4, 3);
const trapezium = new Trapezium(4, 6, 5);
const circle = new Circle(3);

console.log(square.getArea());
console.log(triangle.getArea());
console.log(trapezium.getArea());
console.log(circle.getArea());

square.getInfo();
triangle.getInfo();
trapezium.getInfo();
circle.getInfo();

console.log(square.toString());
console.log(triangle.toString());
console.log(trapezium.toString());
console.log(circle.toString());

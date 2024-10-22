class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // getter
    // 함수를 변수처럼 사용할 수 있음
    get diameter() {
        return this.radius * 2;
    }

    // setter
    // 함수를 변수처럼 사용할 수 있음
    set diameter(diameter) {
        this.radius = diameter / 2;
    }
}

const myCircle = new Circle(5);
console.log(myCircle.diameter);
console.log(myCircle.radius);

myCircle.diameter = 20;
console.log(myCircle.diameter);
console.log(myCircle.radius);

class animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

class bird extends animal {
    eat() {
        console.log(`${this.name} is BirdEating`);
    }

    fly() {
        console.log(`${this.name} is flying`);
    }
}

const myBird = new bird('myBird');

myBird.eat();

myBird.sleep();

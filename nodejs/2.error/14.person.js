class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPerson() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }

    walk() {
        return `${this.name} is walking`;
    }
}

const myPerson = new person('John', 30);
console.log(myPerson.getPerson());
console.log(myPerson.walk());

class student extends person {
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }

    getStudent() {
        return `${super.getPerson()}, School: ${this.school}`;
    }

    study() {
        return `${this.name} is studying`;
    }
}

const myStudent = new student('John', 30, 'MIT');
console.log(myStudent.getStudent());
console.log(myStudent.study());
console.log(myStudent.walk());

console.log(myStudent instanceof student); // myStudent가 student의 instance인지 확인
console.log(myStudent instanceof person); // myStudent가 person의 instance인지 확인
console.log(myPerson instanceof student); // myPerson이 student의 instance인지 확인
console.log(myPerson instanceof person); // myPerson이 person의 instance인지 확인

console.log(typeof myStudent); // object
console.log(typeof myStudent.getStudent); // function

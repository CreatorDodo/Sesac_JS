var a = 1;

console.log(a);

/* -------------------------------------------- */

console.log(('b' + 'a' + +'a' + 'a').toLowerCase());

/* -------------------------------------------- */

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
    console.log(n);
});

/* ------------------ Function ------------------ */

// sum2에 익명함수 대입.
let sum2 = function add(a, b) {
    return a + b;
};
console.log(sum2(2, 3));

/* -------------------------------------------- */

// sum3에 화살표 함수 대입.
let sum3 = (a, b) => {
    return a + b;
};

console.log(sum3(2, 3));

/* -------------------------------------------- */

// sum4에 화살표 함수 대입.
let sum4 = (a, b) => a + b;
console.log(sum4(2, 3));

/* -------------------------------------------- */

// 사칙연산 화살표 함수로 만들기.
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));
console.log(div(1, 2));

/* ------------------ Object ------------------ */

// person 변수에 객체 대입.
let person = {
    name: '홍길동',
    age: 16,
    greet: function () {
        console.log('안녕하세요.' + this.name + '입니다.');
    },
};

console.log(person.name);
console.log(person.age);
person.greet();

/* ------------------ Array ------------------ */

let fruits = ['apple', 'banana', 'cherry'];

console.log(fruits.length);

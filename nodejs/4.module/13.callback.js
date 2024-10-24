// 콜백 함수를 사용하여 비동기 처리
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(name);
}

function displayGreeting(greeting) {
    console.log(greeting);
}

function displayGreeting2(greeting) {
    console.log(`<h1>${greeting}</h1>`);
}

greet('홍길동', displayGreeting);
greet('홍길동', displayGreeting2);

/**********************/

function add(a, b, callback) {
    const result = a + b;
    callback(a, b, result);
}

function displayResult(a, b, result) {
    console.log(`${a} + ${b} = ${result}`);
}

add(10, 20, displayResult);

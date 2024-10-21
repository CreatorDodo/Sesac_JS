// 변수의 scope
var a = 10; // FE에서는 변수를 어디서나 쉽게 선언하기 위해.
let b = 20; // BE에서는 변수를 글로벌 변수로.

function test() {
    let c = 30;
    console.log(a); // 100
    console.log(b); // 200
    console.log(c); // 300
}

// console.log(a, b, c);

test();

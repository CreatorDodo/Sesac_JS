// console.log(test());

// function test() {
//     console.log(a);
//     var a = 100;
//     console.log(a);
// }

// test1();

// function test1() {
//     test2();
// }

// function test2() {
//     console.log('test2');
// }

// 변수에 함수를 넣으면 hoisting이 되지 않는다.

console.log('test :', test4(2, 2));

let test4 = function (x, y) {
    return x + y;
};

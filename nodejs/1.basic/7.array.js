// const mixed = [
//     1,
//     2,
//     3,
//     'a',
//     'b',
//     'c',
//     true,
//     false,
//     null,
//     undefined,
//     NaN,
//     Infinity,
//     -Infinity,
//     {},
//     [],
//     function () {},
// ];

// console.log(mixed);
// console.log(mixed[0]); // 1
// console.log(mixed[mixed.length - 1]); // [Function]

// // forEach의 변화 과정.
// function print_componet(componet) {
//     console.log(componet);
// }
// mixed.forEach(print_componet);

// mixed.forEach(function (componet) {
//     console.log(componet);
// });

// mixed.forEach((componet) => {
//     console.log(componet);
// });

// /*********************************/

// const sliced = mixed.slice(0, 3); // 0 ~ 2
// console.log(mixed);
// console.log(sliced);

// // slice는 원본 배열을 건드리지 않는다.
// // splice는 원본 배열을 건드린다.

// const spliced = mixed.splice(0, 3); // 0 ~ 2
// console.log(mixed);
// console.log(spliced);

// /*********************************/

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9, 10];
// const array3 = [11, 12, 13, 14, 15];
// const array = array1.concat(array2, array3); // 복제본을 만들어 반환한다.

// console.log(array);

// const SpreadArray = [...array1, ...array2, ...array3]; // 복제본을 만들어 반환한다.
// console.log(SpreadArray);

// /*********************************/

// const original = [1, 2, 3, 4, 5];
// const elements = [6, 7, 8, 9, 10];

// original.splice(2, 0, ...elements); // 2번째 인덱스에 elements를 추가한다.
// console.log(original);

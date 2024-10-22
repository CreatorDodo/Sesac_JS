const time = Date.now();
console.log(time);

let MaxNumber = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(MaxNumber); // 10

// Math Object
console.log(Math.PI); // 3.141592653589793
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.pow(8, 2)); // 64
console.log(Math.sqrt(64)); // 8
console.log(Math.abs(-4.7)); // 4.7
console.log(Math.ceil(4.4)); // 5
console.log(Math.floor(4.7)); // 4

console.log(typeof '문자열'); // string
const text1 = 'good';

console.log(text1.length); // 4
console.log(text1.toUpperCase()); // GOOD
console.log(text1.toLowerCase()); // good
console.log(text1.indexOf('o')); // 1
console.log(text1.indexOf('k')); // -1
console.log(text1.charAt(0)); // g
console.log(text1.charAt(1)); // o

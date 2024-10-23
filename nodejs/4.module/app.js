// 파일은 보통 index.js & app.js로 만들어서 사용한다.

// 외부 모듈을 불러온다.
// const addFunction = require('./add.js');

// import add from './add.js';
import { addFunction, subFunction } from './add.js';

const result = addFunction(1, 2);
console.log(result); // 3

const result2 = subFunction(1, 2);
console.log(result2); // -1

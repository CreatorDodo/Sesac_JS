// try {
//     console.log(undefinedVariable);
// } catch (error) {
//     if (error instanceof ReferenceError) {
//         console.error('ReferenceError');
//     } else if (error instanceof TypeError) {
//         console.error('TypeError');
//     } else {
//         console.error('알수 없는 에러');
//     }
// }

// // console.log(undefinedVariable); // ReferenceError: undefinedVariable is not defined

// // 2. 구문 오류(SyntaxError)

// try {
//     const sum = eval('10 ++ 20');
//     console.log('sum :', sum);
// } catch (error) {
//     if (error instanceof SyntaxError) {
//         console.error('SyntaxError');
//     } else {
//         console.error('Error');
//     }
// }

// // 3. 타입 오류(TypeError)

// try {
//     let obj = null;
//     obj.test();
// } catch (error) {
//     if (error instanceof TypeError) {
//         console.error('TypeError');
//     } else {
//         console.error('Error');
//     }
// }

// // 4. 범위 오류(RangeError)

// try {
//     const array = new Array(-200);
//     console.log('array :', array);
// } catch (error) {
//     if (error instanceof RangeError) {
//         console.error('RangeError');
//     } else {
//         console.error('Error');
//     }
// }

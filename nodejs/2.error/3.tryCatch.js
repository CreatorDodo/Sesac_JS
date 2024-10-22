// // 실제 적용.

// try {
//     invalidFunction(); // ReferenceError: invalidFunction is not defined
// } catch (error) {
//     console.error('error');
//     if (error instanceof ReferenceError) {
//         console.error('ReferenceError');
//     } else if (error instanceof TypeError) {
//         console.error('TypeError');
//     } else if (error instanceof SyntaxError) {
//         console.error('SyntaxError');
//     } else {
//         console.error('알수 없는 에러');
//     }
// }

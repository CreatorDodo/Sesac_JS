// // 삼각형 그리기.

// // 1. 삼각형 그리기
// for (let i = 0; i < 5; i++) {
//     let star = '';
//     for (let j = 0; j <= i; j++) {
//         star += '*';
//     }
//     console.log(star);
// }

// console.log('=====================');

// // 2. 역삼각형 그리기
// for (let i = 4; i >= 0; i--) {
//     let star = '';
//     for (let j = 0; j <= i; j++) {
//         star += '*';
//     }
//     console.log(star);
// }

// console.log('=====================');

// // 3. 왼쪽으로 정렬된 삼각형 그리기
// for (let i = 0; i < 5; i++) {
//     let star = '';
//     for (let j = 0; j < 5; j++) {
//         if (j >= i) {
//             star += '*';
//         } else {
//             star += ' ';
//         }
//     }
//     console.log(star);
// }

// console.log('=====================');

// // 4. 오른쪽으로 정렬된 삼각형 그리기
// for (let i = 0; i < 5; i++) {
//     let star = '';
//     for (let j = 0; j < 5; j++) {
//         if (j < 4 - i) {
//             star += ' ';
//         } else {
//             star += '*';
//         }
//     }
//     console.log(star);
// }

// console.log('=====================');

// // 5. 정삼각형 그리기
// for (let i = 0; i < 5; i++) {
//     let star = '';
//     for (let j = 0; j < 9; j++) {
//         if (j < 4 - i || j > 4 + i) {
//             star += ' ';
//         } else {
//             star += '*';
//         }
//     }
//     console.log(star);
// }

// console.log('=====================');

// // 6. 역정삼각형 그리기
// for (let i = 4; i >= 0; i--) {
//     let star = '';
//     for (let j = 0; j < 9; j++) {
//         if (j < 4 - i || j > 4 + i) {
//             star += ' ';
//         } else {
//             star += '*';
//         }
//     }
//     console.log(star);
// }

// console.log('=====================');

// // 7. 함수화

// function triangle(n) {
//     for (let i = 0; i < n; i++) {
//         let star = '';
//         for (let j = 0; j <= i; j++) {
//             star += '*';
//         }
//         console.log(star);
//     }
// }

// triangle(6);

// console.log('=====================');

// function reverseTriangle(n) {
//     for (let i = n - 1; i >= 0; i--) {
//         let star = '';
//         for (let j = 0; j <= i; j++) {
//             star += '*';
//         }
//         console.log(star);
//     }
// }

// reverseTriangle(6);

// console.log('=====================');

// function leftTriangle(n) {
//     for (let i = 0; i < n; i++) {
//         let star = '';
//         for (let j = 0; j < n; j++) {
//             if (j >= i) {
//                 star += '*';
//             } else {
//                 star += ' ';
//             }
//         }
//         console.log(star);
//     }
// }

// leftTriangle(6);

// console.log('=====================');

// function rightTriangle(n) {
//     for (let i = 0; i < n; i++) {
//         let star = '';
//         for (let j = 0; j < n; j++) {
//             if (j < n - 1 - i) {
//                 star += ' ';
//             } else {
//                 star += '*';
//             }
//         }
//         console.log(star);
//     }
// }

// rightTriangle(6);

// console.log('=====================');

// function triangle2(n) {
//     for (let i = 0; i < n; i++) {
//         let star = '';
//         for (let j = 0; j < 2 * n - 1; j++) {
//             if (j < n - 1 - i || j > n - 1 + i) {
//                 star += ' ';
//             } else {
//                 star += '*';
//             }
//         }
//         console.log(star);
//     }
// }

// triangle2(6);

// console.log('=====================');

// function reverseTriangle2(n) {
//     for (let i = n - 1; i >= 0; i--) {
//         let star = '';
//         for (let j = 0; j < 2 * n - 1; j++) {
//             if (j < n - 1 - i || j > n - 1 + i) {
//                 star += ' ';
//             } else {
//                 star += '*';
//             }
//         }
//         console.log(star);
//     }
// }

// reverseTriangle2(6);

// console.log('=====================');

// // 8. 하트 그리기
// for (let i = 0; i < 7; i++) {
//     let star = '';
//     for (let j = 0; j < 13; j++) {
//         if (i < 4) {
//             if ((j < 3 - i || j > 3 + i) && (j < 9 - i || j > 9 + i)) {
//                 star += ' ';
//             } else {
//                 star += '*';
//             }
//         } else {
//             if (j < i * 2 - 6 || j > 18 - i * 2) {
//                 star += ' ';
//             } else {
//                 star += '*';
//             }
//         }
//     }
//     console.log(star);
// }

// 9. 함수화
function drawHeart(n) {
    // 상단

    // 중단

    // 하단
    for (let i = n - 1; i >= 0; i--) {
        let star = '';
        for (let j = 0; j < 4 * n - 1; j++) {
            if (j < n - 1 - i || j > 3 * n - 3 + i) {
                star += ' ';
            } else {
                star += '*';
            }
        }
        console.log(star);
    }
}

drawHeart(5);

//     for (let i = n - 1; i >= 0; i--) {
//         let star = '';
//         for (let j = 0; j < 2 * n - 1; j++) {
//             if (j < n - 1 - i || j > n - 1 + i) {
//                 star += ' ';
//             } else {
//                 star += '*';
//             }
//         }
//         console.log(star);
//     }

// console.log('=====================');

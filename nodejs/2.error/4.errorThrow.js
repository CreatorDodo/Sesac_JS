// function divide(a, b) {
//     try {
//         if (b === 0) {
//             throw '0으로 나눌 수 없습니다.';
//         }
//         return a / b;
//     } catch (e) {
//         console.error(e);
//         return '에러가 발생했습니다.';
//     }
// }

// console.log(divide(4, 0));
// console.log(divide(4, 2));

// 2. 오류를 error 객체로 만들어서 throw하기

function divide(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('a와 b는 숫자여야 합니다.');
        }

        if (b === 0) {
            throw new Error('0으로 나눌 수 없습니다.');
        }
        return a / b;
    } catch (e) {
        console.error(e);
        return '에러가 발생했습니다.';
    } finally {
        // finally 블록은 에러가 발생하든 안하든 무조건 실행된다.
        console.log('finally');
    }
}

console.log(divide(4, 0));
console.log(divide(4, 2));
console.log(divide(4, '2'));

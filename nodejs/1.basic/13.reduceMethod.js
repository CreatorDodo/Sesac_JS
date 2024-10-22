// reduce method
// reduce는 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고 하나의 결과값을 반환합니다.

const array = [-1, -2, -3, -4, -5];

// acc: accumulator, cur: current
const sum = array.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 15

// 초기값을 주지 않으면 첫번째 요소가 초기값이 된다.
const sum2 = array.reduce((acc, cur) => acc + cur);
console.log(sum2); // 15

// 초기값을 주면 초기값이 더해진다.
const sum3 = array.reduce((acc, cur) => acc + cur, 2);
console.log(sum3); // 17

// reduce를 사용해서 배열의 곱을 구하기
const product1 = array.reduce((acc, cur) => acc * cur, 1);
console.log(product1); // 120

const product2 = array.reduce((acc, cur) => acc * cur, 0);
console.log(product2); // 0

// reduce를 사용해서 배열의 최대값 구하기
const max = array.reduce((acc, cur) => Math.max(acc, cur), 0);
console.log(max); // 5

// 최대값을 구하는 함수
function getMax(arr) {
    // -값이 있을 수 있으므로 0번째 요소로 초기값을 설정한다.
    let max = arr[0];
    arr.forEach((num) => {
        if (num > max) {
            max = num;
        }
    });
    return max;
}

console.log(getMax(array)); // 5

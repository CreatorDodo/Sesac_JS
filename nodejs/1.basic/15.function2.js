// 입력값을 받아서 출력값을 반환하는 것이 함수의 기본적인 역할

function sum_to_n(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sum_to_n_reduce(n) {
    return Array.from({ length: n }, (_, i) => i + 1).reduce(
        (acc, cur) => acc + cur,
        0,
    );
}

function sum3_to_n(n) {
    // gauss sum
    return (n * (n + 1)) / 2;
}

console.log(sum_to_n()); // 5050
console.log(sum_to_n_reduce()); // 5050
console.log(sum3_to_n()); // 5050

console.time('sum_to_n');
console.log(sum_to_n()); // 5050
console.timeEnd('sum_to_n');

console.time('sum_to_n_reduce');
console.log(sum_to_n_reduce()); // 5050
console.timeEnd('sum_to_n_reduce');

console.time('sum3_to_n');
console.log(sum3_to_n()); // 5050
console.timeEnd('sum3_to_n');

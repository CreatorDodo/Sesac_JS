function sum_to_100() {
    let sum = 0;
    for (let i = 1; i <= 10000; i++) {
        sum += i;
    }
    return sum;
}

// 캐싱 : 값을 미리 계산해서 저장해두고 재사용하는 것
console.log(sum_to_100()); // 5050
console.log(sum_to_100_reduce()); // 5050
console.log(sum3_to_100()); // 5050

console.time('sum_to_100');
console.log(sum_to_100()); // 5050
console.timeEnd('sum_to_100');

function sum_to_100_reduce() {
    return Array.from({ length: 10000 }, (_, i) => i + 1).reduce(
        (acc, cur) => acc + cur,
        0,
    );
}

console.time('sum_to_100_reduce');
console.log(sum_to_100_reduce()); // 5050
console.timeEnd('sum_to_100_reduce');

function sum3_to_100() {
    // gauss sum
    let n = 10000;
    return (n * (n + 1)) / 2;
}

console.time('sum3_to_100');
console.log(sum3_to_100()); // 5050
console.timeEnd('sum3_to_100');

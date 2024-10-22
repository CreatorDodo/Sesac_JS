// 이 함수를 호출하는 사람이 에러처리를 담당한다.[error handling]
function checkage(age) {
    if (age < 0 || age > 200) {
        throw new Error('유효하지 않은 나이입니다.');
    }
    return '유효한 나이입니다.';
}

console.log(checkage(10)); // 유효한 나이입니다.
console.log(checkage(-10)); // Error: 유효하지 않은 나이입니다.

try {
    console.log(checkage(-10));
} catch (error) {
    console.log('에러 발생:', error.message);
}

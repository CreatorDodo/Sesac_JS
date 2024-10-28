console.log('타이머를 통한 비동기 처리');

setTimeout(() => {
    console.log('2초 후에 실행됩니다.');
}, 2000);

setTimeout(() => {
    console.log('1초 후에 실행됩니다.');
}, 1000);

console.log('모든 작업이 완료되었습니다.');

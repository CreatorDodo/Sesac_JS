console.log('타이머를 통한 비동기 처리');

function printHello() {
    console.log('Hello');
}

// 1초 후에 printHello 함수를 실행합니다.
// 비동기 처리로 실행되기 때문에 다음 코드가 실행되지 않고 1초 후에 실행됩니다.
// 1초 후에 4개의 printHello 함수가 실행됩니다.
setTimeout(printHello, 1000);
setTimeout(printHello, 1000);
setTimeout(printHello, 1000);
setTimeout(printHello, 1000);

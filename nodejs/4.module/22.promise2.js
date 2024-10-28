console.log('비동기 처리를 시작합니다.');

// promise
// 비동기 처리를 위한 객체
// 비동기 처리가 성공했을 때 실행할 함수와 실패했을 때 실행할 함수를 등록할 수 있습니다.
// 비동기 처리가 성공하면 resolve 함수를 호출하고 실패하면 reject 함수를 호출합니다.
// resolve 함수를 호출하면 then 메서드에 등록한 함수가 실행되고 reject 함수를 호출하면 catch 메서드에 등록한 함수가 실행됩니다.
// promise 객체를 생성할 때는 new Promise()를 사용합니다.
// promise 객체를 생성할 때는 콜백 함수를 인자로 전달합니다.
// 콜백 함수는 resolve와 reject를 인자로 받습니다.
// resolve 함수를 호출하면 then 메서드에 등록한 함수가 실행됩니다.
// reject 함수를 호출하면 catch 메서드에 등록한 함수가 실행됩니다.
// pending : 비동기 처리가 아직 수행되지 않은 상태
// fulfilled : 비동기 처리가 성공적으로 수행된 상태
// rejected : 비동기 처리가 실패한 상태

// setTimeout(() => {
//     console.log('1초 후에 실행됩니다.');
// }, 1000);

// setTimeout(() => {
//     console.log('2초 후에 실행됩니다.');
// }, 2000);

// setTimeout(() => {
//     console.log('3초 후에 실행됩니다.');
// }, 3000);

// console.log('4. 비동기 처리가 완료되었습니다.');

function setTimeoutSync(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            // resolve() : 이 부분을 주석처리하면 비동기 처리가 완료되지 않습니다.
            resolve();
        }, delay);
    });
}

// setTimeoutSync('1초 후에 실행됩니다.', 1000).then(() =>
//     setTimeoutSync('2초 후에 실행됩니다.', 1000).then(() =>
//         setTimeoutSync('3초 후에 실행됩니다.', 1000).then(() =>
//             console.log('비동기 처리가 완료되었습니다.'),
//         ),
//     ),
// );

// // promise chaining
// setTimeoutSync('1초 후에 실행됩니다.', 1000)
//     .then(() => setTimeoutSync('2초 후에 실행됩니다.', 1000))
//     .then(() => setTimeoutSync('3초 후에 실행됩니다.', 1000))
//     .then(() => console.log('비동기 처리가 완료되었습니다.'));

// async/await
// promise를 더 쉽게 사용할 수 있도록 해주는 문법
// async 함수를 사용하면 promise를 더 쉽게 사용할 수 있습니다.
// async 함수는 함수 선언부에 async 키워드를 추가합니다.
// async 함수 내부에서 비동기 처리를 하려면 await 키워드를 사용합니다.
// await 키워드는 async 함수 내부에서만 사용할 수 있습니다.
// await 키워드 뒤에는 promise 객체를 입력합니다.
// await 키워드 뒤에 입력한 promise 객체가 처리될 때까지 기다립니다.
// promise 객체가 처리되면 처리된 값을 반환합니다.
// async 함수는 promise 객체를 반환합니다.
// async 함수를 호출하면 promise 객체를 반환합니다.
// async 함수를 호출한 뒤에 then 메서드를 호출하면 async 함수 내부에서 반환한 값을 사용할 수 있습니다.
// async 함수 내부에서 예외가 발생하면 catch 메서드를 사용하여 예외를 처리할 수 있습니다.
// async 함수 내부에서 예외가 발생하면 promise 객체가 rejected 상태가 됩니다.
// async 함수 내부에서 예외가 발생하면 catch 메서드에 등록한 함수가 실행됩니다.
// async 함수 내부에서 예외가 발생하면 catch 메서드에 등록한 함수에 예외 정보가 전달됩니다.

async function setTimeoutAsync() {
    await setTimeoutSync('1. 1초 후에 실행됩니다.', 1000);
    await setTimeoutSync('2. 2초 후에 실행됩니다.', 1000);
    await setTimeoutSync('3. 3초 후에 실행됩니다.', 1000);
    console.log('4. 비동기 처리가 완료되었습니다.');
}

setTimeoutAsync();

// 고차함수
function execute(func, arg) {
    console.log(func);
    func(arg);
}

function func(arg) {
    console.log(arg);
}

execute(func, 'Hello, World!');

// 함수를 반환하는 고차함수

function returnFunction() {
    return function (arg) {
        return arg * 3;
    };
}

const threeTimes = returnFunction();

console.log(threeTimes(3));

// callback 함수를 사용하는 이유
// 1. 코드의 재사용성
// 2. 비동기 처리를 위한 callback 함수
// 3. 동기 처리를 위한 callback 함수
// 4. 복잡한 코드를 간결하게 표현할 수 있다.
// 5. 가독성을 높일 수 있다.
// 6. 유지보수를 쉽게 할 수 있다.
// 7. 코드의 품질을 높일 수 있다.
// 8. 에러 처리 & 예외 처리를 쉽게 할 수 있다.

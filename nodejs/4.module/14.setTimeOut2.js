function asynclongTask(callback) {
    setTimeout(() => {
        const randomNum = Math.random();
        if (randomNum > 0.5) {
            callback(null, '작업 완료');
        } else {
            callback('작업 실패', null);
        }
    }, 3000); // 3초 후에 콜백 함수를 호출
}

// function displayResult() {
//     console.log('작업 완료');
// }

asynclongTask((error, result) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log(result);
});

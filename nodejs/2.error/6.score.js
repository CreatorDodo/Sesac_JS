// 직접 필요한 곳에 try-catch 문을 사용하여 에러를 처리

const score = [10, 20, 'invalid', 40, 50];
let sum = 0;

try {
    // 학생 시험 점수 합산 계산
    for (let i = 0; i < score.length; i++) {
        sum += score[i];
    }

    if (typeof sum !== 'number') {
        throw new Error(`숫자가 아닌 값이 포함되어 있습니다. sum: ${sum}`);
    } else {
        console.log(sum); // 120
    }
} catch (error) {
    console.log('에러 발생:', error.message);
}

try {
    // 학생 시험 점수 평균 계산
    const average = sum / score.length;

    if (isNaN(average)) {
        throw new Error(
            `숫자가 아닌 값이 입력되어 있습니다. average: ${average}, sum: ${sum}`,
        );
    } else {
        console.log(average); // 30
    }
} catch (error) {
    console.log('에러 발생:', error.message);
}

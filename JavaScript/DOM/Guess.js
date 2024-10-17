// 랜덤 숫자 1~100 생성.
const number = Math.floor(Math.random() * 100) + 1;

// 사용자가 입력한 숫자와 랜덤 숫자 비교.
const button = document.getElementById('submitBtn');
const input = document.getElementById('guessInput');
const result = document.getElementById('result');
const history = document.getElementById('history');

button.onclick = () => {
    const guess = parseInt(input.value);

    if (guess == number) {
        result.textContent = 'Correct';
    } else if (guess > number) {
        result.textContent = 'Too High';
    } else {
        result.textContent = 'Too Low';
    }

    // 사용자의 입력값에 대한 로그 출력.
    history.innerHTML += `<div>${guess}</div>`;
};

// 사용자 입장에서 최소한으로 문제를 푸는 기법(이진 탐색).
// 1. 1~100 중에서 중간값인 50을 추측.
// 2. 50이 정답보다 크면 50보다 작은 수로 추측.
// 3. 50이 정답보다 작으면 50보다 큰 수로 추측.
// 4. 1~100 중에서 중간값인 25를 추측.
// 5. 25가 정답보다 크면 25보다 작은 수로 추측.
// 6. 25가 정답보다 작으면 25보다 큰 수로 추측.

import process from 'process';
import readline from 'readline';

const guessNumber = (number, random, count) => {
    count += 1;
    if (number > random) {
        return { message: '더 작은 수를 입력하세요.', count };
    } else if (number < random) {
        return { message: '더 큰 수를 입력하세요.', count };
    } else {
        return { message: `정답입니다. ${count}번만에 맞추셨습니다.`, count };
    }
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const random = Math.floor(Math.random() * 100) + 1;
let count = 0;

const askQuestion = () => {
    rl.question('1부터 100 사이의 숫자를 맞춰보세요 : ', (answer) => {
        const number = parseInt(answer, 10); // 문자열을 숫자로 변환(10진수)
        const result = guessNumber(number, random, count);
        count = result.count;
        console.log(result.message);

        if (number === random) {
            rl.close();
        } else {
            askQuestion();
        }
    });
};

askQuestion();

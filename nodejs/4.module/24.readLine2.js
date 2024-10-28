import readline from 'readline';
import process from 'process';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('입력값 받기 전');

function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            // console.log(`입력값 : ${answer}`);
            resolve(answer);
        });
    });
}

// askQuestion('원하는 값을 입력하세요 : ')
//     .then((answer) => {
//         console.log(`입력받은 값 : ${answer}`);
//         return askQuestion('다시 입력하세요 : ');
//     })
//     .then((answer) => {
//         console.log(`다시 입력받은 값 : ${answer}`);
//         return askQuestion('마지막으로 입력하세요 : ');
//     })
//     .then((answer) => {
//         console.log(`마지막으로 입력받은 값 : ${answer}`);
//     })
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log('프로그램 종료');
//         rl.close();
//     });

// async/await

async function askQuestions() {
    try {
        const answer1 = await askQuestion('입력값1 : ');
        console.log(`첫 번째 입력값 : ${answer1}`);
        const answer2 = await askQuestion('입력값2 : ');
        console.log(`두 번째 입력값 : ${answer2}`);
        const answer3 = await askQuestion('입력값3 : ');
        console.log(`세 번째 입력값 : ${answer3}`);
    } catch (error) {
        console.error(error);
    } finally {
        console.log('프로그램 종료');
        rl.close();
    }
}

askQuestions();

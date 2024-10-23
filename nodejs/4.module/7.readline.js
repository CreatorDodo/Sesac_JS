// import { error } from 'console';
import readline from 'readline';
// import fs from 'fs';
import process from 'process';

// const rl = readline.createInterface({
//     input: fs.createReadStream('./nodejs/4.module/hello.txt'),
//     output: process.stdout,
//     terminal: false,
// });

// rl.on('line', function (line, lineCount, byteCount) {
//     console.log(line, lineCount, byteCount);
// }).on(error, (err) => {
//     console.error(err);
// });

// 입출력을 위한 인터페이스를 생성합니다.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('구구단 입력하시오.', (answer) => {
    console.log(`${answer}을 입력하셨습니다.`);

    // 구구단 출력
    switch (answer) {
        case '1':
            for (let i = 1; i < 10; i++) {
                console.log(`${answer} * ${i} = ${answer * i}`);
            }
            break;
        case '2':
            for (let i = 1; i < 10; i++) {
                console.log(`${answer} * ${i} = ${answer * i}`);
            }
            break;
        case '3':
            for (let i = 1; i < 10; i++) {
                console.log(`${answer} * ${i} = ${answer * i}`);
            }
            break;
        case '4':
            for (let i = 1; i < 10; i++) {
                console.log(`${answer} * ${i} = ${answer * i}`);
            }
            break;
        case '5':
            for (let i = 1; i < 10; i++) {
                console.log(`${answer} * ${i} = ${answer * i}`);
            }
            break;
        case '6':
            for (let i = 1; i < 10; i++) {
                console.log(`${answer} * ${i} = ${answer * i}`);
            }
            break;
        case '7':
            for (let i = 1; i < 10; i++) {
                console.log(`${answer} * ${i} = ${answer * i}`);
            }
            break;
        case '8':
            for (let i = 1; i < 10; i++) {
                console.log(`${answer} * ${i} = ${answer * i}`);
            }
            break;
        case '9':
            for (let i = 1; i < 10; i++) {
                console.log(`${answer} * ${i} = ${answer * i}`);
            }
            break;
        default:
            console.log('1 ~ 9 사이의 숫자를 입력하세요.');
            break;
    }
    rl.close();
});

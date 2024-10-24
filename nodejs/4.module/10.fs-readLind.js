// // 샘플 데이터 배열
// const data = [
//     { 이름: '홍길동', 나이: 30, 이메일: 'hong.gildong@example.com' },
//     { 이름: '김철수', 나이: 25, 이메일: 'kim.cheolsu@example.com' },
//     { 이름: '이영희', 나이: 40, 이메일: 'lee.yeonghee@example.com' },
// ];

// fs 모듈 로드
import fs from 'fs';

// function csv_write(data, file) {
//     // CSV 파일로 출력
//     const csv = data.map((v) => Object.values(v).join(',')).join('\n');
//     // fs.writeFileSync(file, csv);
//     fs.writeFile(file, csv, (err) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log('저장이 완료되었습니다.');
//     });
// }

// csv_write(data, 'data.csv');

function csv_read(file) {
    // CSV 파일 읽기
    // const csv = fs.readFileSync(file, 'utf-8');
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}

csv_read('data.csv');

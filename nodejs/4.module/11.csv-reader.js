// import 모듈 로드 순서
// 1. built-in 모듈 로드
// 2. 외부 모듈 로드
// 3. 내부 모듈 로드
import fs from 'fs'; // built-in 모듈 fs 로드 > node.js API 제공
import csv from 'csv-parser'; // 외부 모듈 로드 > npm docs 참조
import csvWriter from 'csv-writer';

const data = [];

fs.createReadStream('data.csv')
    // pipe() 함수로 csv-parser 모듈을 사용하여 데이터를 읽음
    .pipe(csv())
    .on('data', (row) => {
        // 데이터를 스트림으로 읽어옴
        data.push(row);
    })
    .on('end', () => {
        // 데이터 읽기가 끝나면 출력
        console.log(data);
    });

// csv-writer 모듈을 사용하여 CSV 파일로 출력
const writer = csvWriter.createObjectCsvWriter({
    path: 'example.csv',
    header: [
        { id: 'name', title: '이름' },
        { id: 'age', title: '나이' },
        { id: 'email', title: '이메일' },
    ],
});

const records = [
    { name: '홍길동', age: 30, email: 'hong@naver.com' },
    { name: '김철수', age: 25, email: 'kim@naver.com' },
    { name: '이영희', age: 40, email: 'Lee@naver.com' },
];

writer.writeRecords(records).then(() => {
    console.log('저장이 완료되었습니다.');
});

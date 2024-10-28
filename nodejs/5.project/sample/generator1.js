import writeCsv from '../csv_writer.js';

const firstNames = ['박', '이', '김', '최', '정', '한', '지', '임', '조', '윤'];
const lastNames = [
    '민준',
    '서준',
    '예준',
    '도윤',
    '시우',
    '주원',
    '하준',
    '지호',
    '지후',
    '준우',
];

const city = [
    '서울',
    '부산',
    '대구',
    '인천',
    '대전',
    '광주',
    '울산',
    '세종',
    '경기',
    '강원',
    '충북',
    '충남',
    '전북',
    '전남',
    '경북',
    '경남',
    '제주',
];
const dong = [
    '역삼동',
    '삼성동',
    '대치동',
    '논현동',
    '신사동',
    '압구정동',
    '청담동',
    '개포동',
    '도곡동',
    '일원동',
    '세곡동',
    '수서동',
    '도봉동',
    '방학동',
    '쌍문동',
    '창동',
    '녹번동',
    '번동',
    '수유동',
    '미아동',
    '우이동',
    '신내동',
    '성북',
];

function generateNames() {
    // return names[Math.floor(Math.random() * names.length)];
    return (
        firstNames[Math.floor(Math.random() * firstNames.length)] +
        lastNames[Math.floor(Math.random() * lastNames.length)]
    );
}

// console.log(generateNames());

function generateGender() {
    return Math.random() < 0.5 ? '남자' : '여자';
}

// for (let i = 0; i < 10; i++) {
//     console.log(generateNames(), generateGender());
// }

function generateBirthdate() {
    const year = 2024 - Math.floor(Math.random() * 100);
    const month = Math.floor(Math.random() * 12) + 1;
    const date = Math.floor(Math.random() * 28) + 1;
    return `${year}년 ${month}월 ${date}일`;
}

// for (let i = 0; i < 10; i++) {
//     console.log(generateNames(), generateGender(), generateBirthdate());
// }

function generateAddress() {
    const cityIndex = Math.floor(Math.random() * city.length);
    const dongIndex = Math.floor(Math.random() * dong.length);
    return `${city[cityIndex]} ${dong[dongIndex]}`;
}

// for (let i = 0; i < 10; i++) {
//     console.log(
//         generateNames(),
//         generateGender(),
//         generateBirthdate(),
//         generateAddress(),
//     );
// }

// csv 파일로 저장하기
const userCount = 1000;

const data = [];
for (let i = 0; i < userCount; i++) {
    data.push([
        generateNames(),
        generateGender(),
        generateBirthdate(),
        generateAddress(),
    ]);
}

writeCsv('users.csv', data);

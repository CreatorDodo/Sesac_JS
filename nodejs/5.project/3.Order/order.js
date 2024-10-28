// user.csv와 store.csv 파일의 id를 기반으로 주문을 생성.
// 주문 데이터 생성
import writeCsv from '../CSV/csv_writer.js';
import readCsv from '../CSV/csv_reader.js';
import generateUUID from '../Generater/generateUUID.js';

const userCsv = readCsv('user.csv');
const storeCsv = readCsv('store.csv');

const orderCount = 10000;

const data = [['Id', 'OrderAt', 'StoreId', 'UserId']];

for (let i = 0; i < orderCount; i++) {
    // 랜덤 주문 시간 생성
    // YYYY-MM-DD HH:MM:SS 형식으로 변환
    // toISOString()를 이용하여 현재 시간을 문자열로 변환
    // ISOString은 UTC시간을 기준으로 표시
    // 2000 ~ 2024년 사이의 날짜를 생성
    const orderAt = new Date(
        Math.floor(Math.random() * (2024 - 2000 + 1)) + 2000,
        Math.floor(Math.random() * 12) + 1,
        Math.floor(Math.random() * 28) + 1,
        Math.floor(Math.random() * 24),
        Math.floor(Math.random() * 60),
        Math.floor(Math.random() * 60),
    )
        .toISOString()
        .replace('T', ' ')
        .replace('Z', '')
        .replace('.000', '');
    const userId = userCsv[Math.floor(Math.random() * userCsv.length)].Id;
    const storeId = storeCsv[Math.floor(Math.random() * storeCsv.length)].Id;
    data.push([generateUUID(), orderAt, storeId, userId]);
}

writeCsv('order.csv', data);

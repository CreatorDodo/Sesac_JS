// order.csv 와 item.csv를 기반으로 주문 상품을 생성.
// 주문 데이터 생성
import writeCsv from '../CSV/csv_writer.js';
import readCsv from '../CSV/csv_reader.js';
import generateUUID from '../Generater/generateUUID.js';

const orderCsv = readCsv('order.csv');
const itemCsv = readCsv('item.csv');

const orderCount = 50000;

const data = [['Id', 'OrderId', 'ItemId']];

for (let i = 0; i < orderCount; i++) {
    const orderId = orderCsv[Math.floor(Math.random() * orderCsv.length)].Id;
    const itemId = itemCsv[Math.floor(Math.random() * itemCsv.length)].Id;
    data.push([generateUUID(), orderId, itemId]);
}

writeCsv('orderitem.csv', data);

import writeCsv from '../CSV/csv_writer.js';
import {
    generateUUID,
    generateCafe,
    generateAddress,
} from '../Generater/index.js';

const storeCount = 100;
const data = [['Id', 'Name', 'Type', 'Address']];

for (let i = 0; i < storeCount; i++) {
    const cafe = generateCafe();
    data.push([
        generateUUID(),
        cafe.cafeFullName,
        cafe.randomCafe,
        generateAddress(),
    ]);
}

writeCsv('store.csv', data);

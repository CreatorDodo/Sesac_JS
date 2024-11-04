import writeCsv from '../CSV/csv_writer.js';
import {
    generateUUID,
    generateFood,
    generatePrice,
} from '../Generater/index.js';

const userCount = 20;
const data = [['Id', 'Name', 'Type', 'UnitPrice']];

for (let i = 0; i < userCount; i++) {
    const food = generateFood();
    data.push([generateUUID(), food.foodName, food.foodType, generatePrice()]);
}

writeCsv('item.csv', data);

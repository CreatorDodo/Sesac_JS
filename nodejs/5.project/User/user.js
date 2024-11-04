import writeCsv from '../CSV/csv_writer.js';
import {
    generateUUID,
    generateNames,
    generateGender,
    generateAge,
    generateBirthdate,
    generateAddress,
} from '../Generater/index.js';

const userCount = 1000;
const data = [['Id', 'Name', 'Gender', 'Age', 'Birthdate', 'Address']];

for (let i = 0; i < userCount; i++) {
    data.push([
        generateUUID(),
        generateNames(),
        generateGender(),
        generateAge(),
        generateBirthdate(),
        generateAddress(),
    ]);
}

writeCsv('user.csv', data);

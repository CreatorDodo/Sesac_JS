//csv_reader.js
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

function readCsv(filename) {
    const csv = fs.readFileSync(path.join(__dirname, filename), 'utf-8');
    const rows = csv.split('\n').map((v) => v.trim());
    const keys = rows[0].split(',');
    return rows.slice(1).map((v) => {
        const values = v.split(',');
        // reduce()를 이용하여 acc 객체에 key와 value를 할당
        // ex. keys = ['Id', 'Name'], values = ['1', 'John']
        return keys.reduce((acc, key, i) => {
            acc[key] = values[i];
            return acc;
        }, {});
    });
}

export default readCsv;

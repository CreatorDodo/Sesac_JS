// csv_writer.js
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve(); // 현재 디렉토리 경로

function writeCsv(filename, data) {
    const csv = data.map((v) => v.join(',')).join('\n');
    fs.writeFileSync(path.join(__dirname, filename), csv);
    console.log('writeCsv done');
}

export default writeCsv;

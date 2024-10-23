import fs from 'fs';
import path from 'path';

const __dirname = './nodejs/';

let filePath = path.join(__dirname, '5.module');

// 파일 디렉토리를 읽어온다
fs.readdir(filePath, (err, files) => {
    if (err) {
        throw err;
    }
    console.log(files);

    console.log(files[0]);

    filePath = path.join(__dirname, '5.module', files[0]);

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data);
    });
});

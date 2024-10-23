import fs from 'fs';

// 파일 디렉토리를 읽어온다
fs.readdir('./nodejs/5.module', (err, files) => {
    if (err) {
        throw err;
    }
    console.log(files);

    console.log(files[0]);

    fs.readFile(`./nodejs/5.module/${files[0]}`, 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data);
    });
});

import fs from 'fs';

const path = './nodejs/4.module/';

fs.readdir(path, 'utf-8', (err, files) => {
    if (err) {
        throw err;
    }
    files.forEach((file) => {
        fs.stat(`${path}${file}`, (err, stats) => {
            if (err) {
                throw err;
            }

            if (stats.isFile()) {
                console.log(`${file} is file.`);
            }
            if (stats.isDirectory()) {
                console.log(`${file} is directory.`);
            }
        });
    });

    console.log(files);
});

const statSync = fs.statSync('./nodejs/4.module/6.fsStat.js');
console.log(statSync.isFile());

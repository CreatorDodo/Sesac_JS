import fs from 'fs';
// import path from 'path';

const __dirname = '.';

// let filePath = '.';

// function checkFile(filePath) {
//     fs.stat(filePath, (err, stats) => {
//         if (err) {
//             console.log('디렉토리 읽기 에러', filePath);
//             throw err;
//         }

//         if (stats.isFile()) {
//             console.log('It is a file');
//         } else if (stats.isDirectory()) {
//             console.log('It is a directory');
//         } else {
//             console.log('It is a unknown file type');
//         }
//     });
// }

// // 파일 디렉토리를 읽어온다(readdir)
// fs.readdir(filePath, (err, files) => {
//     if (err) {
//         console.log('디렉토리 읽기 에러', filePath);
//         throw err;
//     }

//     for (const file of files) {
//         filePath = path.join(__dirname, file);
//         console.log('파일 :', filePath);
//         checkFile(filePath);
//     }
// });

// readdirSync : 동기적으로 파일을 읽어온다

function checkFileSync(filePath) {
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
        console.log('It is a file');
    } else if (stats.isDirectory()) {
        console.log('It is a directory');
    } else {
        console.log('It is a unknown file type');
    }
}

fs.readdirSync(__dirname).forEach((file) => {
    console.log('파일 :', file);
    checkFileSync(file);
});

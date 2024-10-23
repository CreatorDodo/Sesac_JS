import fs from 'fs';
// import path from 'path';

// const filePath = path.join(__dirname, 'hello.txt');

// // 파일을 읽어온다(비동기)
// fs.readFile('./nodejs/5.module/hello.txt', 'utf-8', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data);
//     console.log(data.toString());
// });

// // 파일을 쓴다(비동기)
// fs.writeFile(
//     './nodejs/5.module/newFile.txt',
//     'Hello from Node.js',
//     'utf-8',
//     (err) => {
//         if (err) {
//             // throw err;
//         }
//         console.log('File written');
//     },
// );

// 파일을 읽어온다(동기)
const fileRead = fs.readFileSync('./nodejs/5.module/hello.txt', 'utf-8');
console.log(fileRead);

// // 파일을 쓴다(동기)
// fs.writeFileSync(
//     './nodejs/5.module/newFile2.txt',
//     'Hello from Node.js',
//     'utf-8',
// );

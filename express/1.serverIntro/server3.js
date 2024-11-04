import http from 'http';
import fs from 'fs';

// fs 의 콜백기반의 비동기 메서드를 프로미스 기반으로 변경
// 일종의 status를 반납받아서, await을 통해 대기(동기)하고, 에러처리를 한번에 할 수 있음
// 프로미스를 사용하는 이유는 콜백 지옥을 방지하기 위함
function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

http.createServer(async (req, res) => {
    try {
        const data = await readFilePromise('./server3.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    } catch (err) {
        console.error(err);
        // text/plain : 일반 문자열
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('알 수 없는 에러 발생');
    }
});

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//     // 파일의 컨텐츠를 읽어와서 응답으로 보내는 방법
//     fs.readFile('./server3.html', (err, data) => {
//         if (err) {
//             // throw err;
//             res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
//             res.end(`오류 발생 : ${err.message}`);
//         }
//         // res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//         res.end(data);
//     });
// }).listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });

// node.js 라는 애플리케이션이 운영체제와 통신하기 위한 모듈이다.
import http from 'http';
import readline from 'readline';
import process from 'process';

const server = http.createServer();

// server.listen(3000); // 서버를 3000번 포트로 실행

server.on('connection', () => {
    console.log('클라이언트가 접속했습니다.');
});

server.on('request', (req, res) => {
    // console.log('클라이언트 요청이 들어왔습니다', req);
    // console.log('req method:', req.method);
    // console.log('req url:', req.url);
    // console.log('req headers:', req.headers);
    // console.log(`req headers: ${req.headers}`);
    // console.log(`req headers: ${JSON.stringify(req.headers)}`);
    // console.log('req headers[user-agent]:', req.headers['user-agent']);
    // console.log('req headers[cookie]:', req.headers['cookie']);
    // console.log('req headers[content-type]:', req.headers['content-type']);
    // console.log('req.socket.remoteAddress:', req.socket.remoteAddress);
    // res.write('<h1>Hello Node!</h1>');
    // res.end('<h1>hi~!</h1>');

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello Node!</h1>');
    res.write('<h1>Hello Node!</h1>');
    res.end('<h1>hi~!</h1>');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

server.on('close', () => {
    console.log('서버가 종료됩니다.');
});

// 우리 서버를 10초 뒤에 종료
setTimeout(() => {
    console.log('10초 후 서버 종료 시도');
    server.close();
}, 10000);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    if (input === 'q') {
        server.close();
        rl.close();
    }
});

console.log('서버 프로그램이 실행되었습니다.');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// });

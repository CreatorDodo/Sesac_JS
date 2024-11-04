import http from 'http';

/****************************************/

// const server = http.createServer();
// server.on('request', (req, res) => {
//     res.writeHead(401);
//     // res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//     res.end('Hello Node!');
// });

/****************************************/

// const server = http.createServer((req, res) => {
//     // res.writeHead(401);
//     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//     res.end('<h1>Hello Node!</h1>');
// });

// server.listen(5000, () => {
//     console.log('Server running at http://localhost:5000/');
// });

/****************************************/

// const server = http
//     .createServer((req, res) => {
//         // res.writeHead(401);
//         res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//         res.end('<h1>Hello Node!</h1>');
//     })
//     .listen(5000, () => {
//         console.log('Server running at http://localhost:5000/');
//     });

/****************************************/

http.createServer((req, res) => {
    // res.writeHead(401);
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // res.write: 응답 본문을 작성
    // res.end: 응답 본문을 작성하고 응답을 종료
    res.end('<h1>Hello Node!</h1>');
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

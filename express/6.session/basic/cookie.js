import http from 'http';

const server = http.createServer((req, res) => {
    console.log(req.url, req.headers);
    res.writeHead(200, { 'set-cookie': 'mycookie=test' });
    res.end('Hello Node.js');
});

server.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

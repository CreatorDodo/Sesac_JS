import express from 'express';
import fs from 'fs';
// import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// __filename : 현재 실행중인 스크립트 파일의 경로
const __filename = fileURLToPath(import.meta.url);
// __dirname : 현재 실행중인 스크립트 파일의 디렉토리 경로
const __dirname = path.dirname(__filename);
// 정적 폴더 정의
app.use(express.static('public'));

app.get('/', async (req, res) => {
    // app.get('/', (req, res) => {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const htmlfiledata = path.join(__dirname, 'public', 'index.html');

    try {
        const data = fs.readFile(htmlfiledata, 'utf8');
        // MIME 이란 무엇인가? : https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types
        res.setHeader('Content-Type', 'text/html'); // MIME Type 설정 : text/html
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }

    // res.send(`
    //     <html>
    //     <head><title>Static</title></head>
    //     <body>
    //         <h1>Static</h1>
    //         <img src="./images/universe_image_1.png" />
    //     </html>
    //     `);
});

app.get('/sendfile', (req, res) => {
    // const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const htmlfile = path.join(__dirname, 'public', 'index.html');
    // res.sendFile(htmlfile);

    res.sendFile(htmlfile, (err) => {
        if (err) {
            console.error(err);
            // res.status(500).send('Internal Server Error');
            // next(new Error('Error'));
        }
    });
});

app.use((req, res) => {
    res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

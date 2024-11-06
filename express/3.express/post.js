import express from 'express';

const app = express();
const port = 3000;

// 이 미들웨어가 JSON 데이터를 파싱하도록 설정
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/submit', (req, res) => {
    let data = '';

    req.on('data', (chunk) => {
        data += chunk;
    });
    req.on('end', () => {
        try {
            const jsonData = JSON.parse(data);
            res.json({ receivedData: jsonData });
        } catch (err) {
            console.error(err);
            res.status(400).json({ err: 'Invalid data' });
        }
    });
});

app.post('/submit2', (req, res) => {
    const jsonData = req.body;
    res.json({ receivedData: jsonData });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

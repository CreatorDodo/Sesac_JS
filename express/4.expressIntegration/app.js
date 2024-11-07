// 외부 모듈 import
import express from 'express';
import path from 'path';

// 변수 정의
const app = express();
const port = 3000;
const __dirname = path.resolve(); // 절대 경로
const users = [];

// 미들웨어
app.use(
    '/static',
    express.static(
        path.join(__dirname, 'express', '4.expressIntegration', 'static'),
    ),
); // 정적 파일 제공
app.use(
    '/img',
    express.static(
        path.join(
            __dirname,
            'express',
            '4.expressIntegration',
            'static',
            'img',
        ),
    ),
);
app.use(express.json());

// 라우트
app.get('/', (req, res) => {
    res.sendFile(
        path.resolve(
            __dirname,
            'express',
            '4.expressIntegration',
            'index.html',
        ),
    );
});

app.get('/about', (req, res) => {
    // res.sendFile(path.relative(__dirname, 'about.html'));
    res.sendFile(
        path.join(__dirname, 'express', '4.expressIntegration', 'about.html'),
    );
});

app.get('/users', (req, res) => {
    // res.type('application/json');
    res.json(users);
});

app.post('/users', (req, res) => {
    // // const name = req.body.name;
    // const { name } = req.body;
    try {
        const parsedData = req.body;
        parsedData.id = Date.now().toString(); // 임시 id
        users.push(parsedData);
        res.status(200).json(parsedData);
    } catch (err) {
        console.error(err);
        res.status(500).send('500 Internal Server Error');
    }
});

app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        const parsedData = req.body;
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...parsedData };
            res.status(200).json(parsedData);
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('500 Internal Server Error');
    }
});

app.delete('/users/:id', (req, res) => {
    console.log(req);
    const id = req.params.id;
    console.log(id);
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(200).json({ message: 'User deleted' });
        // res.status(204).send();
    } else {
        res.status(404).send('User not found');
    }
});

// 오류 미들웨어
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _) => {
    console.error('에러발생: ', err.message);
    res.status(500).sendFile(
        path.join(__dirname, 'express', '4.expressIntegration', '500.html'),
    );
});

// 404 핸들러
app.use((req, res) => {
    res.status(404).sendFile(
        path.join(__dirname, 'express', '4.expressIntegration', '404.html'),
    );
});

// 서버 실행
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

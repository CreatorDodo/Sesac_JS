import express from 'express';

const app = express();
const port = 3000;

function requestTime(req, res, next) {
    req.requestTime = Date.now();
    next();
}

function myLogger(req, res, next) {
    const formattedTime = new Date(req.requestTime).toISOString();
    console.log(`LOGGED: ${req.method}, ${req.url}, ${formattedTime}`);
    next();
}

app.use(requestTime);
app.use(myLogger);

app.get('/', (req, res) => {
    const timeString = new Date(req.requestTime).toISOString();
    res.send(`request time: ${timeString}`);
});

function myMiddleWare1(req, res, next) {
    console.log('middleware1');
    next();
}

function myMiddleWare2(req, res, next) {
    console.log('middleware2');
    next();
}

app.get('/about', myMiddleWare1, myMiddleWare2, (req, res) => {
    res.send('user page');
});

app.get('/err', (req, res, next) => {
    // throw new Error('에러 발생');
    next(new Error('에러 발생'));
});

// // 에러 처리용 미들웨어 추가 - 가장 마지막에 추가해야 한다.
// app.use((err, req, res, next) => {
//     console.error('에러발생: ', err.message);
//     res.status(500).json({ message: '서버 내부 오류' });
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

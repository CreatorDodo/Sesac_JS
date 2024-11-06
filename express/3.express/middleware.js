import express from 'express';

const app = express();
const port = 3000;

function myLogger(req, res, next) {
    // console.log('보안 검사중...');
    console.log(`LOGGED: ${req.method}, ${req.url}`);
    next();
}

function mySecurity(req, res) {
    console.log('1번째 함수');
    // console.log(`request time1: ${req.requestTime}`);
    // req.requestTime = Date.now();
    // console.log(`request time2: ${req.requestTime}`);
    req.requestTime = Date.now();
    const timeString = new Date(req.requestTime).toISOString();
    res.send(`request time: ${timeString}`);
    // next();
}

function myAuth(req, res, next) {
    console.log('2번째 함수');
    console.log(`request time3: ${req.requestTime}`);
    next();
}

// 미들웨어 함수를 사용하여 요청과 응답 사이에 로깅을 추가합니다.
app.use(myLogger);
app.use(mySecurity);
app.use(myAuth);

// app.use('/static', express.static(path.join(__dirname, 'static')));
// app.use('/img', express.static(path.join(__dirname, 'static', 'img')));
// app.use(express.json());

app.use((req, res, next) => {
    console.log('3번째 함수');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

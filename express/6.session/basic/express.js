import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
    // 클라이언트에서 쿠키를 보낸다.
    res.cookie('mycookie', 'test', {
        maxAge: 60000, // 60초
    });
    res.cookie('username', 'user1', {
        maxAge: 30000,
    });
    res.cookie('cart', ['사과', '딸기', '바나나'], {
        maxAge: 10000,
    });
    res.send('쿠키를 설정했습니다.');
});

app.get('/readcookie', (req, res) => {
    // 클라이언트에서 쿠키를 받는다.
    const mycookie = req.cookies;
    console.log(mycookie);
    res.send(`쿠키: ${JSON.stringify(mycookie)}`);
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

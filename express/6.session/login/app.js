import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
];

app.use(
    session({
        secret: 'mySecret', // 내 메모리에 저장되는 세션 ID를 암호화하기 위한 키
        resave: false, // 세션 데이터가 바뀌기 전까지는 세션 저장소에 값을 저장하지 않음
        saveUninitialized: true, // 세션이 필요하기 전까지는 세션을 구동시키지 않음
        cookie: {
            secure: false, // https를 통해만 세션을 전송할지 여부
            maxAge: 1000 * 60 * 60, // 세션의 유효시간
        },
    }),
);
app.use(express.json());
// urlencoded 미들웨어는 폼 데이터를 파싱하기 위해 사용
// extended: true 옵션은 중첩된 객체 표현을 허용
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// 인증 미들웨어
function isAuthenticated(req, res, next) {
    if (req.session.username) {
        next();
    } else {
        res.status(401).send('인증 필요');
    }
}
// app.get('/protected', isAuthenticated, (req, res) => {
//     res.status(200).send('Protected resource');
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/login', (req, res) => {
    // 로그인 코드 개발

    const { username, password } = req.body;
    console.log(username, password);
    const user = users.find(
        (user) => user.username === username && user.password === password,
    );

    if (user) {
        req.session.username = username;
        res.status(200).json({ message: 'Login success' });
    } else {
        res.status(401).json({ message: 'Login failed' });
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(500).json({ message: 'Logout failed' });
        } else {
            res.status(200).json({ message: 'Logout success' });
        }
    });
});

app.get('/profile', isAuthenticated, (req, res) => {
    // const username = users.find(
    //     (user) => user.username === req.session.username,
    // );
    // if (username) {
    //     res.status(200).json({
    //         username: username.username,
    //         message: '사용자 정보입니다.',
    //     });
    // } else {
    //     res.status(401).json({ message: 'Unauthorized' });
    // }

    //  세션 유효시간 지나서 로그아웃되는 것 방지하기.
    req.session.touch(); // 세션 유효시간을 연장하는 코드
    res.status(200).json({
        username: req.session.username,
        message: '사용자 정보입니다.',
    });
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

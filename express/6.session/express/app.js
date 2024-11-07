import express from 'express';
import session from 'express-session';
import path from 'path';

const app = express();
const port = 3000;
const __dirname = path.dirname();
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
];

app.use(
    session({
        secret: 'mySecret', // 내 메모리에 저장되는 세션 ID를 암호화하기 위한 키
        resave: false, // 세션 데이터가 바뀌기 전까지는 세션 저장소에 값을 저장하지 않음
        saveUninitialized: true, // 세션이 필요하기 전까지는 세션을 구동시키지 않음
    }),
);

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// app.get('/', (req, res) => {
//     req.session.username = 'user1';
//     req.session.admin = true;

//     // 세션에 저장했지만, 자동으로 set-cookie를 통해서 session ID를 클라이언트에게 전달
//     // 이때, express에서 정한 세션 ID를 암호화해서 전달
//     res.send('Session created');
// });

// app.get('/readsession', (req, res) => {
//     const username = req.session.username;
//     const admin = req.session.admin;
//     const visitCount = req.session.visitCount;

//     if (username && admin) {
//         res.send(
//             `Username: ${username}, Admin: ${admin} Visit Count: ${visitCount}`,
//         );
//     } else {
//         res.send('Session not found');
//     }

//     console.log(`세션 ID: ${req.sessionID}`);
//     console.log(`세션 내용: ${JSON.stringify(req.session)}`);
// });

// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'login.html'));
// }

// app.get('/profile', (req, res) => {
//     res.json({ message:  });
// }

app.post('/login', (req, res) => {
    // 로그인 코드 개발
    const { username, password } = req.body;
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

app.get('/profile', (req, res) => {
    const username = users.find(
        (user) => user.username === req.session.username,
    );

    if (username) {
        res.status(200).json({
            username: username.username,
            message: '사용자 정보입니다.',
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
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

function userCount(req, res, next) {
    // 세션에 방문카운트 변수 있으면 재사용, 없으면 0으로 초기화
    // "||" 연산자를 사용해서 req.session.visitCount가 없으면 0을 할당
    // "||" 연산자는 앞의 값이 false일 때 뒤의 값을 할당
    req.session.visitCount = req.session.visitCount || 0;

    req.session.visitCount++;

    console.log(`User visit: ${req.session.visitCount}`);
    next();
}
app.use(userCount);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

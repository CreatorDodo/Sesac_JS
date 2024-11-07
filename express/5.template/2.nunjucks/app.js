import express from 'express';
import nunjucks from 'nunjucks';

const app = express();
const port = 3000;

// Express의 view engine을 nunjucks로 설정1
// app.set('view engine', 'njk');

// html 파일을 사용하려면 아래와 같이 설정
app.set('view engine', 'html'); // view engine을 html로 설정

// Express의 view engine을 nunjucks로 설정2
nunjucks.configure('views', {
    express: app,

    autoescape: true, // XSS 방지
    // XSS : Cross Site Scripting : 악성 스크립트를 삽입하여 사용자의 정보를 탈취하는 공격
});

app.get('/', (req, res) => {
    // 기본값은 njk 파일을 찾음
    res.render('index', {
        title: 'Nunjucks Template',
        message: 'Hello Nunjucks!',
    });
    // res.render('index.html', {
    //     title: 'Nunjucks Template',
    //     message: 'Hello Nunjucks!',
    // });
});

app.get('/fruits', (req, res) => {
    const fruits = ['apple', 'banana', 'cherry'];
    res.render('fruits', { fruits: fruits });
});

app.get('/greeting', (req, res) => {
    const username = 'Alice';
    // res.render('greeting', { username });
    res.render('greeting', { username: username });
});

app.get('/welcome', (req, res) => {
    const isAdmin = true;
    res.render('welcome', { isAdmin: isAdmin });
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

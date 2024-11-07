import express from 'express';

const app = express();
const port = 3000;

// Express의 view engine을 ejs로 설정
app.set('view engine', 'ejs');

// <%= %> : EJS에서 변수를 출력할 때 사용
// <% %> : EJS에서 자바스크립트 코드를 실행할 때 사용
// <%# %> : EJS에서 주석을 작성할 때 사용

app.get('/', (req, res) => {
    res.render('index', { title: 'EJS Template', message: 'Hello EJS!' });
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

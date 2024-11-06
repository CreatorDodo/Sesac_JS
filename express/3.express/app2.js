import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.send('user page');
});

app.get('/users/:id', (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    res.send(`user page ${req.params.id}`);
});

app.get('/users/:id/profile', (req, res) => {
    console.log(req.params);
    res.send(`사용자 ${req.params.id}의 프로필 페이지`);
});

app.get('/search', (req, res) => {
    const queryparams = req.query;
    console.log(queryparams);
    res.send(
        `검색을 요청한 내용은 ${queryparams.q} 와 최근 ${queryparams.top} 개수 입니다.`,
    );
});

app.listen(port, () => {
    console.log('Server is running on port 3000');
    console.log(`Server is running on port ${port}`);
});

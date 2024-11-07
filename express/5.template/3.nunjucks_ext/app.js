import express from 'express';
import nunjucks from 'nunjucks';

const app = express();
const port = 3000;

// app.set('view engine', 'njk');
app.set('view engine', 'html');

nunjucks.configure('views', {
    express: app,
    autoescape: true,
    // watch: true, // 파일이 변경되면 자동으로 로드
});

app.get('/', (req, res) => {
    const data = {
        title: 'Nunjucks Template Engine',
        content: 'Hello Nunjucks!',
    };
    res.render('main', data);
});

app.get('/user', (req, res) => {
    const data = {
        title: 'user page',
        content: 'Hello user!',
    };
    res.render('user', data);
});

app.get('/product', (req, res) => {
    const data = {
        title: 'product page',
        content: 'Hello product!',
    };
    res.render('product', data);
});

app.get('/page1', (req, res) => {
    const data = {
        title: '상속하는 스타일',
        content: 'page1의 content',
    };
    res.render('page1', data);
});

app.get('/page2', (req, res) => {
    const data = {
        title: '상속하는 스타일',
        content: 'page2의 content',
    };
    res.render('page1', data);
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

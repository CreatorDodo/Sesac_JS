import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.send('<h1>User Page</h1>');
});

app.get('/admin', (req, res) => {
    res.send('<h1>Admin Page</h1>');
});

app.post('/users', (req, res) => {
    res.send('User Page');
});

app.put('/users', (req, res) => {
    res.send('User Page');
});

app.delete('/users', (req, res) => {
    res.send('User Page');
});

app.listen(port, () => {
    console.log('Server is running on port 3000');
    console.log(`Server is running on port ${port}`);
});

export default app;

import express from 'express';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRouter.js';

const app = express();
const port = 3000;

app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/cart', cartRouter);

app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3000;

const products = [
    { id: 1, name: 'Apple', price: 1000 },
    { id: 2, name: 'Banana', price: 1500 },
    { id: 3, name: 'Cherry', price: 2000 },
];

app.use(
    session({
        secret: 'mySecret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
            maxAge: 1000 * 60 * 60,
        },
    }),
);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/cart', (req, res) => {
    const cart = req.session.cart || [];

    // TODO: 카트 항목의 합산 가격도 반환하기
    const total = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    res.json({ cart, total });
});

app.post('/cart/items', (req, res) => {
    const id = Number(req.body.id); // req.params.id 대신 req.body.id 사용
    const product = products.find((product) => product.id === id);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    // 장바구니에 담는 코드 작성
    const cart = req.session.cart || []; // 세션에 cart가 없으면 빈 배열을 할당
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    req.session.cart = cart;

    res.json(cart);
});

app.delete('/cart/items/:id', (req, res) => {
    const id = Number(req.params.id);
    let cart = req.session.cart || [];

    cart = cart.filter((item) => item.id !== id);

    req.session.cart = cart;
    res.json(cart);
});

app.put('/cart/items/:id', (req, res) => {
    const id = Number(req.params.id);
    const { quantity } = req.body;
    const cart = req.session.cart || [];

    const item = cart.find((item) => item.id === id);

    if (!item) {
        return res.status(404).json({ message: 'Item not found in cart' });
    }

    item.quantity = quantity;

    req.session.cart = cart;
    res.json(cart);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

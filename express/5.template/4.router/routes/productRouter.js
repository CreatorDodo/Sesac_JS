import express from 'express';

const router = express.Router();

router.get('/list', (req, res) => {
    res.send('Product list');
});

router.get('/detail', (req, res) => {
    res.send('Product detail');
});

router.get('/:id/details', (req, res) => {
    const productId = req.params.id;
    res.send(`Product details: ${productId}`);
});

export default router;

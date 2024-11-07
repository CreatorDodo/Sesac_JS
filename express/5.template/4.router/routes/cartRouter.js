import express from 'express';

const router = express.Router();

router
    .route('/list')
    .get((req, res) => {
        res.send('Cart list');
    })
    .post((req, res) => {
        res.send('Add cart');
    })
    .put((req, res) => {
        res.send('Update cart');
    })
    .delete((req, res) => {
        res.send('Delete cart');
    });

export default router;

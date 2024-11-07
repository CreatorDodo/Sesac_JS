import express from 'express';

const router = express.Router();

router
    .route('/profile')
    .get((req, res) => {
        res.send('Hello user');
    })
    .post((req, res) => {
        res.send('Add user');
    })
    .put((req, res) => {
        res.send('Update user');
    })
    .delete((req, res) => {
        res.send('Delete user');
    });

export default router;

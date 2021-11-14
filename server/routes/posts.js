const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('posts/new');
})

router.get('/edit/', (req, res) => {
    res.render('posts/edit');
})

router.get('/details', (req, res) => {
    res.render('posts/details');
})

module.exports = router;
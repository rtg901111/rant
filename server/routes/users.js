const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('users/login');
})

router.get('/register', (req, res) => {
    res.render('users/register');
})

router.get('/', (req, res) => {
    res.render('users/profile');
})

module.exports = router;
const express = require('express');
const ejsMate = require('ejs-mate');
const hbs = require('hbs');
const path = require('path');

const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');
const usersRoutes = require('./routes/users');

const app = express();
const port = 8080;

// app.set('view engine', 'html');
// app.engine('html', ejsMate);
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.set('views', path.join(__dirname, 'endpoints'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
})

app.use('/posts', postsRoutes);

app.use('/users', usersRoutes);


app.listen(port, () => {
    console.log(`Listening to Port: ${port}`);
})
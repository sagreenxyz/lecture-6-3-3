require('dotenv').config();
const express = require('express');
const app = express();

app.get('*', (req, res) => {
    res.send('Nice page, not an ugly error');
})

app.get('/search', (req, res) => {
    let item = req.query.term;
    res.send('You searched for: ', item);
})

app.use('/auth', require('./controllers/auth'));

app.listen(process.env.PORT);

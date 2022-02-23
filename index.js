require('dotenv').config();
const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    let item = req.query.term;
    res.send('You searched for: ', item);
})

app.listen(process.env.PORT);

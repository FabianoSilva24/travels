const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.use(bodyParser.urlencoded());

app.get('', (req, res) => {
    res.render('index');
});

app.get('/pacotesDeViagem', (req, res) => {
    res.render('pacotesDeViagem');
});

app.listen(4000, () => {
    console.log('Servidor inicializado')
});
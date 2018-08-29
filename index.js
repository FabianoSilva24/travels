const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
// const travels = require('./data/travels.json');

const app = express();
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.use(bodyParser.urlencoded());

app.get('', (req, res) => {
    res.render('index');
});

app.post('', (req, res) => {
    let string = `Nome: ${req.body.nome} \nEmail: ${req.body.email} \nMensagem: ${req.body.mensagem} \n`;

    fs.writeFile('mensagem.txt', string, {flag: 'a'}, (err) => {
        res.render('obrigado');
    });
});

app.get('/travels', (req, res) => {
    res.render('travels', {'travels': travels});
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
});

app.listen(4000, () => {
    console.log('Servidor inicializado')
});
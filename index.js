const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const PassagensAereas = require('./data/PassagensAereas.json');

const app = express();
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.use(bodyParser.urlencoded());

app.get('', (req, res) => {
    res.render('index');
});

app.post('', (req, res) => {
    req.db.collection('mensagens').insert(req.body, (erro) => {
        console.log(erro);
        res.render('obrigado');
    });
});

app.get('/admin/mensagens', (req, res) => {
    req.db.collection('mensagens').find().toArray((erro, dados) => {
        res.render('admin-mensagens', {'mensagens': dados});
    });
});

app.get('/PassagensAereas', (req, res) => {
    res.render('PassagensAereas');
});

app.listen(4000, () => {
    console.log('Servidor inicializado')
});
const express = require('express');
const bodyParser = require('body-parser');
const expressMongoDb = require('express-mongo-db');
const fs = require('fs');

const app = express();
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.use(bodyParser.urlencoded());
app.use(expressMongoDb('mongodb://localhost/travels'));
app.use(expressMongoDb('mongodb://fabianosilva24:fabiano.jaragua24@hotmail.com:Twdahs100st/travels'))

app.get('', (req, res) => {
    res.render('index');
});

app.get('/londres', (req, res) => {
    res.render('londres');
});
app.get('/cancun', (req, res) => {
    res.render('cancun');
});
app.get('/california', (req, res) => {
    res.render('california');
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

app.post('', (req, res) => {
    let string = `Nome: ${req.body.nome} \nEmail: ${req.body.email} \nMensagem: ${req.body.mensagem} \n`;
});

app.get('/PassagensAereas', (req, res) => { 
    res.render('PassagensAereas');
});

app.listen(process.env.PORT || 4000, () => {
    console.log('Servidor inicializado')
});
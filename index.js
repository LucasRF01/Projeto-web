const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');



app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

//rotas

    app.get('/', function(req, res){
        Post.findAll().then(function(posts){
            res.render('home', {posts: posts})
        })
    })

    app.get('/criar', function(req,res){
        res.render('criar')
    })

    app.post('/add', function(req, res){
        Post.create({
            nome: req.body.nome,
            telefone: req.body.telefone,
            email: req.body.email
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send('erro: '+erro)
        })
    })

    app.get('/editar', function(req,res){
        res.render('editar')
    })

    app.get('/update/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(req,res){
            Post.create({
                id: req.body.id,
                nome: req.body.nome,
                telefone: req.body.telefone,
                email: req.body.email
            })
        })
    })

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send('contato apagado');
        }).catch(function(erro){
            res.send('Contato inexistente');
        })
    })






app.listen(8081, function() {
    console.log("servidor ativo em localhost:8081")
  });

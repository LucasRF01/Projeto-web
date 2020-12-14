const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'contatos da agenda'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'contato enviado para agenda'
    })
});
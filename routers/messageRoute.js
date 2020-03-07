const express = require('express');
const { sendMessage, fetchMessage } = require('../controllers/message/message')
const route = express.Router();



route.post('/', (req, res) => {
    sendMessage(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

route.get('/', (req, res) => {
    fetchMessage(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

module.exports = route
const express = require('express');
const {addLoginFN,deleteLoginFN,fetchLoginFN,putLoginFN} = require('../controllers/authentication/loginController')
const route = express.Router();

route.get('/', (req, res) => {
    fetchLoginFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

route.post('/', (req, res) => {
    addLoginFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

route.put('/', (req, res) => {
    putLoginFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

route.delete('/', (req, res) => {
    deleteLoginFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

module.exports = route
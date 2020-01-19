const express = require('express');
const { addUserFN ,fetchUserFN,putUserFN,deleteUserFN} = require('../controllers/authentication/userController')
const route = express.Router();

route.get('/', (req, res) => {
    fetchUserFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

route.post('/', (req, res) => {
    addUserFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

route.put('/', (req, res) => {
    putUserFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

route.delete('/', (req, res) => {
    deleteUserFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => {res.status(err.statusCode).send(err)}
        );
})

module.exports = route
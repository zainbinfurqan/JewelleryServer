const express = require('express');
const { addProductFN, deleteProductFN, fetchProductFN, putProductFN } = require('../controllers/product/productController')
const { authenticationToken } = require('../utils-funtions/authentication')
const route = express.Router();

route.get('/', (req, res) => {
    fetchProductFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

route.post('/', (req, res) => {
    addProductFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

route.put('/', (req, res) => {
    putProductFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

route.delete('/', (req, res) => {
    deleteProductFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

module.exports = route
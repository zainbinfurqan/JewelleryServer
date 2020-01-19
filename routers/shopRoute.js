const express = require('express');
const { addShopFN, deleteShopFN, fetchShopFN, putShopFN } = require('../controllers/shop/shopController')
const route = express.Router();

route.get('/', (req, res) => {
    fetchShopFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

route.post('/', (req, res) => {
    addShopFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

route.put('/', (req, res) => {
    putShopFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

route.delete('/', (req, res) => {
    deleteShopFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

module.exports = route
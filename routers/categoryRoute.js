const express = require('express');
const { addCategoryFN, fetchCategoryFN, putCategoryFN, deleteCategoryFN } = require('../controllers/category/categoryController')
const route = express.Router();

route.get('/', (req, res) => {
    fetchCategoryFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

route.post('/', (req, res) => {
    addCategoryFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

route.put('/', (req, res) => {
    putCategoryFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

route.delete('/', (req, res) => {
    deleteCategoryFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

module.exports = route
const express = require('express');
const {LoginFN,LogOutFN} = require('../controllers/authentication/loginController')
const route = express.Router();

// route.get('/', (req, res) => {
//     fetchLoginFN(req, res)
//         .then(
//             (success) => res.status(success.statusCode).send(success),
//             (err) => { res.status(err.statusCode).send(err) }
//         );
// })

route.post('/login', (req, res) => {
    LoginFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

route.post('/logout', (req, res) => {
    LogOutFN(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})

// route.delete('/', (req, res) => {
//     deleteLoginFN(req, res)
//         .then(
//             (success) => res.status(success.statusCode).send(success),
//             (err) => { res.status(err.statusCode).send(err) }
//         );
// })

module.exports = route
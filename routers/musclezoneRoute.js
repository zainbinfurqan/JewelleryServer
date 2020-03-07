const express = require('express');
const { getVideos} = require('../controllers/JYM/musclezoneController/musclezoneController')
const route = express.Router();



route.get('/getvideos', (req, res) => {
    getVideos(req, res)
        .then(
            (success) => res.status(success.statusCode).send(success),
            (err) => { res.status(err.statusCode).send(err) }
        );
})
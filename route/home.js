const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');


router.get('/', function (request, response) {
    response.render('index');
});


module.exports = router;
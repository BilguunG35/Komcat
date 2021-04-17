const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');


router.get('/products', function (request, response) {
    conn.query('SELECT * FROM content', function (error, result, fields) {
        if (!error) {
            response.render('products', { contents: result });
        } else {
            console.log(error);
        }
    })
});


module.exports = router;
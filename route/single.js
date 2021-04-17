const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');


router.get('/single/:id', function (request, response) {
    var id = request.params.id;
    conn.query('SELECT * FROM content WHERE id = ?', [id], function (error, result, fields) {
        if (!error) {
            response.render('single', { contents: result[0] });
        } else {
            console.log(error);
        }
    })
});


module.exports = router;
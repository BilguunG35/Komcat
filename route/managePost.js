const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');

router.get('/managePost', function (request, response) {
    conn.query('SELECT * FROM content ', function (error, result, fields) {
        if (!error && request.session.loggedin) {
            response.render('posts/admin', { contents: result });
        } else {
            response.send('Please enter Username and Password!');
        }
    })
});

module.exports = router;

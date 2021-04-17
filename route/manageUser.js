const express = require('express');
const router = express.Router();
const connection = require('../connection/connection');


router.get('/manageUser', function (request, response) {
    connection.query('SELECT * FROM accounts', function (error, res, field) {
        if (!error && request.session.loggedin) {
            response.render('users/index', { users: res });
        } else {
            response.send('Please enter Username and Password!');
        }
    })
});


module.exports = router;
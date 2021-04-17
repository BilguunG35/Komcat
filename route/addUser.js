const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');


router.get('/addUser', function (req, res) {
    res.render('users/create')
});

router.post('/addUser', function (request, response) {
    var firstname = request.body.firstname;
    var lastname = request.body.lastname;
    var username = request.body.username;
    var email = request.body.email;
    var password = request.body.password;

    if (firstname && lastname && username && email && password) {
        conn.query("INSERT INTO accounts (firstname, lastname, username, email, password) VALUES('" + request.body.firstname + "', '" + request.body.lastname + "','" + request.body.username + "', '" + request.body.email + "', '" + request.body.password + "')", function () {
            response.redirect('/manageUser');
        });
    }
});


module.exports = router;
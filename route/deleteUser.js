const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');

router.post('/delete/:id', function (request, response) {
    var id = request.params.id;
    conn.query('DELETE FROM accounts WHERE id = ?', [id], function (error, results, fields) {
        if (!error) {
            response.redirect('/manageUser');
        } else {
            console.log(err);
        }
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');

router.post('/deletePost/:id', function (request, response) {
    var id = request.params.id;
    conn.query('DELETE FROM content WHERE id = ?', [id], function (error, results, fields) {
        if (!error) {
            response.redirect('/managePost');
        } else {
            console.log(err);
        }
    });
});

module.exports = router;
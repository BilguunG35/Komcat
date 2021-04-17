const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');

router.get('/editPost/:id', function (request, response) {
    var id = request.params.id;
    conn.query('SELECT * FROM content WHERE id = ?', [id], function (error, result, fields) {
        if (!error) {
            response.render('posts/edit', { contents: result });
        } else {
            console.error(error);
        }
    })
})

router.post('/editPost/:id', function (request, response) {
    var id = request.params.id;
    var title = request.body.title;
    var highlight = request.body.highlight;
    var body = request.body.body;
    if (request.files !== null) {
        var image = request.files.image;
        var fileName = image.name;
    } else {
        var fileName = request.body.image1
    }
    conn.query('UPDATE content SET title = ?, highlight = ?, body = ?, image = ? WHERE id = ?', [title, highlight, body, fileName, id], function (error, result, fields) {
        if (!error) {
            response.redirect('/managePost');
        } else {
            console.log(error);
        }
    })
})

module.exports = router;
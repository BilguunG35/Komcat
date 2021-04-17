const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');


router.get('/addPost', function (req, res) {
    res.render('posts/create')
});


module.exports = router;
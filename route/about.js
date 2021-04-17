const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');


router.get('/about', function (req, res) {
    res.render('about');
});


module.exports = router;
const express = require('express');
const router = express.Router();
const userData = require('../models/data.js');

router.get('/', function (req, res) {
    res.render('directory', userData);
});

module.exports = router;
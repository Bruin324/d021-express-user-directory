const express = require('express');
const router = express.Router();
const userData = require('../models/data.js');

router.get('/:id', function (req, res) {
    var id = parseInt(req.params.id)
    var singleUser = userData.users.filter(function(obj,index){
        if (obj.id === id) {
            return true;
        } else {
            return false;
        }
    })
  res.render('single', singleUser[0]);
});

module.exports = router;
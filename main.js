const userData = require('./data.js');
const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use('/public', express.static('./public'));
app.get('/directory', function (req, res) {
    res.render('directory', userData);
});

app.get('/:id', function (req, res) {
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

app.listen(3000, function (){
    console.log('app start success')
});

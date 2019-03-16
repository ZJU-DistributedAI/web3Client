var express = require('express');
var router = express.Router();

function completeRes(msg, code){
    var response = {
        msg: msg,
        code: code,
    };
    return JSON.stringify(response);
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Computing client' });
});

module.exports = router;
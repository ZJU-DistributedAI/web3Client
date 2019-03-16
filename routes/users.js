var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;

router.get('/register', function (req, res) {
    res.sendFile( __dirname + "/pages/" + "register.html" );
});

router.get('/login', function (req, res) {
    res.sendFile( __dirname + "/pages/" + "login.html" );
});

router.post('/checklogin', function (req, res) {
    username = req.body.username;
    password = req.body.password;
    userType = req.body.userType;

    if(username === 'dcd' && password === '123456') {
        if(userType == 0) {
            res.end("/dataclient/index");
        }
        if(userType == 1) {
            res.end("/modelclient/index");
        }
        if(userType == 2) {
            res.end("/computingclient/index");
        }
    }
    else {
        res.end("/user/login");
    }
});

router.post('/createwallet', function (req, res) {

});
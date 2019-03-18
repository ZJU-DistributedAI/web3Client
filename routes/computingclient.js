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

router.get('/index', function(req, res, next) {
    res.sendFile( __dirname + "/pages/" + "indexcomputer.html" );
});
router.get('/walletpage', function(req, res, next) {
    res.sendFile( __dirname + "/pages/" + "computingclientwallet.html" );
});
router.get('/trainpage', function(req, res, next) {
    res.sendFile( __dirname + "/pages/" + "computing_train.html" );
});

router.get('/dataaskingpage', function(req, res, next) {
    res.sendFile( __dirname + "/pages/" + "computing_data_ask.html" );
});

router.get('/modelaskingpage', function(req, res, next) {
    res.sendFile( __dirname + "/pages/" + "computing_model_ask.html" );
});



router.post('/uploadfile', function (req, res) {
    var response;
    //todo
    res.end(response);
});

router.post('/adddata', function (req, res) {
    var response;
    var password = req.body.password;
    var from = req.body.from;
    var computingIpfsHash = req.body.computingIpfsHash;

    if(password === undefined || password === ''||
        computingIpfsHash===undefined|| computingIpfsHash===''||
        from ===undefined|| from ==='') {
        response = completeRes("参数不完全", 201);
    }
    else {
        //todo 运算方上传运算资源到区块链

    }
    res.end(response);
});


router.post('/agreerequest', function (req, res) {
    var response;
    var password = req.body.password;
    var from = req.body.from;
    var dataAddress = req.body.dataAddress;
    var modelAddress = req.body.modelAddress;


    if(password === undefined || password === ''||
        dataAddress===undefined|| dataAddress===''||
        modelAddress===undefined|| modelAddress===''||
        from ===undefined|| from ==='') {
        response = completeRes("参数不完全", 201);
    }
    else {
        //todo 运算方的同意交易生成

    }
    res.end(response);
});

router.post('/deletedcomputing', function (req, res) {
    var response;
    var password = req.body.password;
    var from = req.body.from;
    var computinghash = req.body.computinghash;

    if(password === undefined || password === ''||
        computinghash===undefined|| computinghash===''||
        from ===undefined|| from ==='') {
        response = completeRes("参数不完全", 201);
    }
    else {
        //todo 运算方的同意交易生成

    }
    res.end(response);
});

router.post('/trainrequest', function (req, res) {
    var response;
    //todo
    res.end(response);
});

router.post('/train', function (req, res) {
    var response;
    var modelIpfsHash = req.body.modelIpfsHash;
    var dataIpfsHash = req.body.dataIpfsHash;
    var modelAddress = req.body.modelAddress;

    if(modelIpfsHash === undefined || modelIpfsHash === ''||
        dataIpfsHash===undefined|| dataIpfsHash===''||
        modelAddress ===undefined|| modelAddress ==='') {
        response = completeRes("参数不完全", 201);
    }
    else {

        // todo 运算方调用容器后端

    }
    res.end(response);
});

router.post('/uploadencrypteddata', function (req, res) {
    var response;
    //todo
    res.end(response);
});


router.post('/monitordata', function (req, res) {
    var response;
   // todo
    res.end(response);
});

router.post('/monitormodel', function (req, res) {
    var response;
    // todo
    res.end(response);
});

router.post('/getdockerstatus', function (req, res) {
    var response;
    // todo
    res.end(response);
});

module.exports = router;

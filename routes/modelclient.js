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
    res.sendFile( __dirname + "/pages/" + "indexmodel.html" );
});
router.get('/walletpage', function(req, res, next) {
    res.sendFile( __dirname + "/pages/" + "modelclientwallet.html" );
});
router.get('/availabledatapage', function(req, res, next) {
    res.sendFile( __dirname + "/pages/" + "model_available_data.html" );
});


router.post('/uploadfile', function (req, res) {
    var response;
    //todo
    res.end(response);
});

router.post('/askdata', function (req, res) {
    var response;
    var password = req.body.password;
    var from = req.body.from;
    var metaDataInfo = req.body.metaDataInfo;

    if(password === undefined || password === ''||
        metaDataInfo===undefined|| metaDataInfo===''||
        from ===undefined|| from ==='') {
        response = completeRes("参数不完全", 201);
    }
    else {
        //todo

    }
    res.end(response);
});


router.post('/createcontract', function (req, res) {
    var response;
    var password = req.body.password;

    if(password === undefined || password === '') {
        response = completeRes("参数不完全", 201);
    }
    else {
        //todo

    }
    res.end(response);
});

router.post('/uploadmodel', function (req, res) {
    var response;

    var password = req.body.password;
    var from = req.body.from;
    var modelIpfsHash = req.body.modelIpfsHash;
    var contractHash = req.body.contractHash;

    if(password === undefined || password === ''||
        modelIpfsHash===undefined|| modelIpfsHash===''||
        contractHash===undefined|| contractHash===''||
        from ===undefined|| from ==='') {
        response = completeRes("参数不完全", 201);
    }
    else {
        //todo

    }
    res.end(response);
});


router.post('/uploadresult', function (req, res) {
    var response;
    //todo
    res.end(response);
});


router.post('/monitordataclient', function (req, res) {
    var response;

    //todo
    res.end(response);
});

router.post('/monitorparameter', function (req, res) {
    var response;
    var modeladdress = req.body.modeladdress;

    if(modeladdress === undefined || modeladdress === '') {
        response = completeRes("参数不完全", 201);
    }
    else {
        //todo

    }

    res.end(response);
});

module.exports = router;

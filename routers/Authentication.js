var express = require('express')
var router = express.Router()
var Controller  = require('../Controller/Authenticationlogin');
router.get('/login',Controller.login);
router.post('/login',Controller.postlogin);
module.exports = router;

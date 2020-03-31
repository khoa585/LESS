var express = require('express')
var router = express.Router()
var shortid = require('shortid')
var db = require('../db');
var middlewares  = require('../Middleware/Middlewared')
var Controller  = require('../Controller/Controller')
router.get('/cookie', function (req, res,next) {
 res.cookie('a',22);
 res.send("aa")
})
router.get('/product',Controller.product);
router.get('/',Controller.index)
router.get('/search',Controller.search);
router.get('/create',Controller.create);
router.get('/search1',Controller.search1);
router.get('/:id',Controller.find);
router.post('/create', middlewares.middleware1,Controller.createbox);

module.exports = router;
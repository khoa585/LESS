var express = require('express')
var router = express.Router()
var shortid = require('shortid')
var Controller  = require('../Controller/cartcontroller')

router.get('/add/:productedId',Controller.addtocart);
module.exports = router;
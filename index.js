require('dotenv').config();
const express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-demo');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
var cookieParser = require('cookie-parser');
var cart = require('./routers/carts');
var userrouter = require('./routers/router');
var auth = require('./routers/Authentication');
var middlewares1  = require('./Middleware/Middleware.js')
var Sessionmiddleware  = require('./Middleware/Session.Middkeware')
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => res.render('index',{
	name : "Khoa",
}));
app.use(cookieParser('process.env.SESSION'))
app.use(Sessionmiddleware) 
app.use('/user',userrouter)
app.use('/aut',auth)
app.use('/cart',cart);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
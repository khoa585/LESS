var md5 = require('md5');
var db = require('../db');
module.exports.login = (req,res) => res.render('aut/login');
var idGenerator = require('../randomId/randomId');
module.exports.postlogin = function (req, res) {
	var ip = req.headers['x-forwarded-for'];
	console.log(ip);
	var email = req.body.email;
	var password = req.body.password;
  	var user  = db.get('users').find({ email: email }).value();
  	var errors = [];
  	if(!user){
		res.render('aut/login', {
			errors : [
				'user doesn1'
			],
			val : req.body
		});
  		return;
  	}
  	var haspassword = md5(password);
  	if(user.password !== haspassword){
	res.render('aut/login', {
			errors : ['user doesn password'],
			val : req.body
		});
  		return;
  	}
  	 //  const randomId = idGenerator.getRandomId();
    // console.log(randomId);
  	res.cookie('userId',user.id,{
  		signed : true
  	} )
  	res.redirect('/user');
}
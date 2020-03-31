var db = require('../db');
module.exports.requireAuth = function(req,res,next) {
	if(!req.signedCookies.userId){
		res.render('aut/login')
		return;
	}
	var user  = db.get('users').find({ id : req.signedCookies.userId }).value();
	res.locals.user = user;
	if(!user){
		res.render('aut/login')
		return;
	}
	next();
};
var db = require('../db');
module.exports.addtocart = function (req, res,next) {
	var productId = req.params.productedId;
	var sessionId = req.signedCookies.sessionId;
	if(!sessionId){
		res.redirect('/user/product');
		return;
	}
	var count = db.get('Sessions')
		.find({id : sessionId})
		.get('cart.' + productId,0)
		.value();
	db.get('Sessions')
		.find({id : sessionId})
		.set('cart.' + productId,count + 1)
		.write();	
	res.redirect('/user/product');
};


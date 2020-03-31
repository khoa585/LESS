module.exports.middleware1 = function(req,res,next) {
	var errors =[];
	if(!req.body.name){
		errors.push('loi name');
	}
	if(!req.body.phone){
		errors.push('loi phone');
	}
	if(errors.length){
		res.render('Node/create', {
			errors : errors,
			val : req.body
		});
		return;
	}
	next();
};
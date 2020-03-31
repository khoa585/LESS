var db = require('../db');
var shortid = require('shortid');
var pd = require('../models/use.model');
module.exports.index = 
	(req,res) => res.render('Node/index',{
	users : db.get('users').value()
});
module.exports.search = function(req,res) {
	var q =  req.query.q;
	var mathchek =  db.get('users').value().filter(function(index){
		return index.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('Node/index',{
		users :mathchek
	});
}	
module.exports.search1 = function(req,res) {
	var q =  req.query.q;
	var mathchek =  db.get('users').value().filter(function(index){
		return index.name.indexOf(q) !== -1;
	});
	res.render('Node/aa',{
		users :mathchek
	});
}
module.exports.create = (req,res)=>
	res.render('Node/create');
module.exports.find = function(req,res){
	var id = req.params.id;
	var user  = db.get('users').find({ id: id }).value();
	res.render('Node/view', {
		user : user
	});
}
module.exports.createbox = function (req, res) {
	req.body.id = shortid.generate();
  	db.get('users').push(req.body).write()
  	res.redirect('/user')
};
module.exports.product = function (req, res) {
	// var page = parseInt(req.query.page) || 1;//n
	// var perpage = 8; //x
	// var start = (page-1)*perpage;
	// var begin =(page*perpage);
	// var drop=(page-1)*perpage;
 //  	res.render('Node/products',{
  		//products: db.get('products').value().slice(start,begin)
  		// products: db.get('products').drop(drop).take(perpage).value()

  	// });
pd.find().then(function(products){
	res.render('Node/products',{
		products : products
	})
})
};

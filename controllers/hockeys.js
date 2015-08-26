var db = require('../db.js');

module.exports.controller = function(app) {

	//Hockey Index View Route
	app.get('/hockey', function (req, res){
		console.log("Hockey View has Worked!");
		res.render('hockey_index')
	});

	//hockey FAQS Route
	app.get('/hockey/faq', function (req, res){
		db.findByColumn("faqs", "sport", "hockey", function (result){
			var data = {
				faqs : result
			}
			console.log("hockey faq View has Worked!");
			res.render('hockey_faq', data)
		});
	});	

	//hockey Terms Route
	app.get('/hockey/term', function (req, res){
		db.findByColumn("terms", "sport", "hockey", function (result){
			var data = {
				terms : result
			}
			console.log("hockey terms View has Worked!");
			res.render('hockey_term', data)
		});
	});	

	//hockey Hot Guyz Route
	app.get('/hockey/hot_guys', function (req, res){
		db.findByColumn("players", "sport", "hockey", function (result){
			var data = {
				players : result
			}
			console.log("hockey players view has worked!");
			res.render('hockey_hot_guys', data)
		});
	});


	//hockey Index View Route
	app.get('/hockey/team', function (req, res){
		console.log("hockey team view has worked!");
		res.render('hockey_team')
	});	
}
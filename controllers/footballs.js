var db = require('../db.js');

module.exports.controller = function(app) {

	//Football Index View Route
	app.get('/football', function (req, res){
		console.log("Football View has Worked!");
		res.render('football_index')
	});

	//Football FAQS Route
	app.get('/football/faq', function (req, res){
		db.findByColumn("faqs", "sport", "football", function (result){
			var data = {
				faqs : result
			}
			console.log("Football faq View has Worked!");
			res.render('football_faq', data)
		});
	});	

	//Football Terms Route
	app.get('/football/term', function (req, res){
		db.findByColumn("terms", "sport", "football", function (result){
			var data = {
				terms : result
			}
			console.log("Football terms View has Worked!");
			res.render('football_term', data)
		});
	});	

	//Football Hot Guyz Route
	app.get('/football/hot_guys', function (req, res){
		db.findByColumn("players", "sport", "football", function (result){
			var data = {
				players : result
			}
			console.log("Football players view has worked!");
			res.render('football_hot_guys', data)
		});
	});

	//upvote football
	app.post('/upvote', function  (req, res) {
		var newNum = parseInt(req.body.current_upvote) + 1
		db.upvote(req.body.player_id, newNum, function  (player) {
			console.log(player)
			res.redirect('/football/hot_guys')
		});
	});

	//Football Index View Route
	app.get('/football/team', function (req, res){
		console.log("Football team view has worked!");
		res.render('football_team')
	});	

}
var db = require('../db.js');

module.exports.controller = function(app) {

	//Basketball Index View Route
	app.get('/basketball', function (req, res){
		console.log("Basketball View has Worked!");
		res.render('basketball_index')
	});

	//Basketball FAQS Route
	app.get('/basketball/faq', function (req, res){
		db.findByColumn("faqs", "sport", "basketball", function (result){
			var data = {
				faqs : result
			}
			console.log("basketball faq View has Worked!");
			res.render('basketball_faq', data)
		});
	});	

	//Basketball Terms Route
	app.get('/basketball/term', function (req, res){
		db.findByColumn("terms", "sport", "basketball", function (result){
			var data = {
				terms : result
			}
			console.log("basketball terms View has Worked!");
			res.render('basketball_term', data)
		});
	});	

	//Basketball Hot Guyz Route
	app.get('/basketball/hot_guys', function (req, res){
		db.findByColumn("players", "sport", "basketball", function (result){
			var data = {
				players : result
			}
			console.log("basketball players view has worked!");
			res.render('basketball_hot_guys', data)
		});
	});

	//upvote basketball
    app.post('/upvote', function(req, res) {

      var newNum = parseInt(req.body.current_upvote) + 1;

      db.upvote(req.body.player_id, newNum, function(player) {
        console.log(player)
        res.redirect('/basketball/hot_guys')
      });
    });

	//Basketball Index View Route
	app.get('/basketball/team', function (req, res){
		console.log("basketball team view has worked!");
		res.render('basketball_team')
	});	

}
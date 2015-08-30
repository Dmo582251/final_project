var db = require('../db.js');

module.exports.controller = function(app) {

	//Soccer Index View Route
	app.get('/soccer', function (req, res){
		console.log("soccer View has Worked!");
		res.render('soccer_index')
	});

	//soccer FAQS Route
	app.get('/soccer/faq', function (req, res){
		db.findByColumn("faqs", "sport", "soccer", function (result){
			var data = {
				faqs : result
			}
			console.log("soccer faq View has Worked!");
			res.render('soccer_faq', data)
		});
	});	

	//soccer Terms Route
	app.get('/soccer/term', function (req, res){
		db.findByColumn("terms", "sport", "soccer", function (result){
			var data = {
				terms : result
			}
			console.log("soccer terms View has Worked!");
			res.render('soccer_term', data)
		});
	});	

	//soccer Hot Guyz Route
    app.get('/soccer/hot_guys', function(req, res) {
      db.orderPlayersByUpVote("soccer", function(result) {
        var data = {
          players: result
        }
        console.log("soccer players view has worked!");
        res.render('soccer_hot_guys', data)
      });
    });

	//upvote soccer
    app.post('/soccer/upvote', function(req, res) {

      var newNum = parseInt(req.body.current_upvote) + 1;

      db.upvote(req.body.player_id, newNum, function(player) {
        console.log(player)
        res.redirect('/soccer/hot_guys')
      });
    });


	//soccer Index View Route
	app.get('/soccer/team', function (req, res){
		console.log("soccer team view has worked!");
		res.render('soccer_team')
	});	

}
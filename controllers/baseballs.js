var db = require('../db.js');

module.exports.controller = function(app) {

	//Baseball Index View Route
	app.get('/baseball', function (req, res){
		console.log("baseball View has Worked!");
		res.render('baseball_index')
	});

	//baseball FAQS Route
	app.get('/baseball/faq', function (req, res){
		db.findByColumn("faqs", "sport", "baseball", function (result){
			var data = {
				faqs : result
			}
			console.log("baseball faq View has Worked!");
			res.render('baseball_faq', data)
		});
	});	

	//baseball Terms Route
	app.get('/baseball/term', function (req, res){
		db.findByColumn("terms", "sport", "baseball", function (result){
			var data = {
				terms : result
			}
			console.log("baseball terms View has Worked!");
			res.render('baseball_term', data)
		});
	});	

	//Baseball Hot Guyz Route
    app.get('/baseball/hot_guys', function(req, res) {
      db.orderPlayersByUpVote("baseball", function(result) {
        var data = {
          players: result
        }
        console.log("baseball players view has worked!");
        res.render('baseball_hot_guys', data)
      });
    });

	//upvote baseball
    app.post('/baseball/upvote', function(req, res) {

      var newNum = parseInt(req.body.current_upvote) + 1;

      db.upvote(req.body.player_id, newNum, function(player) {
        console.log(player)
        res.redirect('/baseball/hot_guys')
      });
    });


	//baseball Index View Route
	app.get('/baseball/team', function (req, res){
		console.log("baseball team view has worked!");
		res.render('baseball_team')
	});	

}
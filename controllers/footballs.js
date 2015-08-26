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

app.get('football/news', function (req, res) {
  url = 'http://www.prosportsdaily.com/nfl/nfl-rumors.html';
  // The structure of our request call
  // The first parameter is our URL
  // The callback function takes 3 parameters, an error, response status code and the html
  request(url, function(error, response, html) {
    // First we'll check to make sure no errors occurred when making the request
    if (!error) {
      // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
      var $ = cheerio.load(html);
      var articles_array = [];
      // We'll use the unique unordered list class as a starting point.
      $('.unstyled').filter(function() {
        var data = $(this);
        var lis = data.eq(0).find('li');
        for (var i = 0; i < lis.length; i++) {
          var obj = {}
          var li = lis.eq(i);
          var link_text = li.find('a').text();
          var link_url = li.find('a').attr('href'); // looks like this: "/articles/russell-wilson-claims-recovery-water-healed-his-head-injury-370777.html"
          var pChildren = li.find('p').contents();
          var article_source = pChildren.eq(1).text();
          var article_text = pChildren.eq(2).text();
          var article_date = pChildren.eq(3).text();
          obj['article_title'] = link_text;
          obj['article_url'] = link_url;
          obj['article_source'] = article_source;
          obj['article_text'] = article_text;
          obj['article_date'] = article_date;
          articles_array.push(obj);
        }
         var data = {
         		article : articles_array
         }
      })

      //articles_array
      res.render('football_news', data);
    }
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
var request = require('request');
var cheerio = require('cheerio');
module.exports.controller = function(app) {
app.get('/football/news', function (req, res) {

  //All the web scraping magic will happen here
  url = 'http://www.prosportsdaily.com/nfl/nfl-rumors.html';

  request(url, function(error, response, html) {

    // First we'll check to make sure no errors occurred when making the request

    if (!error) {
      // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

      var $ = cheerio.load(html);

      var articles_array = [];

      // We'll use the unique header class as a starting point.
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

          obj['link_text'] = link_text;
          obj['link_url'] = "http://www.prosportsdaily.com/articles/" + link_url;
          obj['article_source'] = article_source;
          obj['article_text'] = article_text;
          obj['article_date'] = article_date;

          articles_array.push(obj);

        }

      })
     var data = {
        articles: articles_array
      }

      // do res.render and pass in the data object to the view and loop over
      res.render("football_news", data);
    }
  });

});
}
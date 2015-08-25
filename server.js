var express = require('express');
var app = express();

var logger = require('morgan');
var path = require('path');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// this is now in controllers: 
var db = require('./db.js');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

// Setting up handlebars
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  extname: 'handlebars'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// Allows us to use req.body
app.use(bodyParser.urlencoded());
// Loads static files
app.use(express.static('public'));
app.use(logger('dev'));

// stuff for fs
//this is unclear to michael. How does this work. 
fs.readdirSync('./controllers').forEach(function(file) {
  if (file.substr(-3) == '.js') {
    route = require('./controllers/' + file);
    route.controller(app);
  }
});

// Allows us to use method PUT and DELETE for forms
app.use(methodOverride(function(req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.listen(3000); 
console.log('Magic happens on port 3000');
          

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
  console.log("App running on port : ", app.get('port'));
});

exports = module.exports = app;




/* STARTING ROUTES
----------------------------------------------*/

// app.get('/scrape', function(req, res) {

//       //All the web scraping magic will happen here


//       url = 'http://www.tmz.com/category/tmzsports/';

//       // The structure of our request call
//       // The first parameter is our URL
//       // The callback function takes 3 parameters, an error, response status code and the html

//       request(url, function(error, response, html) {

//             // First we'll check to make sure no errors occurred when making the request

//             if (!error) {
//               // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

//               var $ = cheerio.load(html);

//               // Finally, we'll define the variables we're going to capture

//               var header, photo, content;
//               var json = {
//                 header: "",
//                 photo: "",
//                 content: ""
//               };

//               // We'll use the unique header class as a starting point.

//               $('.news').filter(function() {

//                   // Let's store the data we filter into a variable so we can easily see what's going on.

//                   var data = $(this);

//                   // In examining the DOM we notice that the header rests within the first child element of the .news tag. 
//                   // Utilizing jQuery we can easily navigate and get the text by writing the following code:

//                   header = data.children().first().text();

//                   // Once we have our header, we'll store it to the our json object.
//                   json.header = header;
//                 })
//                 // repeat the same process here but with a new div class:
//               $('.article-content').filter(function() {

//                 var data = $(this);

//                 photo = data.children().has("p").has("img").text();

//                 content = data.children()

//                 json.photo = photo;

//                 //issue: The content is saved under
//               })

//               fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err) {

//                 console.log('File successfully written! - Check your project directory for the output.json file');

//               })

//               // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
//               res.send('Check your console!')

//             }
// });
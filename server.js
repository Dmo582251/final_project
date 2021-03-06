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
console.log(fs.readdirSync('./controllers'));
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







/* STARTING ROUTES
----------------------------------------------*/

//First View Route
app.get('/', function (req, res){
	console.log("First View has Worked!");
	res.render('first_view');
});





app.listen(3000);




exports = module.exports = app;






'use strict';

/*
 * Express Dependencies
 */
var express = require('express');
var https = require('https');
var app = express();
var port = 3000;

var bodyParser = require('body-parser');

/*
 * Use Handlebars for templating
 */
var exphbs = require('express-handlebars');
var hbs;

// For gzip compression
app.use(express.compress());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/*
 * Config for Production and Development
 */
if (process.env.NODE_ENV === 'production') {
  // Set the default layout and locate layouts and partials
  app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: 'dist/views/layouts/',
    partialsDir: 'dist/views/partials/'
  }));

  // Locate the views
  app.set('views', __dirname + '/dist/views');
  
  // Locate the assets
  app.use(express.static(__dirname + '/dist/assets'));

} else {
  app.engine('handlebars', exphbs({
    // Default Layout and locate layouts and partials
    defaultLayout: 'main',
    layoutsDir: 'views/layouts/',
    partialsDir: 'views/partials/'
  }));

  // Locate the views
  app.set('views', __dirname + '/views');
  
  // Locate the assets
  app.use(express.static(__dirname + '/assets'));
}


// Set Handlebars
app.set('view engine', 'handlebars');

/*
 * Routes
 */
// Index Page

app.get('/', function(req, res, next) {
  res.render('index');

});


/*
 * Start it up
 */
app.listen(process.env.PORT || port);
console.log('Express started on port ' + port);
var gzippo = require('gzippo');
var express = require('express');
var routes = require('./routes'); 
var models = require('./models');
var bodyParser = require('body-parser');
var app = express();

app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/notes', routes.getNotes);
app.post('/notes', routes.saveNotes);

models.sequelize.sync();

// App Entry
app.get('/*', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 5000);
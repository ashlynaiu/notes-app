var gzippo = require('gzippo');
var express = require('express');
var models = require('./models');
var routes = require('./routes'); //place on top of the file</pre>

var app = express();
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

models.sequelize.sync().then(function() {
 var server = app.listen(app.get('port'), function() {
 console.log('Express server listening on port ' + server.address().port);
 });
});

app.get('/todo', routes.gettodos);
app.post('/todo', routes.savetodos);

// App Entry
app.get('/*', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 5000);
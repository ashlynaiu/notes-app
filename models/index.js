'use strict';
 
var pg = require('pg');
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];

var sequelize = new Sequelize('dahtp8vpqhjd8', 'yynzpdoojusrhj', 'jtkMyV-1IxCPWZ-Wg02dP0baHz', { 
	host: 'ec2-54-83-59-154.compute-1.amazonaws.com',
	dialect:  'postgres',
    protocol: 'postgres',
    port:     5432,
    dialectOptions: {
    	ssl: true
    }
});

var db = {};

fs.readdirSync(__dirname).filter(function(file) {
 return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function(file) {
 var model = sequelize['import'](path.join(__dirname, file));
 db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
 if ('associate' in db[modelName]) {
 db[modelName].associate(db);
 }
});
 
db.sequelize = sequelize;
db.Sequelize = Sequelize;
 
module.exports = db;

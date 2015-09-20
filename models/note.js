"use strict";
module.exports = function(sequelize, DataTypes) {
	var Note = sequelize.define("Note", {
		id: {
	    	type:Sequelize.INTEGER,
	    	primaryKey: true,
	    	autoIncrement: true
		},
		title: {
			type: Sequelize.STRING
		},
		message: {
			type: Sequelize.TEXT
		},
		visible: {
			type: Sequelize.BOOLEAN,
			defaultValue: true
		}
 	});
 	return Note;
};
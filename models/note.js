"use strict";
module.exports = function(sequelize, DataTypes) {
	var Note = sequelize.define("Note", {
		id: {
	    	type: DataTypes.INTEGER,
	    	primaryKey: true,
	    	autoIncrement: true
		},
		title: {
			type: DataTypes.STRING
		},
		message: {
			type: DataTypes.TEXT
		},
		visible: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
 	});
 	return Note;
};
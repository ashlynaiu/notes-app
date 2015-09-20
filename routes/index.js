var models = require("../models");

exports.getNotes = function(req, res) {
    models.Note.findAll().then(function(notes){
        res.json(notes);
    });
};
 
exports.saveNotes = function(req, res) {
    models.Note.create({
        message: req.body.message,
        title: req.body.title
    }).then(function(notes){
        res.json(notes.dataValues);
    }).catch(function(error){
        console.log("ERROR >>>> " + error);
        res.status(500).json({ error: 'error' });
    });
};
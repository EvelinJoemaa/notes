const Note = require("../models/NoteModel");

function get (req, res){
    res.render("index", {notes: Note.get()});
}

function post (req, res){
    res.send('post')
}

module.exports = {
    get,
    post
}
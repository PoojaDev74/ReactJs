const Note = require("../models/notesModel");

// Create data //
const createNote = async (req, res) => {
    const note = new Note(req.body);
    await note.save();
    res.json(note);
}

// Get a single data //
const getNote = async (req, res) => {
    const notes = await Note.find({ groupId: req.params.groupId }).sort({ timestamp: 1 });
  res.json(notes);
};

// Update data //
const editNote = async (req, res) => {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(note);
};

// Delete dta //
const deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
};


module.exports = {
    getNote,
    createNote,
    editNote,
    deleteNote,
};
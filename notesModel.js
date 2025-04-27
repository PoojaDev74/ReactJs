const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    groupId:{
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
},
{ timestamp: true },
);

const Note = new mongoose.model("Note", noteSchema);

module.exports = Note;
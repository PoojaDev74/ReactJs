const mongoose = require("mongoose");

const groupSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
},
{timestamp: true},
);

const Group = new mongoose.model("Group", groupSchema);

module.exports = Group;
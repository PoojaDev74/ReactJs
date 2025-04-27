const Group = require("../models/groupModel")

// Get all data //
const getGroups = async (req, res) => {
    const group_id = req.group_id;

    try {
        const groupData = await Group.findById({group_id}).sort({ createdAt: -1 });
        res.status(200).json(groupData);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Get a single data //
const getGroup = async (req, res) => {
    try {
        const id = req.params.id
        const groupData = await Group.findById({ _id: id });
        res.status(200).json(groupData);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

// Create data //
const createGroup = async (req, res) => {
    const { name } = req.body;
  
    try {
      const newGroup = new Group({ name });
      const savedGroup = await newGroup.save();
      res.status(201).json(savedGroup); // ✅ Correct variable
    } catch (err) {
        console.log("Request to create group with name:", name);
        console.error("Error in createGroup:", err);
      res.status(400).json({error: err.message}); // ✅ Proper error response
    }
  };
  

// Update data //
const editGroup = async (req, res) => {
    try {
        const id = req.params.id;
        const { name } = req.body;
        const updatedGroup = await Group.findByIdAndUpdate(id, { name }, { new: true });

        if (!updatedGroup) {
            return res.status(404).json({ error: "Group not found" });
        }

        res.status(200).json(updatedGroup);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


// Delete dta //
const deleteGroup = async (req, res) => {
    try {
        const groupId = req.params.id;
        const deletedGroup = await Group.findByIdAndDelete(groupId);

        if (!deletedGroup) {
            return res.status(404).json({ error: "Group not found" });
        }

        res.status(200).json({ message: "Group deleted", data: deletedGroup });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


module.exports = {
    getGroups,
    getGroup,
    createGroup,
    editGroup,
    deleteGroup
};
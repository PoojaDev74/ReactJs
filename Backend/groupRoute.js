
const express = require("express");

const group = require("../models/groupModel");

const router = express.Router();

// Require Controllers //
const {
    getGroups, 
    getGroup, 
    createGroup,
    editGroup,
    deleteGroup,
} = require(`../controllers/groupController`);

//router.use(authUser)

// // Get entire data 
// router.get("/", async (req, res)=>{
// try{
// const groupData = await Group.find().sort({createdAt:-1});
// res.status(200).json(groupData);
// }catch(err){
// res.status(400).json({error:err.message})
// }
// })

// Get entire records //
router.get("/", getGroups);

// Get single record //
router.get("/:groupId", getGroup);

// Create record //
router.post("/", createGroup);

// Update record //
router.patch("/:groupId", editGroup);

// Delete data //
router.delete("/:groupId",deleteGroup);


module.exports = router;
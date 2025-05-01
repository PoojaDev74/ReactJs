const express = require("express");
const router = express.Router();

// Import model (optional if not used directly)
const notes = require("../models/notesModel");

// Import controllers
const {
  getNote,
  createNote,
  editNote,
  deleteNote,
} = require("../controllers/noteController");

// Routes
router.get("/:groupId", getNote);       // Read
router.post("/:groupId", createNote);           // Create
router.patch("/:id", editNote);         // Update
router.delete("/:id", deleteNote);      // Delete

module.exports = router;

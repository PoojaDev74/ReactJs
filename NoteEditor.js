import React, { useState } from "react";
import axios from "axios";

function NoteEditor({ selectedGroupId, onNoteAdded }) {
  const [noteInput, setNoteInput] = useState("");

  // Corrected: No unused variables
  function getFormattedDateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    const date = now.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
    return `${time} | ${date}`;
  }

  const handleSaveNote = async () => {
    if (!noteInput.trim()) return;

    const newNote = {
      content: noteInput.trim(),
      createdAt: getFormattedDateTime(), 
      updatedAt: getFormattedDateTime()  
    };

    try {
      await axios.post(`/api/notes/${selectedGroupId}`, newNote);
      setNoteInput("");
      onNoteAdded();
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSaveNote();
    }
  };

  return (
    <div className="note-editor">
      <textarea
        value={noteInput}
        onChange={(e) => setNoteInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter your note here..."
      />
      <button
        className={`send-button ${noteInput.trim() ? 'active' : ''}`}
        onClick={handleSaveNote}
        disabled={!noteInput.trim()}
      >
        ➤
      </button>
    </div>
  );
}

export default NoteEditor;

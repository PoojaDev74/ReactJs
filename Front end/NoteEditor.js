import React, { useState } from 'react';
import axios from 'axios';
import './NoteEditor.css';

function NoteEditor({ groupId, refreshNotes }) {
  const [noteInput, setNoteInput] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && noteInput.trim()) {
      e.preventDefault();
      saveNote();
    }
  };

  const saveNote = async () => {
    const noteData = {
      text: noteInput.trim(),
      timestamp: new Date().toISOString()
    };

    try {
      console.log("Sending note to groupId:", groupId);
      await axios.post(`/api/notes/${groupId}`, noteData);
      setNoteInput('');
      refreshNotes(); // Reload notes for this group
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  return (
    <div className="note-editor">
      <textarea
        placeholder="Enter your text here..."
        value={noteInput}
        onChange={(e) => setNoteInput(e.target.value)}
        onKeyDown={handleKeyPress}
        rows={4}
      />
      <button
        className={`send-btn ${noteInput.trim() ? 'active' : ''}`}
        onClick={saveNote}
        disabled={!noteInput.trim()}
      >
        ➤
      </button>
    </div>
  );
}

export default NoteEditor;

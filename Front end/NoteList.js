import React from "react";

function formatDateTime(dateString) {
  const date = new Date(dateString);
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  return date.toLocaleString('en-US', options);
}

function NoteList({ notes }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div className="note-item" key={note._id}>
          <div className="note-date">{formatDateTime(note.timestamp)}</div>
          <div className="note-content">{note.content}</div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
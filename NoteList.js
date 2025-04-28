import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Trash2, Pencil } from "lucide-react";
// import { Textarea } from "@/components/ui/textarea";

function NoteList({ notes }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div className="note-item" key={note._id}>
          <div className="note-date">{new Date(note.createdAt).toLocaleString()}</div>
          <div className="note-content">{note.content}</div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;

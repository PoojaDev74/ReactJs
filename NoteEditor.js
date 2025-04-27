import React from "react";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";

const NoteEditor = ({ note, setNote, onSubmit }) => (
  <div className="mt-4">
    <Textarea
      placeholder="Write your note..."
      value={note}
      onChange={(e) => setNote(e.target.value)}
      className="mb-2"
    />
    <Button onClick={onSubmit} disabled={!note.trim()}>
      Send
    </Button>
  </div>
);

export default NoteEditor;
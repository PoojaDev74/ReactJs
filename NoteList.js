import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Trash2, Pencil } from "lucide-react";
// import { Textarea } from "@/components/ui/textarea";

const NoteList = ({
  notes,
  onDelete,
  onEditStart,
  editingNoteId,
  editedNote,
  setEditedNote,
  onEditSave,
  onCancelEdit,
}) => (
  <div className="space-y-4 overflow-y-auto pr-2 flex-1">
    {notes.map((n) => (
      <Card key={n._id}>
        <CardContent className="p-4">
          {editingNoteId === n._id ? (
            <>
              <Textarea
                value={editedNote}
                onChange={(e) => setEditedNote(e.target.value)}
                className="mb-2"
              />
              <Button size="sm" onClick={() => onEditSave(n._id)}>
                Save
              </Button>
              <Button size="sm" variant="ghost" onClick={onCancelEdit} className="ml-2">
                Cancel
              </Button>
            </>
          ) : (
            <div className="flex justify-between items-start">
              <div>{n.content}</div>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" onClick={() => onEditStart(n)}>
                  <Pencil size={16} />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => onDelete(n._id)}
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    ))}
  </div>
);

export default NoteList;
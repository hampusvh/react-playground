import { useState } from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

function NoteCard({ note, index, editNote, deleteNote }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(note);

    const handleSave = () => {
        editNote(index, newText);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setNewText(note);
        setIsEditing(false);
    };

  return (
    <div className="note-box">
      {isEditing ? (
      <div>
        <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        className="edit-input"
        />
        <button className="save-btn" onClick={handleSave}>💾 save</button>
        <button className="cancel-btn" onClick={handleCancel}>❌ cancel</button>
        </div>
      ) : (
        <div>
            <p>{note}</p>
            <div>
                <EditButton editNote={() => setIsEditing(true)} />
                <DeleteButton deleteNote={() => deleteNote(index)} />
            </div>
        </div>
  )}
  </div>
  );
}

export default NoteCard;

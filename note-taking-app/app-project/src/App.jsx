import "./App.css";
import NoteInput from "./components/NoteInput";
import { useState, useEffect } from "react";

function App() {

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const addNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
  };

  const editNote = (index, newText) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = newText;
    setNotes(updatedNotes);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <NoteInput addNote={addNote} />

    <div className="note-container">
      {notes.map((note, index) => (
        <div key={index} className="note-box">{note}<div>
          <button
            className="edit-btn"
            onClick={() => editNote(index, promt("edit note:", note))}
            >✏️</button>
            <button className="delete-btn" onClick={() => deleteNote(index)}>❌</button>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
}

export default App;

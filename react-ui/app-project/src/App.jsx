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

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="input-container">
      <NoteInput addNote={addNote} />

    <div className="note-container">
      {notes.map((note, index) => (
        <p key={index}>{note}</p>
      ))}
    </div>
    </div>
  );
}

export default App;

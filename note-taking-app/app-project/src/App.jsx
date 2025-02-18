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
    <div className="app-wrapper">
      <div className="app-container">
        <NoteInput addNote={addNote} />

    <div className="note-container">
      {notes.map((note, index) => (
        <div key={index} className="note-box">{note}</div>
      ))}
    </div>
    </div>
    </div>
  );
}

export default App;

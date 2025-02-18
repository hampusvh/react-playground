import "./App.css";
import NoteInput from "./components/NoteInput";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
    console.log("Uppdaterad lista:", notes);
  };

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

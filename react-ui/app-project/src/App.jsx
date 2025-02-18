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
    <div className="container">
      <NoteInput addNote={addNote} />
    </div>
  );
}

export default App;

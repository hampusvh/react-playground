import "./App.css";
import NoteInput from "./components/NoteInput";
import SavedNotes from "./components/SavedNotes";
import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const addNote = (newNote) => {
    const updatedNotes = [newNote, ...notes];
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


        <SavedNotes notes={notes} editNote={editNote} deleteNote={deleteNote} />

        <NoteInput addNote={addNote} />

              </div>
            </div>
          );

        }

export default App;

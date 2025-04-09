import { useState } from "react";

function NoteInput({ addNote }) {
  const [text, setText] = useState("");

  return (
    <div className="input-container">
      <input
        className="note-input"
        type="text"
        placeholder="write something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button
        className="save-button"
        onClick={() => {
          addNote(text);
          setText("");
        }}
      >
        save
      </button>
    </div>
  );
}

export default NoteInput;

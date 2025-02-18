import { useState } from "react";

function NoteInput({ addNote }) {
    const [text, setText] = useState("");


return (
    <div>
        <input 
        type="text"
        placeholder="write something..."
        value={text}
        onChange = {(e) => setText(e.target.value)}
        />
        <br />
        <button onClick={() => {
            addNote(text);
            setText("");
        }}>save</button>
    </div>
);

}

export default NoteInput;
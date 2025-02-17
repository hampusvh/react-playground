import { useState } from "react";

function NoteInput() {
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
        <button onClick={() => console.log(text)}>save</button>
    </div>
);

}

export default NoteInput;
import NoteCard from "./NoteCard";

function SavedNotes ({ notes, editNote, deleteNote }) {
    return (
        <div className="note-container">
            {notes.map((note, index) => (
                <NoteCard
                key={index}
                note={note}
                index={index}
                editNote={editNote}
                deleteNote={deleteNote}
                />
            ))}
            
        </div>
    );
}

export default SavedNotes;
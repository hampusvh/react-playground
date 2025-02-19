import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

function NoteCard({ note, index, editNote, deleteNote }) {
  return (
    <div className="note-box">
      <p>{note}</p>
      <div>
        <EditButton
          editNote={() => editNote(index, prompt("Edit note:", note))}
        />
        <DeleteButton deleteNote={() => deleteNote(index)} />
      </div>
    </div>
  );
}

export default NoteCard;

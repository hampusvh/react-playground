function DeleteButton({ deleteNote }) {
    return (
        <button className="delete-btn" onClick={deleteNote}>❌</button>
    );
}

export default DeleteButton;
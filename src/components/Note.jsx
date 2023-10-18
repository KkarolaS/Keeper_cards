import DeleteIcon from "@mui/icons-material/Delete";

const Note = ({ title, text, handleDeleteClick, id }) => {
  return (
    <div className="note">
      <h1 className="note-title">{title}</h1>
      <p className="note-text"> {text}</p>
      <button onClick={() => handleDeleteClick(id)}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;

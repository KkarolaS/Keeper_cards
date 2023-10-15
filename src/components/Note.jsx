const Note = ({ title, text }) => {
  return (
    <div className="note">
      <h1 className="note-title">{title}</h1>
      <p className="note-text"> {text}</p>
    </div>
  );
};

export default Note;

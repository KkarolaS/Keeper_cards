import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea({ getNote }) {
  const [noteTitle, setNoteTitile] = useState("");
  const [noteText, setNoteText] = useState("");
  const [isFormClicked, setIsFormClicked] = useState(false);

  const addTitle = (e) => {
    const newTitle = e.target.value;
    setNoteTitile(newTitle);
  };

  const addText = (e) => {
    const newText = e.target.value;
    setNoteText(newText);
  };

  const submitNote = (e) => {
    getNote(noteTitle, noteText);
    setNoteTitile("");
    setNoteText("");
    e.preventDefault();
  };

  const expandForm = () => {
    setIsFormClicked((prevState) => !prevState);
  };

  return (
    <div>
      <form onClick={expandForm} className="create-note">
        {isFormClicked && (
          <input
            onChange={addTitle}
            name="title"
            placeholder="Title"
            value={noteTitle}
          />
        )}
        <textarea
          onChange={addText}
          name="content"
          placeholder="Take a note..."
          rows={isFormClicked ? "3" : "1"}
          value={noteText}
        />
        <Zoom in={isFormClicked}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

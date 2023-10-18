import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (title, text) => {
    setNotes((prevNote) => [...prevNote, { title: title, content: text }]);
  };

  const deleteNote = (id) => {
    setNotes((prevNote) => prevNote.filter((item, index) => index !== id));
  };

  return (
    <div>
      <Header />
      <CreateArea getNote={addNote} />
      {notes.map((item, index) => (
        <Note
          key={`${index}${item.title}`}
          id={index}
          title={item.title}
          text={item.content}
          handleDeleteClick={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/

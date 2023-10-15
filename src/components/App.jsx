import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../data/notes";

const App = () => {
  return (
    <div>
      <Header />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} text={note.content} />
      ))}
      <Footer />
    </div>
  );
};

export default App;

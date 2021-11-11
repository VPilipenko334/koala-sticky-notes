import './stylesheets/App.css';
import './stylesheets/sticky_note.css'
import AllNotes from './components/all_notes';

function App() {

  return (
    <div className="App">
      <header className="App-wrapper">
       <h1>Sticky Notes App</h1>
         {/* <img src="https://media0.giphy.com/media/jxwYHbBbKiXwebfVxt/giphy.gif?cid=790b7611df025f25e025554203527b63f36e2e375db01e9d&rid=giphy.gif&ct=g" height="300" width="300"/> */}
         < AllNotes />
      </header>
    </div>
  );
}

export default App;

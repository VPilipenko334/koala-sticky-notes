import './stylesheets/App.css';
import './stylesheets/sticky_note.css'
import AllNotes from './components/all_notes';

function App() {
  return (
    <div className="App">
      <header className="App-wrapper">
       <h1>Sticky Notes App</h1>
         < AllNotes />
      </header>
    </div>
  );
}

export default App;

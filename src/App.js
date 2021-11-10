import './stylesheets/App.css';
import AllNotes from './components/AllNotes';

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

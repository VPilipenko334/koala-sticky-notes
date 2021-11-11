import './stylesheets/App.css';
import { useState } from 'react';
import './stylesheets/sticky_note.css'
import AllNotes from './components/all_notes';
import Header from './components/header'

function App() {

  const [koalaMode, setKoalaMode] = useState(false);

  return (
    //template string
    // if koala-mode === true, then add the class .koala-mode
    <div className={`${koalaMode && 'koala-mode'}`}>
        <header className="App-wrapper">
          < Header handleToggleKoalaMode={setKoalaMode} />
          < AllNotes />
        </header>
    </div>
  );
}

export default App;

import Game from '../Game/Game';
import Header from '../Header/Header';

import './App.css';

function App() {
  return (
    <div className='app'>
      {/* Import header component */}
      <Header />

      {/* Import game component */}
      <Game />
    </div>
  );
}

export default App;

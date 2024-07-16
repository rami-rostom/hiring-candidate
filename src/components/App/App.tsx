import Footer from '../Footer/Footer';
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

      {/* Import footer component */}
      <Footer />
    </div>
  );
}

export default App;

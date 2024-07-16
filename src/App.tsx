import { useEffect, useState } from 'react';
import logo  from './assets/dataleon.svg';

import './styles/App.css';

function App() {
  const [data, setData] = useState('');

  // Fetch datas from json file
  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('No data found', error));
  }, []);

  return (
    <div className='app'>
      <header className='header'>
        <img src={logo} alt='Logo Dataleon' />
        <h1>Hiring Quiz</h1>
      </header>

      <main className='main'>
        
      </main>
    </div>
  );
}

export default App;

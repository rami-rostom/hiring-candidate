import { useEffect, useState } from 'react';
import Header from './components/Header/Header';

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
      {/* Import header component */}
      <Header />

      <main className='main'>

      </main>
    </div>
  );
}

export default App;

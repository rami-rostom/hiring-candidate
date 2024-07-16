import { useEffect, useState } from 'react';
import { DataState } from '../../@types/data';
import Header from '../Header/Header';

import './App.css';

function App() {
  const [data, setData] = useState<DataState>();

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

      <main className='game'>
        <h2 className="game__question">{data?.question}</h2>
      </main>
    </div>
  );
}

export default App;

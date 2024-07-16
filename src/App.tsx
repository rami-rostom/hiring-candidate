import { useEffect, useState } from 'react';

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

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <p>Dataleon Test</p>
      </header>
    </div>
  );
}

export default App;

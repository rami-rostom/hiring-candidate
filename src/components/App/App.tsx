import { useEffect, useState } from 'react';
import { DataState } from '../../@types/data';
import Header from '../Header/Header';

import './App.css';

function App() {
  const [data, setData] = useState<DataState>();
  const [answer, setAnswer] = useState<string>();

  // Fetch datas from json file
  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('No data found', error));
  }, []);

  // Handle response of the question if user say YES
  const handleAnswerYes = () => {
    if (data) {
      setAnswer(data.answers[0]);
    }
  }

  // Handle response of the question if user say NO
  const handleAnswerNo = () => {
    if (data) {
      setAnswer(data.answers[1]);
    }
  }

  return (
    <div className='app'>
      {/* Import header component */}
      <Header />

      <main className='game'>
        <h2 className="game__question">{data?.question}</h2>
        <div className="game__answers">
          <button onClick={handleAnswerYes} className="game__answers-button">
            Yes
          </button>
          <button onClick={handleAnswerNo} className="game__answers-button">
            No
          </button>
        </div>
        <div className="game__result">
          <h3>{answer}</h3>
        </div>
      </main>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { DataType } from '../../@types/data';

import './Game.css';

function Game() {
  const [data, setData] = useState<DataType>();
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
   <>
    <main className='game'>
      {data &&
        <>
        <h2 className="game__question">{data.question}</h2>
        <div className="game__answers">
          <button onClick={handleAnswerYes} className="game__answers-button">
            Yes
          </button>
          <button onClick={handleAnswerNo} className="game__answers-button">
            No
          </button>
        </div>
        </>
      }

      {answer &&
        <div className="game__result">
          <h3>{answer}</h3>
        </div>
      }
    </main>
   </>
  );
}

export default Game;
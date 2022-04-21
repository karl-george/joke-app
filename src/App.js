import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [jokes, setJokes] = useState();
  const [newJoke, setNewJoke] = useState(false);

  useEffect(() => {
    async function getJokes() {
      const res = await fetch(
        'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart'
      );
      const data = await res.json();
      setJokes(data);
    }

    getJokes();
  }, [newJoke]);

  const getNewJoke = () => {
    setNewJoke((prev) => !prev);
  };

  return (
    <div className='App'>
      {jokes ? (
        <div>
          <h2>{jokes.setup}</h2>
          <h2>{jokes.delivery}</h2>
        </div>
      ) : (
        <p>Loading</p>
      )}
      <button onClick={getNewJoke}>Get a new joke</button>
    </div>
  );
}
export default App;

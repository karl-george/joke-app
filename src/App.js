import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [jokes, setJokes] = useState();

  useEffect(() => {
    fetch(
      'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart'
    )
      .then((res) => res.json())
      .then((data) => setJokes(data));
  }, []);

  console.log(jokes);
  return (
    <div className='App'>
      <h2>{jokes.setup}</h2>
      <h2>{jokes.delivery}</h2>
    </div>
  );
}
export default App;

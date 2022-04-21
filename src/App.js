import { useState, useEffect } from 'react';
import Joke from './components/Joke';
import './App.css';

function App() {
  const [joke, setJoke] = useState();

  async function getJoke() {
    const res = await fetch(
      'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart'
    );
    const data = await res.json();
    setJoke(data);
  }

  useEffect(() => {
    getJoke();
  }, []);

  const getNewJoke = () => {
    getJoke();
  };

  return (
    <div className='App'>
      <h1>Jokes App</h1>
      {joke ? <Joke setup={joke.setup} delivery={joke.delivery} /> : `Loading`}
      <button onClick={getNewJoke}>Get a new joke</button>
    </div>
  );
}
export default App;

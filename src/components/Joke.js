import React from 'react';

const Joke = ({ setup, delivery }) => {
  return (
    <div className='card'>
      <h2>{setup}</h2>
      <p>{delivery}</p>
    </div>
  );
};

export default Joke;

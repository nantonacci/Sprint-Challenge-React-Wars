import React from 'react';

function Characters({ char }) {
  return (
    <div>
      <h3>Name: {char.name}</h3>
      <h3>Birth Year: {char.birth_year}</h3>
      <h3>Hair Color: {char.hair_color}</h3>
      <h3>Eye Color: {char.eye_color}</h3>
      <h3>Height: {char.height}</h3>
    </div>
  );
}

export default Characters;

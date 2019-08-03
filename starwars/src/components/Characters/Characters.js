import React from 'react';
import { Container, Card, Data, Span } from './Styles.js';

function Characters({ char }) {
  return (
    <Card>
      <Data>
        Name: <Span>{char.name}</Span>
      </Data>
      <Data>
        Birth Year: <Span>{char.birth_year}</Span>
      </Data>
      <Data>
        Hair Color: <Span>{char.hair_color}</Span>
      </Data>
      <Data>
        Eye Color: <Span>{char.eye_color}</Span>
      </Data>
      <Data>
        Height: <Span>{char.height}cm</Span>
      </Data>
      <Data>
        Mass: <Span>{char.mass}kg</Span>
      </Data>
    </Card>
  );
}

export default Characters;

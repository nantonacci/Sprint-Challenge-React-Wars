import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  width: 30%;
  flex-wrap: wrap;
  border: 2px solid #856d69;
  padding: 10px;
  margin: 30px;
  justify-content: space-evenly;
  background-color: rgba(78, 60, 48, 0.5);
`;

const Data = styled.h3`
  margin: 2px;
`;

const Span = styled.span`
  font-weight: 500;
`;

export { Container, Card, Data, Span };

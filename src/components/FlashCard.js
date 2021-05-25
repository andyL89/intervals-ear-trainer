import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: rgba(255, 255, 255, .9);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  padding-bottom: 10px;
  height: 13vw;
  border: 2px solid rgba(0,0,0,.7);
  border-radius: 5px;
  flex: 1 0 15%;
  margin: 10px;
  font-size: 1.5vw;
  font-weight: 600;
  text-align: center;
  transition: .3s;
  img {
    max-width: 12vw;
  }
  &:hover {
    color: #29b3ff;
    cursor: pointer;
    transform: scale(1.1);
  }
`

const FlashCard = (props) => (
  <Card
    onClick= {props.flashCard.onClick}
  >
    <img
      src={props.flashCard.image}
      alt={props.flashCard.imageAlt}
    />
    <div>
      {props.flashCard.name}
    </div>
  </Card>
)


export default FlashCard;
import React from 'react'
import styled from 'styled-components'
import FlashCard from './FlashCard';
import FlashCardMock from './FlashCardsInfo'
import firebase from "firebase/app";

const Grid = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-between;
padding: 1vw 8vw;
`

const CardGrid = () => {
  const user = firebase.auth().currentUser;
  if (user) {
  return (
    <>
      <h1 style={{marginTop: '2vw', textAlign: 'center'}}>Intervals & Chords</h1>
      <Grid>
        {FlashCardMock().map(flashCard => <FlashCard flashCard={flashCard} />)}
      </Grid>
    </>
  );
  } else {
    return (
      <h4 style={{marginTop: '5vw', color: "red", textAlign: 'center'}}>Please sign in to view content</h4>
    );
  }
}

export default CardGrid;
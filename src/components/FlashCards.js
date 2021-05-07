import React from "react";
// import FlashCard from "./FlashCard";
// import PropTypes from "prop-types";
// import { useSelector } from 'react-redux';
// import firebase from "firebase/app";
// import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import styled from 'styled-components';

const CardGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 5vw;
`
const Card = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content:center;
  padding-bottom: 10px;
  width: 160px;
  height: 200px;
  border: 2px solid black;
  border-radius: 4px;
  flex: 1 0 15%;
  margin: 10px;
  font-size: 20px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`


function FlashCards(){
  return (
    <CardGrid>
      <Card>Half Step</Card>
      <Card>Whole Step</Card>
      <Card>Minor 3rd</Card>
      <Card>Major 3rd</Card>
      <Card>Perfect 4th</Card>
      <Card>Diminished 5th</Card>
      <Card>Perfect 5th</Card>
      <Card>Augmented 5th</Card>
      <Card>Major 6th</Card>
      <Card>Minor 7th</Card>
      <Card>Major 7th</Card>
      <Card>Perfect Octave</Card>
    </CardGrid>
  );
}

// function FlashCards(props){
//   useFirestoreConnect([
//     { collection: 'flashCards' }
//   ]);
//   const flashCards = useSelector(state => state.firestore.flashCards);
//   const user = firebase.auth().currentUser;
//   if (!user) {
//     return (
//       <h1>You must be signed in to view content</h1>
//     )
//   }
//   else if (isLoaded(flashCards) && (user)) {
//     return (
//       <>
//         <h1>Flash Cards</h1>
//         <hr />
//         {flashCards.map((flashCard) => {
//             return <FlashCard
//               whenFlashCardClicked = { props.onFlashCardSelection }
//               interval={flashCard.interval}
//               id={flashCard.id}
//               key={flashCard.id}/>
//           })}
//       </>
//     );
//   } else if (isEmpty(flashCards) && (user)) {
//     return (
//       <h1>No Flash Cards yet!</h1>
//     )
//   } else {
//     return (
//       <h3>Loading...</h3>
//     )
//   }
// }

// FlashCards.propTypes = {
//   onFlashCardSelection: PropTypes.func
// };

export default FlashCards;
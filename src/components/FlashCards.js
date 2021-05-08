import React from "react";
// import FlashCard from "./FlashCard";
// import PropTypes from "prop-types";
// import { useSelector } from 'react-redux';
import firebase from "firebase/app";
import styled from 'styled-components';
import halfStep from '../img/half-step.png';
import wholeStep from '../img/whole-step.png';
import minThird from '../img/minor-third.png';
import majThird from '../img/major-third.png';
import perfectFourth from '../img/perfect-fourth.png';
import tritone from '../img/tritone.png';
import perfectFifth from '../img/perfect-fifth.png';
import augFifth from '../img/augmented-fifth.png';
import majSixth from '../img/major-sixth.png';
import minSeventh from '../img/minor-seventh.png';
import majSeventh from '../img/major-seventh.png';
import octave from '../img/octave.jpeg';
import semitone from '../audios/Minor_second_on_C.mid';

const CardGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 3vw 8vw;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  padding-bottom: 10px;
  height: 13vw;
  border: 2px solid black;
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
    cursor: pointer;
    transform: scale(1.1);
  }
`


function FlashCards(){
  const user = firebase.auth().currentUser;
  if (user) {
    return (
      <>
        <h2 style={{textAlign: 'center', paddingTop: '40px'}}>Click a card to hear an interval</h2>
        <CardGrid>
          <Card><img src={halfStep} alt="half step"/>Half Step</Card>
          <Card><img src={wholeStep} alt="whole step"/>Whole Step</Card>
          <Card><img src={minThird} alt="minor 3rd"/>Minor 3rd</Card>
          <Card><img src={majThird} alt="major 3rd"/>Major 3rd</Card>
          <Card><img src={perfectFourth} alt="perfect 4th"/>Perfect 4th</Card>
          <Card><img src={tritone} alt="tritone"/>Tritone</Card>
          <Card><img src={perfectFifth} alt="perfect 5th"/>Perfect 5th</Card>
          <Card><img src={augFifth} alt="augmented 5th"/>Augmented 5th</Card>
          <Card><img src={majSixth} alt="major 6th"/>Major 6th</Card>
          <Card><img src={minSeventh} alt="minor 7th"/>Minor 7th</Card>
          <Card><img src={majSeventh} alt="major 7th"/>Major 7th</Card>
          <Card><img src={octave} alt="octave"/>Perfect Octave</Card>
        </CardGrid>
      </>
    );
  } else {
    return (
      <h3 style={{color: "red", textAlign: 'center'}}>You must sign in to view content</h3>
    );
  }
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
import React from "react";
import FlashCard from "./FlashCard";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import firebase from "firebase/app";
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function FlashCards(props){
  useFirestoreConnect([
    { collection: 'flashCards' }
  ]);
  const flashCards = useSelector(state => state.firestore.flashCards);
  const user = firebase.auth().currentUser;
  if (!user) {
    return (
      <h1>You must be signed in to view content</h1>
    )
  }
  else if (isLoaded(flashCards) && (user)) {
    return (
      <>
        <h1>Flash Cards</h1>
        <hr />
        {flashCards.map((flashCard) => {
            return <FlashCard
              whenFlashCardClicked = { props.onFlashCardSelection }
              name={flashCard.name}
              id={flashCard.id}
              key={flashCard.id}/>
          })}
      </>
    );
  } else if (isEmpty(flashCards) && (user)) {
    return (
      <h1>No Flash Cards yet!</h1>
    )
  } else {
    return (
      <h3>Loading...</h3>
    )
  }
}

FlashCards.propTypes = {
  onFlashCardSelection: PropTypes.func
};

export default FlashCards;
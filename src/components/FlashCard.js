import React from "react";
import PropTypes from "prop-types";

function FlashCard(props){
  return (
    <>
      <div onClick = {() => props.whenFlashCardClicked(props.id)}>
        <h2>{props.name}</h2>
        <hr/>
      </div>
    </>
  );
}

FlashCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenFlashCardClicked: PropTypes.func
};

export default FlashCard;
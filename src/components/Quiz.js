import React from "react";
import PropTypes from "prop-types";

function Quiz(props){
  return (
    <>
      <div onClick = {() => props.whenQuizClicked(props.id)}>
        <h2>{props.name}</h2>
        <hr/>
      </div>
    </>
  );
}

Quiz.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenQuizClicked: PropTypes.func
};

export default Quiz;
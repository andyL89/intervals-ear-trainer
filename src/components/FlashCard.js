import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const CardGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
`
const Card = styled.div`
  width: 40px;
  height: 60px;
  border: 2px solid black;
  border-radius: 4px;
`

function FlashCard(props){
  return (
    <CardGrid>
      <Card onClick = {() => props.whenFlashCardClicked(props.id)}>
        <h3>Half Step</h3>
      </Card>
    </CardGrid>
  );
}

FlashCard.propTypes = {
  interval: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenFlashCardClicked: PropTypes.func
};

export default FlashCard;
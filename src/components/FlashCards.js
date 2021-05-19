import React from "react";
import styled from 'styled-components';
import firebase from "firebase/app";
import useSound from 'use-sound';
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
import intervals from '../audios/intervals.mp3';

const CardGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 3vw 8vw;
`
const Card = styled.div`
  background: rgba(255, 255, 255, .9);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
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
    color: #29b3ff;
    cursor: pointer;
    transform: scale(1.1);
  }
`

function FlashCards(){
  const user = firebase.auth().currentUser;
  const [play] = useSound(intervals, {
    sprite: {
      half: [0, 3500],
      whole: [5320, 3500],
      min3rd: [10650, 3500],
      maj3rd: [15900, 3500],
      perf4th: [21320, 3500],
      tri: [26650, 3500],
      perf5th: [31900, 3500],
      aug5th: [37320, 3500],
      maj6th: [42650, 3500],
      min7th: [47900, 3500],
      maj7th: [53320, 3500],
      octave: [58650, 3500]
    }
  });
  if (user) {
    return (
      <>
        <h2 style={{textAlign: 'center', paddingTop: '40px'}}>Click a card to hear the interval</h2>
        <CardGrid>
          <Card onClick={() => play({ id: 'half' })}><img src={halfStep} alt="half step"/>Half Step</Card>
          <Card onClick={() => play({ id: 'whole' })}><img src={wholeStep} alt="whole step"/>Whole Step</Card>
          <Card onClick={() => play({ id: 'min3rd' })}><img src={minThird} alt="minor 3rd"/>Minor 3rd</Card>
          <Card onClick={() => play({ id: 'maj3rd' })}><img src={majThird} alt="major 3rd"/>Major 3rd</Card>
          <Card onClick={() => play({ id: 'perf4th' })}><img src={perfectFourth} alt="perfect 4th"/>Perfect 4th</Card>
          <Card onClick={() => play({ id: 'tri' })}><img src={tritone} alt="tritone"/>Tritone</Card>
          <Card onClick={() => play({ id: 'perf5th' })}><img src={perfectFifth} alt="perfect 5th"/>Perfect 5th</Card>
          <Card onClick={() => play({ id: 'aug5th' })}><img src={augFifth} alt="augmented 5th"/>Augmented 5th</Card>
          <Card onClick={() => play({ id: 'maj6th' })}><img src={majSixth} alt="major 6th"/>Major 6th</Card>
          <Card onClick={() => play({ id: 'min7th' })}><img src={minSeventh} alt="minor 7th"/>Minor 7th</Card>
          <Card onClick={() => play({ id: 'maj7th' })}><img src={majSeventh} alt="major 7th"/>Major 7th</Card>
          <Card onClick={() => play({ id: 'octave' })}><img src={octave} alt="octave"/>Perfect Octave</Card>
        </CardGrid>
      </>
    );
  } else {
    return (
      <h4 style={{marginTop: '4vw', color: "red", textAlign: 'center'}}>You must sign in to view content</h4>
    );
  }
}

export default FlashCards;
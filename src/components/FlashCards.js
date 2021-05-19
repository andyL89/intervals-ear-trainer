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
import triadChords from '../audios/triadChords.mp3';
import seventhChords from '../audios/seventhChords.mp3';

const Page = styled.div`
  padding-bottom: 5vw;
`

const CardGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 1vw 8vw;
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

  const [playChord] = useSound(triadChords, {
    sprite: {
      major1: [0, 4000],
      major2: [4780, 4000],
      major3: [9580, 4000],
      major4: [14380, 4000],
      minor1: [19180, 4000],
      minor2: [23900, 4000],
      minor3: [28780, 4000],
      minor4: [33580, 4000],
      diminished1: [38380, 4000],
      diminished2: [43190, 4000],
      augmented1: [47900, 4000],
      augmented2: [52780, 4000]
    }
  });

  const [play7thChord] = useSound(seventhChords, {
    sprite: {
      major1: [0, 4000],
      major2: [4780, 4000],
      dominant1: [9580, 4000],
      dominant2: [14380, 4000],
      minor1: [19180, 4000],
      minor2: [23900, 4000],
      minor3: [28780, 4000],
      minor4: [33580, 4000],
      diminished1: [38380, 4000],
      diminished2: [43190, 4000],
      augmented1: [47900, 4000],
      augmented2: [52780, 4000]
    }
  });

  if (user) {
    return (
      <Page>
        <h1 style={{textAlign: 'center', paddingTop: '40px'}}>Intervals</h1>
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

        <h1 style={{textAlign: 'center', paddingTop: '40px'}}>Triads</h1>
        <CardGrid>
          <Card onClick={() => playChord({ id: 'major1' })}>C Major</Card>
          <Card onClick={() => playChord({ id: 'major2' })}>F major</Card>
          <Card onClick={() => playChord({ id: 'major3' })}>G Major</Card>
          <Card onClick={() => playChord({ id: 'major4' })}>D Major</Card>
          <Card onClick={() => playChord({ id: 'minor1' })}>E Minor</Card>
          <Card onClick={() => playChord({ id: 'minor2' })}>D Minor</Card>
          <Card onClick={() => playChord({ id: 'minor3' })}>G Minor</Card>
          <Card onClick={() => playChord({ id: 'minor4' })}>C Minor</Card>
          <Card onClick={() => playChord({ id: 'diminished1' })}>B Diminished</Card>
          <Card onClick={() => playChord({ id: 'diminished2' })}>G Diminished</Card>
          <Card onClick={() => playChord({ id: 'augmented1' })}>C Augmented</Card>
          <Card onClick={() => playChord({ id: 'augmented2' })}>F Augmented</Card>
        </CardGrid>

        <h1 style={{textAlign: 'center', paddingTop: '40px'}}>Seventh Chords</h1>
        <CardGrid>
          <Card onClick={() => playChord({ id: 'major1' })}>Cmaj7</Card>
          <Card onClick={() => playChord({ id: 'major2' })}>Fmaj7</Card>
          <Card onClick={() => playChord({ id: 'dominant1' })}>G7</Card>
          <Card onClick={() => playChord({ id: 'dominant2' })}>D7</Card>
          <Card onClick={() => playChord({ id: 'minor1' })}>Emin7</Card>
          <Card onClick={() => playChord({ id: 'minor2' })}>Dmin7</Card>
          <Card onClick={() => playChord({ id: 'minor3' })}>Gmin7</Card>
          <Card onClick={() => playChord({ id: 'minor4' })}>Cmin7</Card>
          <Card onClick={() => playChord({ id: 'diminished1' })}>Bº7<br/>(Diminished)</Card>
          <Card onClick={() => playChord({ id: 'diminished2' })}>Gº7<br/>(Diminished)</Card>
          <Card onClick={() => playChord({ id: 'augmented1' })}>C+7<br/>(Augmented)</Card>
          <Card onClick={() => playChord({ id: 'augmented2' })}>F+7<br/>(Augmented)</Card>
        </CardGrid>
      </Page>
    );
  } else {
    return (
      <h4 style={{marginTop: '8vw', color: "red", textAlign: 'center'}}>Please sign in to view content</h4>
    );
  }
}

export default FlashCards;
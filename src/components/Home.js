import React from "react";
import styled from 'styled-components'

const Blurb = styled.div`
  background: rgba(255, 255, 255, .6);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  text-align: center;
  padding-top: 3vw;
  width: 40vw;
  p {
    margin-top: 1vw;
    width: 27vw;
  }
`

function Home() {
  return (
    <Blurb>
      <h2>Welcome to Intervals Ear Training!</h2>
      <p>Our goal at Intervals is to provide simple ear-learning tools and assessments to hone your skills and further your musical abilities. Learn to identify intervals and chords using flashcards and bite-size quizzes.</p>
    </Blurb>
  );
}

export default Home;
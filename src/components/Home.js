import React from "react";
import styled from 'styled-components'

const Blurb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  text-align: center;
  padding: 4vw;
  width: 50vw;
  p {
    margin-top: 1vw;
    width: 27vw;
  }
`

function Home() {
  return (
    <Blurb>
      <h2>Welcome to Intervals Ear Training!</h2>
      <p>Is that a major or a minor third? Perfect 4th or a perfect 5th? Or was it an augmented 5th? We're here to help you identify intervals of all types to hone your skills and further your musical abilities!</p>
    </Blurb>
  );
}

export default Home;
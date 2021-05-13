import React from 'react';
import firebase from "firebase/app";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const SignInCard = styled.div`
  margin: auto;
  margin-top: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 11vw;
    padding: 1vw;
    input {
      text-align: center;
    }
  }
`

const Signin = () => {
  const history = useHistory();
  const doSignIn = (event) => {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
      history.push('/');
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  return (
    <SignInCard>
      <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button type='submit'>Sign in</button>
      </form>
    </SignInCard>
  );
}

export default Signin;
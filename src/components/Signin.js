import React from 'react';
import firebase from "firebase/app";
import { useHistory } from 'react-router-dom';

const Signin = () => {
  const history = useHistory();
  const doSignIn = (event) => {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
      history.push('/cards');
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  return (
    <>
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
    </>
  );
}

export default Signin;
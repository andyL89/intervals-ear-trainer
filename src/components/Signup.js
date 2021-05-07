import React from "react";
import firebase from "firebase/app";
import { useHistory } from 'react-router-dom';

function Signup(){
  const history = useHistory();
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      history.push('/cards')
      console.log("successfully signed up!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  return (
    <>
      <h1>Sign up</h1>
      <form onSubmit={doSignUp} to="/">
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>
    </>
  );
}

export default Signup;
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import firebase from "firebase/app";

function Header() {
  const user = firebase.auth().currentUser;
  const history = useHistory();
  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
      history.push('/');
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  if (!user) {
  return(
    <Navbar sticky= 'top' bg="dark" variant="dark" style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
      <Navbar.Brand href="/">Intervals Ear Training</Navbar.Brand>
      <Nav>
        <Nav.Link><Link id="signUp" to="/signup">Sign Up</Link></Nav.Link>
        <Nav.Link><Link id="signIn" to="/signin">Sign In</Link></Nav.Link>
        <Nav.Link><Link id="quiz" to="/quiz">Quiz</Link></Nav.Link>
        <Nav.Link><Link id="cards" to="/cards">Flash Cards</Link></Nav.Link>
        <Nav.Link><Link id="signOut" onClick={doSignOut} to="/">Sign Out</Link></Nav.Link>
      </Nav>
    </Navbar>
  )}
}

export default Header;
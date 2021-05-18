import React from 'react';
import Signin from './Signin';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <Navbar sticky= 'top' bg="dark" variant="dark" style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
      <Navbar.Brand href="/home">Intervals Ear Training</Navbar.Brand>
      <Nav>
        <Nav.Link><Link id="quiz" to="/quiz">Quizzes</Link></Nav.Link>
        <Nav.Link><Link id="cards" to="/cards">Flash Cards</Link></Nav.Link>
        <Nav.Link><Signin /></Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Header;
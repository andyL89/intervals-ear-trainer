import React from 'react';
import Signin from './Signin';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <Navbar sticky= 'top'  variant="dark" style={{background: '#ff9e9e', display: 'flex', justifyContent: 'space-between', padding: '0px'}}>
      <Navbar.Brand href="/home" style={{fontWeight: '700', padding: '0px 20px'}}>Intervals Ear Training</Navbar.Brand>
      <Nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#ffffff', fontWeight: '600', padding: '0px 20px'}}>
        <Nav.Link><Link style={{color: '#ffffff', textDecoration: 'none'}} id="quiz" to="/quiz">Quizzes</Link></Nav.Link>
        <Nav.Link><Link style={{color: '#ffffff', textDecoration: 'none'}} id="cardGrid" to="/cardGrid">Flash Cards</Link></Nav.Link>
        <Nav.Link><Signin /></Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Header;
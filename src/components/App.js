import React, { useState, useMemo } from 'react';
import Header from './Header';
import Home from './Home';
import Quiz from './Quiz';
import FlashCards from './FlashCards';
import CardGrid from './CardGrid';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from './UserContext';

function App() {
  const [user, setUser] = useState('hello from context');
  const value = useMemo(() => ({ user, setUser }), [user, setUser])
  return (
    <Router>
      <Header />
      <Switch>
        <UserContext.Provider value={{ value }}>
          <Route exact path="/home" component={Home} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/cards" component={FlashCards} />
          <Route exact path="/cardGrid" component={CardGrid} />
        </UserContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;

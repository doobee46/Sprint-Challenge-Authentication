import React, { Component } from 'react';
import {Route, NavLink } from 'react-router-dom';
import Signin from './component/Signin';
import Jokes from './component/Jokes';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <header>
        <nav>
        <NavLink to="/Signin">Sign in</NavLink>
        &nbsp; | &nbsp;
        <NavLink to="/Jokes">Jokes</NavLink>
        </nav>
      </header>
      <main>
      <Route path="/Signin" component={Signin} />
      <Route path="/Jokes" component={Jokes} />
      </main>
      </>
    );
  }
}

export default App;

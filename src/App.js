import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './container/header/Header'
import classes from './App.css'
import StopTimer from './container/timer/Timer';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.app}>
          <Header></Header>
          <StopTimer></StopTimer>
      </div>
    );
  }
}

export default App;

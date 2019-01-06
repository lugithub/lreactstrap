import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button color="primary" className="foo" onClick={console.log}>test</Button>
      </div>
    );
  }
}

export default App;

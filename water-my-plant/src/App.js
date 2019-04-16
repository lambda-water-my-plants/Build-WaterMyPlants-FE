import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './components/Register/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Form">
          < Register />
        </div>
      </div>
    );
  }
}

export default App;

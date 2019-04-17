import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  //functions to add, delete, update functions


   componentDidMount(){
    var token = localStorage.getItem(`token`)
    var request = {
      headers: { authorization : token }
    }
    axios
      .post("https://watermyplantsbe.herokuapp.com/api/users ", request)
      .then(response => {
        this.setState({ })
        console.log(response);
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <div className="Form">
          < Form />
        </div>
      </div>
    );
  }
}

export default App;

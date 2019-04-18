import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import axios from 'axios';
import Navbar from './components/Nav/Navigation';
import {Route, Link} from 'react-router-dom';

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
        <Navbar />
        <div>
          < Form />
        </div>
      </div>
    );
  }
}

export default App;

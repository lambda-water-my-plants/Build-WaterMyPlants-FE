import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import axios from 'axios';
import Navbar from './components/Nav/Navigation';
import Register from './components/Register/Register'
import Login from './components/Login/Login';
import Board from './components/Dashboard/Board';
import Plant from './components/Plant/Plant';
import PrivateRoute from './components/Login/PrivateRoute';
import {Route, Link} from 'react-router-dom';


class App extends Component {
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
      <Route>
        <div className="form">
        <h1> Water My Plants</h1>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </div>
        <PrivateRoute path="/dashboard" exact component={Board}/>
        <Route path="/plant" exact component={Plant}/>

      </Route>
      </div>
    );
  }
}

export default App;

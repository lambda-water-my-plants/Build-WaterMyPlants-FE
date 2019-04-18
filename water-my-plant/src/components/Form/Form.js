import React from 'react';
import Register from '../Register/Register'
import {Route, Link} from 'react-router-dom';
import Login from '../Login/Login';
import './Form.css';
import Board from '../Dashboard/Board';


class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <Route>
        <div className="form">
        <h1> Water My Plants</h1>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </div>
        <Route path="/dashboard" exact component={Board}/>
      </Route>
    )
  }

}

export default Form;

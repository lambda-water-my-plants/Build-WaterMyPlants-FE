import React, { Component } from 'react';
import './App.css';
import Register from './components/Register/Register'
import Login from './components/Login/Login';
import UpdateUser from './components/User/User.js';
import UserProfile from './components/User/UserProfile.js';
import AddPlants from './components/Plants/Plants.js';
import UserPlants from './components/Plants/UserPlants';
import styled from "styled-components";
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
    }
}
  signMeOut = () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      alert("You successfully Signed Out")
      this.props.history.push("/");
      window.location.reload(true);
    } else{
      alert("Please Log in First")
    }
  }
  takeMetoUpdate = () =>{
    if(localStorage.getItem('token')) {
      this.props.history.push("/updateuser");
      window.location.reload(true);
    } else{
      alert("Please Log in First");
    }
  }
  render() {
    return (
      <Router className="App">
        <NavDiv className='this.state.token`'>
            <nav className="navBar" >
             <div>
                  <Link className="dropbtn" to='/login'>Login</Link>
                  <Link className="dropbtn" to="/register">Register</Link>
                  <div className="dropdown">
                      <button className="dropbtn"> Plants</button>
                            <div className="dropdown-content">
                              <Link to='/addplants'> Add Plants</Link>
                              <Link to='/myplants'> My All Plants</Link>
                              <Link to='/plantsbook'> Plants Book</Link>
                            </div>
                  </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn"> Menu</button>
                <div className="dropdown-content">
                  <Link to='/myprofile'> My Profile</Link>
                  <Link to='/updateuser'> Update Profile </Link>
                  {/* <Button className="update" onClick={this.takeMetoUpdate}> Update Profile </Button> */}
                  <Button className="signoutBtn" onClick={this.signMeOut}> Sign Out </Button>
                </div>
              </div>
            </nav>
          </NavDiv>
        <Route exact path="/login"     component={Login} />
        <Route exact path="/register"  component={Register} />
        <Route path="/updateuser" component={UpdateUser} />
        <Route path="/myprofile" component={UserProfile} />
        <Route path="/addplants" component={AddPlants} />
        <Route path="/myplants" component={UserPlants} />

      </Router>
    );
  }
}

export default App;

const NavDiv = styled.div`
  .navBar{
    top:0;
    position: fixed;
    display: flex;
    flex-direction: row;
    flex-wrap: warp;
    z-index: 200;
    width: 100%;
    justify-content : space-between;
    align-items: center;
    background : ;
    width : 100%;
    background: purple;
    img{
      width: 105px;
    }

    .dropbtn {
      text-align:center;
      text-decoration: none;
      background-color: #D46A6A;
      color: white;
      padding: 16px;
      font-size: 14px;
      font-weight: bold;
      border: none;
      cursor: pointer;
      min-height: 100%;
      @media(max-width: 479px){
        font-size: 12px;
      }
    }

    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      text-align:center;
      display: none;
      position: absolute;
      right: 0;
      background-color: grey;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }

    .dropdown-content a {
      color: #EFF1F3;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content a:hover {
      background-color: purple;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }


    .dropbtn:hover {
      background-color: purple;
      cursor: pointer;
    }
  }
  .dropdown-content .signoutBtn{
    border-radius: 5px;
    height: 25px;
}
  .update{
    padding: 12px 16px;
  }
  .signoutBtn{
    border-radius: 20px solid red;
    padding: 12px 16px;
}
`
const Button = styled.div`
  border: none;
  cursor: pointer;
  text-align: center;
  color: #EFF1F3;
  :hover{
    background-color: purple;

  }

`
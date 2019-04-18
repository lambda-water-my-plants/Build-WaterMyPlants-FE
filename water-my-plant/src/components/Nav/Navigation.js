import React from 'react';
import './Navbar.css';
import {Route, Link} from 'react-router-dom';

const Navbar = () => {
  return(
    <div>
      <nav class="navbar fixed-top navbar-dark bg-success">
        <a class="navbar-brand" href="#!">Water My Plants</a>
        <Link to="/dashboard"> Dashboard </Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </div>
  )
}

export default Navbar;

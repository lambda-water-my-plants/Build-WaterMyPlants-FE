import React from 'react';
import './Navbar.css';
import {Route, Link} from 'react-router-dom';

const Navbar = () => {
  return(
    <div>
      <nav class="navbar fixed-top navbar-dark">
        <a class="navbar-brand" href="#!">Water My Plants</a>
        <Link className="link" to="/dashboard"> Dashboard </Link>
        <Link className="link" to="/login">Login</Link>
        <Link className="link" to="/register">Register</Link>
      </nav>
    </div>
  )
  
}

export default Navbar;

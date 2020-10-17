import React from 'react';

import './styles/Navbar.css';
import { Link } from 'react-router-dom';
import LogoPet from '../images/logo.png';

function Navbar() {


  return (
    <div className="container-nav">
      <div className="content-nav">
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            <Link to={'/'}>
          
            <img src={LogoPet} alt="" />
            </Link>
          </h1>

           
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

import React from 'react';

import './Header.css'; // Ensure the correct path to your CSS file
import logo from '../../GFB/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom py-2">
      <div className="container-fluid">
        <button className="navbar-toggler navbar-toggler orange " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{backgroundColor: 'white' , border:'none'}} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav w-100 d-flex justify-content-around">
            <a className="nav-link nav-link-custom mx-3 my-4" href="#">Services</a>
            <a className="nav-link nav-link-custom  mx-3 my-4" aria-current="page" href="#">Process</a>
            <a className="nav-link nav-link-custom mx-3 " href="#">
            <img src={logo} class="rounded" alt="..."/>
            </a>
            <a className="nav-link nav-link-custom mx-3 my-4" href="#">About us</a>
            <a className="nav-link nav-link-custom mx-3 my-4">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import logo from '../images/logo.svg';

import './styles/Navbar.css'
class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid ">
          <a href="/" className="Navbar__brand">
            <img src={logo} className="Navbar__brand-logo" alt="Logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}
export default Navbar;

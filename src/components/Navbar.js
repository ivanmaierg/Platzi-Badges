import React from 'react';
import logo from '../images/logo.svg';
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <span className="font-weight-light">Platzi</span>
        <span className="font-weight-bold">Conf</span>
        <input
          type="checkbox"
          class="btn-check"
          id="btn-check"
          autocomplete="off"
        />
      </div>
    );
  }
}
export default Navbar;

import React from 'react';

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import Logo from '../images/badge-header.svg';
import './styles/BadgeNew.css';
class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={Logo} alt="Logo"></img>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge firstName="Ivan" lastName="Maier" twitter="imaierg"></Badge>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;

import React from 'react';

import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';
import './styles/Badge.css';
class Badge extends React.Component {
  render() {
    return (
      <div className="badge text-wrap">
        <div className="badge_header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="badge_section-name">
          <Gravatar
            className="badge_avatar"
            email={this.props.email}
            alt="Avatar"
          />
          <h1 className="text-dark fs-2">
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        <div className="badge_section-info">
          <h3 className="fs-3">{this.props.jobTitle}</h3>
          <div className="fs-6">{!this.props.twitter ? ' ' : `@${this.props.twitter}`}</div>
        </div>
        <div className="badge_footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;

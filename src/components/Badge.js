import React from 'react';

import confLogo from '../images/badge-header.svg';
import './styles/Badge.css';
class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="badge_header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="badge_section-name">
          <img
            className="badge_avatar"
            src="https://www.gravatar.com/avatar/"
            alt="Avatar"
          />
          <h1 className="text-dark">
            Ivan <br /> Maier
          </h1>
        </div>
        <div className="badge_section-info">
          <h3 className="text-dark">Web dev</h3>
          <div className="text-dark">@imaierg</div>
        </div>
        <div className="badge_footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;

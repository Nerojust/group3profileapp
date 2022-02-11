import React from 'react';
import './index.css';
import lagosLogo from '../images/LSETF.png';
import gizLogo from '../images/giz.png';
import germanyLogo from '../images/germanyNigeria.png';

const HeaderComponent = () => {
  return (
    <div className="mainParentBg">
      <div className="headerTextView">
        <p className="headerText">WEB DEVELOPMENT TRAINING</p>
      </div>
      <div className="logoParentView">
        <img src={lagosLogo} className="logo1" alt="logo" />
        <img src={germanyLogo} className="logo2" alt="logo" />
        <img src={gizLogo} className="logo3" alt="logo" />
      </div>
    </div>
  );
};

export default HeaderComponent;

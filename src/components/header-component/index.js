import React from 'react';
import './index.css';
import lagosLogo from '../images/LSETF.png';
import gizLogo from '../images/giz.png';
import germanyLogo from '../images/germanyNigeria.png';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const HeaderComponent = () => {
  return (
    <div className="mainParentBg">
      <div className="headerTextView">
        <p className="headerText">WEB DEVELOPMENT TRAINING</p>
      </div>

      <Carousel autoplay className="carousel">
        <div class="logo">
          <img src={lagosLogo} className="image" alt="logo" />
        </div>
        <div class="logo">
          <img src={germanyLogo} className="image" alt="logo" />
        </div>
        <div class="logo">
          <img src={gizLogo} className="image" alt="logo" />
        </div>
      </Carousel>
    </div>
  );
};

export default HeaderComponent;

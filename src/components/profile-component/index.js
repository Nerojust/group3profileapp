import React from 'react';
import SocialComponent from '../socials component';
import './index.css';

const ProfileComponent = () => {
  return (
    <>
      <div className="parentView">
        <div className="imageParentView">
          <img
            alt="profile"
            className="pView"
            src="https://welchdentalgroup.com/wp-content/uploads/2016/08/laughinggas.jpg"
          />
          <p className="facilitatorText">FACILITATOR</p>
        </div>
        <div className="profileTextParent">
          <p className="nameText">DORCAS ADJEKUGHENE</p>
          <p className="designationText">SOFTWARE DEVELOPER</p>
          <SocialComponent/>
        </div>

      </div>
        <p className="beneficiariesText">BENEFICIARIES</p>
    </>
  );
};

export default ProfileComponent;

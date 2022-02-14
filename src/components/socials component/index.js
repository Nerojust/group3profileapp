import React from 'react';
import './index.css';

const SocialComponent = () => {
  return (
    <div class='socialParentView'>
      <img
        alt="git"
        class="imageView"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
      />
      <img
        alt="facebook"
        class="imageView"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png"
      />
      <img
        alt="twitter"
        class="imageView"
        src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
      />
      <img
        alt="linkedin"
        class="imageView"
        src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
      />
    </div>
  );
};

export default SocialComponent;

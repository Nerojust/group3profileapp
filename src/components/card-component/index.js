import React from 'react';
import { defaultData } from '../../utils/utils';
import SocialComponent from '../socials component';
import './index.css';

const CardComponent = () => {
  return (
    <main class="parentContainer">
      {/* section one */}
      <div class="sectionOneParent">
        {/* card one */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src={defaultData[0].image}
            />
          </div>
          <div class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <p class="text1">NAME:</p>
                <p class="text2">REMARKS:</p>
              </div>
              <div class="textRight">
                <p class="text3">{defaultData[0].name}</p>
                <p class="text4">{defaultData[0].remark}</p>
              </div>
            </div>
            <SocialComponent />
          </div>
        </div>

        {/* card two */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src={defaultData[1].image}
            />
          </div>
          <section class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <p class="text1">NAME:</p>
                <p class="text2">REMARKS:</p>
              </div>
              <div class="textRight">
                <p class="text3">{defaultData[1].name}</p>
                <p class="text4">{defaultData[1].remark}</p>
              </div>
            </div>
            <SocialComponent />
          </section>
        </div>

        {/* card three */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src={defaultData[2].image}
            />
          </div>
          <section class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <p class="text1">NAME:</p>
                <p class="text2">REMARKS:</p>
              </div>
              <div class="textRight">
                <p class="text3">{defaultData[2].name}</p>
                <p class="text4">{defaultData[2].remark}</p>
              </div>
            </div>
            <SocialComponent />
          </section>
        </div>
      </div>

      {/* section two */}
      <div class="sectionOneParent">
        {/* card one */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src={defaultData[3].image}
            />
          </div>
          <section class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <p class="text1">NAME:</p>
                <p class="text2">REMARKS:</p>
              </div>
              <div class="textRight">
                <p class="text3">{defaultData[3].name}</p>
                <p class="text4">{defaultData[3].remark}</p>
              </div>
            </div>
            <SocialComponent />
          </section>
        </div>

        {/* card two */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src={defaultData[4].image}
            />
          </div>
          <section class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <p class="text1">NAME:</p>
                <p class="text2">REMARKS:</p>
              </div>
              <div class="textRight">
                <p class="text3">{defaultData[4].name}</p>
                <p class="text4">{defaultData[4].remark}</p>
              </div>
            </div>
            <SocialComponent />
          </section>
        </div>

        {/* card three */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src={defaultData[5].image}
            />
          </div>
          <section class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <p class="text1">NAME:</p>
                <p class="text2">REMARKS:</p>
              </div>
              <div class="textRight">
                <p class="text3">{defaultData[5].name}</p>
                <p class="text4">{defaultData[5].remark}</p>
              </div>
            </div>
            <SocialComponent />
          </section>
        </div>
      </div>

      {/* section three */}
      <div class="sectionOneParent">
        {/* card one */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src={defaultData[7].image}
            />
          </div>
          <section class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <p class="text1">NAME:</p>
                <p class="text2">REMARKS:</p>
              </div>
              <div class="textRight">
                <p class="text3">{defaultData[7].name}</p>
                <p class="text4">{defaultData[7].remark}</p>
              </div>
            </div>
            <SocialComponent />
          </section>
        </div>

        {/* card two */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src="https://welchdentalgroup.com/wp-content/uploads/2016/08/laughinggas.jpg"
            />
          </div>
          <section class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <p class="text1">NAME:</p>
                <p class="text2">REMARKS:</p>
              </div>
              <div class="textRight">
                <p class="text3">ADJEKUGHENE DORCAS</p>
                <p class="text4">A very good developer</p>
              </div>
            </div>
            <SocialComponent />
          </section>
        </div>

        {/* card three */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src="https://welchdentalgroup.com/wp-content/uploads/2016/08/laughinggas.jpg"
            />
          </div>
          <section class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <p class="text1">NAME:</p>
                <p class="text2">REMARKS:</p>
              </div>
              <div class="textRight">
                <p class="text3">ADJEKUGHENE DORCAS</p>
                <p class="text4">A very good developer</p>
              </div>
            </div>
            <SocialComponent />
          </section>
        </div>
      </div>
    </main>
  );
};

export default CardComponent;

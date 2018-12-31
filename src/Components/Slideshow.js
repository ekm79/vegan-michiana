import React from 'react';
import Styled from 'styled-components';
import { Fade } from 'react-slideshow-image';


const fadeImages = [
    "/images/chicken.jpg",
    "/images/rabbit.jpg",
    "/images/calf.jpg",
    "/images/lambs.jpg",
    "/images/cow-calf.jpg"
  ];
   
  const fadeProperties = {
    duration: 4000,
    transitionDuration: 2000,
    infinite: true,
    indicators: true
  }

const BgImage = Styled.img `
    width: 100vw;
    height: auto;
    z-index: 1;
    position: absolute;
    overflow: hidden;
`;


const Slideshow = () => {
    return (
        <Fade {...fadeProperties}>
          <div className="each-fade">
            <div className="image-container" style={{height:"100vh"}}>
              <img src={fadeImages[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} />
            </div>
            </div>
            <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[3]} />
            </div>
            </div>
            <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[4]} />
            </div>
          </div>
        </Fade>
      )

}

export default Slideshow;

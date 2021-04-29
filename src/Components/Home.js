import React, { useState } from "react";
import image from "../images/IMG_2006.JPG";
import Typewritter from "typewriter-effect";
import ArrowDown from "../images/down-1.1s-200px.png";
import About from "./About";
import Navigation from "./Navigation";

const Home = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const switchPage = () => {
    setIsAboutOpen(true);
  };

  return (
    <>
      <div className="container">
        <Navigation />

        <div className="presentation">
          <div className="main-description">
            <div className="img-photo-container">
              <img className="img-photo" src={image} alt="" />
              <span className="git-icon">
                <i className="fab fa-github"></i>
              </span>
            </div>

            <div className="text">
              <Typewritter
                options={{
                  cursor: null
                }}
                onInit={typewritter => {
                  typewritter.typeString(`<span class='tag-color'><i class="fas fa-chevron-left"></i></span>` + " Welcome" + "<div>to my world <span class='tag-color'>/<i class='fas fa-chevron-right'></i></span></div>").start();
                }}
              />
            </div>
          </div>
          <span onClick={switchPage} className="arrow-icon-down">
            <img className="arrow-icon" src={ArrowDown} alt="arrow-down" />
          </span>
        </div>

        {!isAboutOpen ? <About /> : <About classMove={"move"} setClass={setIsAboutOpen} />}
      </div>
    </>
  );
};

export default Home;

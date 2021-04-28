import React, { useEffect, useState, useRef } from "react";
import image from "./images/IMG_2006.JPG";

import Typewritter from "typewriter-effect";
import ArrowDown from "./images/down-1.1s-200px.png";
import About from "./About";

const Home = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const openMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.add("menu--is-visible");
  };

  const closeMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.remove("menu--is-visible");
  };

  const switchPage = () => {
    setIsAboutOpen(true);
  };

  return (
    <>
      <div className="container">
        <nav className="nav">
          <span onClick={openMenu} className="hamburger-icon">
            <i className="fas fa-bars"></i>
          </span>

          <div onClick={closeMenu} className="menu">
            {" "}
            <ul className="nav-list">
              <li className="nav-item">Home</li>
              <li className="nav-item">Projects</li>
              <li className="nav-item">Contact</li>
            </ul>
          </div>
        </nav>

        <div className="presentation">
          <div className="main-description">
            <a className="img-link" target="_blank" href="https://github.com/flowbartek93">
              {" "}
              <span className="git-icon">
                <i className="fab fa-github"></i>
              </span>
              <img className="img" src={image} alt="" />
            </a>
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

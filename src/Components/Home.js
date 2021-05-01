import React, { useEffect, useState } from "react";
import image from "../images/IMG_2006.JPG";
import ArrowDown from "../images/down-1.1s-200px.png";
import About from "./About";
import Navigation from "./Navigation";

const Home = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const switchPage = () => {
    setIsAboutOpen(true);
  };

  const typewrite = () => {
    const typewriteText = "Welcome to my world";
    const indent = document.createElement("div");
    const textContainer = document.querySelector(".text > .text-title");
    const openTag = document.querySelector(".open-tag");
    const closeTag = document.querySelector(".close-tag");

    let index = 0;

    textContainer.textContent = "";
    openTag.textContent = "";
    closeTag.textContent = "";

    const type = setInterval(() => {
      if (index === 0) {
        openTag.textContent = "< ";
      }

      textContainer.innerHTML += typewriteText[index];

      if (index === 7) {
        textContainer.appendChild(indent);
      }
      index++;
      console.log(index);
      if (index === typewriteText.length) {
        closeTag.textContent = " />";
        clearInterval(type);
      }
    }, 200);
  };

  useEffect(() => {
    typewrite();
  }, []);

  return (
    <>
      <div className="container">
        <Navigation />

        <div className="presentation">
          <div className="main-description">
            <div className="img-photo-container">
              <img className="img-photo" src={image} alt="" />

              <span className="git-icon">
                <a className="portfolio-link" href="https://github.com/flowbartek93" target="_blank">
                  <i className="fab fa-github-square"></i>
                </a>
                <p>My Github page</p>
              </span>
            </div>

            <div className="text">
              <span className="tag-color open-tag"></span>
              <span className="text-title"></span>
              <span className="tag-color close-tag"></span>
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

import React from "react";
import Navigation from "./Navigation";

// paths to my projescts images
import psychofizyczniewww from "../images/psychofizyczniewww.png";
import scrollgallery from "../images/scrollgallery.png";
import reflexgame from "../images/reflexgame.png";
import randomcatsgallery from "../images/randomcatsgallery.png";
import catssearch from "../images/catssearch.png";
import blackmarket from "../images/blackmarket.png";
import portfolio from "../images/portfolio.png";
import quotegen from "../images/quotegen.png";

//icons

import css from "../icons/css3.svg";
import handlebars from "../icons/handlebars.svg";
import html5 from "../icons/html5.svg";
import javascript from "../icons/javascript.svg";
import react from "../icons/react.svg";
import sass from "../icons/sass.svg";
import nodejs from "../icons/nodejs.svg";

const MyProjects = () => {
  return (
    <>
      <Navigation />

      <div className="projects-container">
        <p className="projects-title">Below you will find a few o my projects. Some of them were done just for fun and learning, others are for commercial use. </p>
        <div className="projects-grid-container">
          <div className="grid-item">
            <a href="https://vibrant-saha-3b7e29.netlify.app" target="_blank">
              <img src={psychofizyczniewww} alt="" />
              <div className="project-icons">
                <img className="icon" src={html5} />
                <img className="icon" src={sass} />
                <img className="icon" src={javascript} />
              </div>
            </a>

            <p className="project-name">Psychofizycznie Webpage</p>
          </div>

          <div className="grid-item">
            <a href="https://confident-darwin-8ebd68.netlify.app" target="_blank">
              <img src={scrollgallery} alt="" />
              <div className="project-icons">
                <img className="icon" src={html5} />
                <img className="icon" src={css} />
                <img className="icon" src={javascript} />
              </div>
            </a>

            <p className="project-name">Scroll Gallery</p>
          </div>

          <div className="grid-item">
            <a href="https://infallible-edison-1a53e9.netlify.app" target="_blank">
              <img src={reflexgame} alt="" />
              <div className="project-icons">
                <img className="icon" src={html5} />
                <img className="icon" src={css} />
                <img className="icon" src={javascript} />
              </div>
            </a>

            <p className="project-name">Reflex game</p>
          </div>

          <div className="grid-item">
            <a href="https://jolly-euclid-8f8bbb.netlify.app/" target="_blank">
              <img src={quotegen} alt="" />
              <div className="project-icons">
                <img className="icon" src={html5} />
                <img className="icon" src={css} />
                <img className="icon" src={javascript} />
              </div>
            </a>

            <p className="project-name">Quote generator</p>
          </div>

          <div className="grid-item">
            <a href="https://agitated-pare-936474.netlify.app" target="_blank">
              <img src={randomcatsgallery} alt="" />
              <div className="project-icons">
                <img className="icon" src={html5} />
                <img className="icon" src={css} />
                <img className="icon" src={javascript} />
              </div>
            </a>

            <p className="project-name">Random cats gallery</p>
          </div>

          <div className="grid-item">
            <a href="https://loving-sinoussi-ab1e58.netlify.app" target="_blank">
              <img src={catssearch} alt="" />
              <div className="project-icons">
                <img className="icon" src={css} />
                <img className="icon" src={react} />
              </div>
            </a>

            <p className="project-name">Cat finder</p>
          </div>

          <div className="grid-item">
            <a href="https://blackmarketapp.herokuapp.com" target="_blank">
              <img src={blackmarket} alt="" />
              <div className="project-icons">
                <img className="icon" src={html5} />
                <img className="icon" src={css} />
                <img className="icon" src={javascript} />
                <img className="icon" src={nodejs} />
                <img className="icon" src={handlebars} />
              </div>
            </a>

            <p className="project-name">Black market simulation</p>
          </div>

          <div className="grid-item">
            <a href="https://bartekostrowskidev.netlify.app" target="_blank">
              <img src={portfolio} alt="" />
              <div className="project-icons">
                <img className="icon" src={css} />
                <img className="icon" src={react} />
              </div>
            </a>

            <p className="project-name">My portfolio</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProjects;

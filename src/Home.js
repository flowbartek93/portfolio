import React, { useEffect, useState, useRef } from "react";
import image from "./images/IMG_2006.JPG";
import { useImmer } from "use-immer";
import Typewritter from "typewriter-effect";
const Home = () => {
  const openMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.add("menu--is-visible");
  };

  const closeMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.remove("menu--is-visible");
  };

  const createOpenTag = () => {
    const span = document.createElement("span");
    span.classList.add("tag-color");

    span.textContent = "&lt;";

    return span;
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
              <strong className="text-1">
                {}

                <Typewritter
                  options={{
                    cursor: null
                  }}
                  onInit={typewritter => {
                    typewritter.typeString(`${createOpenTag().outerHTML}Welcome`).start();
                  }}
                />
              </strong>
              <strong className="text-2">
                {" "}
                <Typewritter
                  options={{
                    cursor: null
                  }}
                  onInit={typewritter => {
                    typewritter.typeString(`To`).start();
                  }}
                />
              </strong>
              <strong className="text-3">
                {" "}
                <Typewritter
                  options={{
                    cursor: null
                  }}
                  onInit={typewritter => {
                    typewritter.typeString(`My world />`).start();
                  }}
                />
              </strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

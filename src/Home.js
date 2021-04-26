import React, { useEffect } from "react";
import image from "./images/IMG_2006.JPG";

const Home = () => {
  const openMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.add("menu--is-visible");
  };

  const closeMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.remove("menu--is-visible");
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
              <img className="img" src={image} alt="" />
            </a>
            <div className="text">
              <strong className="text-1">{`<Welcome`}</strong>
              <strong className="text-2">To</strong>
              <strong className="text-3">My world{` />`}</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

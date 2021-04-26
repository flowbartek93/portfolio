import React, { useEffect } from "react";
import image from "./images/IMG_2006.JPG";
const Home = () => {
  return (
    <>
      <div className="container">
        <nav className="nav">
          <span className="hamburger-icon">
            <i className="fas fa-bars"></i>
          </span>

          <div className="menu">
            {" "}
            <ul className="nav-list">
              <li className="nav-item">Home</li>
              <li className="nav-item">Projects</li>
              <li className="nav-item">Contact</li>
            </ul>
          </div>
        </nav>

        <div className="description">
          <div className="image">
            <a className="img-link" target="_blank" href="https://github.com/flowbartek93">
              {" "}
              <img className="img" src={image} alt="" />
            </a>
          </div>
          <div className="text"></div>
        </div>
      </div>
    </>
  );
};

export default Home;

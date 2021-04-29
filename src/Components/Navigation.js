import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
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
      <nav className="nav">
        <span onClick={openMenu} className="hamburger-icon">
          <i className="fas fa-bars"></i>
        </span>

        <div onClick={closeMenu} className="menu">
          {" "}
          <ul className="nav-list">
            <Link className="nav-link" to="">
              <li className="nav-item">Home</li>
            </Link>
            <Link className="nav-link" to="/myprojects">
              <li className="nav-item">My Projects</li>
            </Link>
            <Link className="nav-link" to="">
              <li className="nav-item">Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

import React, { useEffect } from "react";
import upArrow from "./images/up-1.1s-200px.png";

const About = ({ classMove, setClass }) => {
  const switchPage = () => {
    setClass(false);
  };

  return (
    <>
      <div className={`about-container ${classMove}`}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit facere alias voluptatum consequatur omnis recusandae pariatur! Molestiae incidunt ad illum repudiandae, explicabo illo amet, quod eius earum tenetur fugiat.</p>
        <span onClick={switchPage} className="arrow-icon-up">
          <img className="arrow-icon" src={upArrow} alt="" />
        </span>
      </div>
    </>
  );
};

export default About;

import React, { useEffect } from "react";
import upArrow from "../images/up-1.1s-200px.png";

const About = ({ classMove, setClass }) => {
  const switchPage = () => {
    setClass(false);
  };

  return (
    <>
      <div className={`about-container ${classMove}`}>
        <p className="about-text"> e incidunt ad illum repudiandae, explicabo illo amet, quod eius earum tenetur fugiat. e incidunt ad illum repudiandae, explicabo illo amet, quod eius ear um tenetur fugiat e incidunt ad illum repudiandae, explicabo illo amet, quod eius earum tenetur fugiat e incidunt ad illum repudiandae, explicabo illo amet, q uod eius earum tenetur fugiat e incidunt ad illum repudiandae, explicabo illo amet, quod eius earum tenetur fugiat e incidunt ad illum repudiandae, explicabo il lo amet, quod eius earum tenetur fugiat e incidunt ad illum repudiandae, explicabo illo amet, quod eius earum tenetur fugiat e ind eius earum tenetur fugiat</p>

        <span onClick={switchPage} className="arrow-icon-up">
          <img className="arrow-icon" src={upArrow} alt="" />
        </span>
      </div>
    </>
  );
};

export default About;

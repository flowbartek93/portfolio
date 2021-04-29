import React from "react";
import Navigation from "./Navigation";
import project from "../images/project.png";

const MyProjects = () => {
  return (
    <>
      <Navigation />

      <div className="projects-container">
        <p className="projects-title">Below you will find a few o my projects. Some of them were done just for fun and learning, others are for commercial use. </p>
        <div className="projects-grid-container">
          <div className="grid-item">
            <div>
              <img src={project} alt="" />
            </div>
            <a href="#" className="project-link" target="_blank">
              Psychofizycznie Webpage
            </a>
          </div>

          <div className="grid-item">
            <div>
              <img src={project} alt="" />
            </div>
            <a href="#" className="project-link" target="_blank">
              Psychofizycznie Webpage
            </a>
          </div>

          <div className="grid-item">
            <div>
              <img src={project} alt="" />
            </div>
            <a href="#" className="project-link" target="_blank">
              Psychofizycznie Webpage
            </a>
          </div>

          <div className="grid-item">
            <div>
              <img src={project} alt="" />
            </div>
            <a href="#" className="project-link" target="_blank">
              Psychofizycznie Webpage
            </a>
          </div>

          <div className="grid-item">
            <div>
              <img src={project} alt="" />
            </div>
            <a href="#" className="project-link" target="_blank">
              Psychofizycznie Webpage
            </a>
          </div>

          <div className="grid-item">
            <div>
              <img src={project} alt="" />
            </div>
            <a href="#" className="project-link" target="_blank">
              Psychofizycznie Webpage
            </a>
          </div>

          <div className="grid-item">
            <div>
              <img src={project} alt="" />
            </div>
            <a href="#" className="project-link" target="_blank">
              Psychofizycznie Webpage
            </a>
          </div>

          <div className="grid-item">
            <div>
              <img src={project} alt="" />
            </div>
            <a href="#" className="project-link" target="_blank">
              Psychofizycznie Webpage
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProjects;

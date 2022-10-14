import React from "react";
import "./about.css";
import ME from "../../assets/profile.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h5>Experience</h5>
              <FaAward className="about__icon" />
              <small>3 + Years Working</small>
            </article>
            <article className="about__card">
              <h5>Clients</h5>
              <FiUsers className="about__icon" />
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <h5>Projects</h5>
              <VscFolderLibrary className="about__icon" />
              <small>80+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            explicabo praesentium molestias ratione asperiores placeat beatae
            magnam provident error ipsam sequi minima, ex ullam adipisci iusto
            dolores cumque sit blanditiis.
          </p>

          <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;

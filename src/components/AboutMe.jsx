import React from "react";
import ProfilePic from "../assets/profile2.jpg"; // Profile picture
import CV from "../assets/cv/LIMCV.pdf"; // CV file
import './AboutMe.css';

const AboutMe = () => (
  <section id="about-me" className="about-me">
    <img src={ProfilePic} alt="Me" className="profile-pic" />
    <h2>John Fredrick N. Lim</h2>
    <div className="personal-info">
      <p><strong>Year:</strong> 4th Year</p> {/* Replace with actual year */}
      <p><strong>Section:</strong> BSIT</p> {/* Replace with actual section */}
    </div>
    <p>
      I’m a passionate artist exploring the intersections of photography,
      graphic design, and visual storytelling. My work highlights creativity
      and a keen eye for detail. I enjoy experimenting with different mediums and
      strive to tell compelling stories through my art.
    </p>
    <a href={CV} download="JohnDoe_CV.pdf" className="download-cv-button">
      Download CV
    </a>
  </section>
);

export default AboutMe;

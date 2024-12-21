import React from "react";
import './LandingPage.css';

const LandingPage = () => (
  <section className="landing-page">
    <div className="intro">
      <h1>Welcome to My Art Portfolio</h1>
      <p>Immerse yourself in a world of creativity through my photography, designs, and more.</p>
      <a href="#gallery" className="cta-button">Explore Gallery</a>
      <a href="#about-me" className="cta-button">About Me</a>
    </div>

    {/* Visual Elements */}
    <div className="visual-element circle"></div>
    <div className="visual-element square"></div>
    <div className="visual-element triangle"></div>
    {/* <div className="visual-element rectangle"></div> */}
    {/* <div className="visual-element star"></div> */}
    <div className="visual-element hexagon"></div>

    {/* Duplicate Visual Elements */}
    <div className="visual-element circle-2"></div>
    <div className="visual-element square-2"></div>
    <div className="visual-element triangle-2"></div>
    {/* <div className="visual-element rectangle-2"></div> */}
    <div className="visual-element star-2"></div>
    <div className="visual-element hexagon-2"></div>
  </section>
);

export default LandingPage;

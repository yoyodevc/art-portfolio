import React, { useState } from "react";
import "./styles.css";
import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const [selectedArt, setSelectedArt] = useState(null);

  return (
    <div className="app-container">
      <div className="main-content">
        <LandingPage />
        <AboutMe />
        <Gallery setSelectedArt={setSelectedArt} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

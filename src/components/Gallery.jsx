import React, { useState } from "react";
import ArtModal from "./ArtModal";
import './gallery.css'

//photography import
import photography from "../assets/breathing space.jpg";
import simplification from "../assets/simplification.jpg";
import action from "../assets/action.jpeg";
//graphic design import
import graphicDesign from "../assets/ibm hiring design.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
//brochure layout import
import layout from "../assets/activity 3 revamp.png";
import layout2 from "../assets/activity 3 reference.jpg";
//logo design import
import logoDesign from "../assets/activity 4.png";
//visual branding import
import visualBranding from "../assets/visual branding.png";
import visualBranding1 from "../assets/visual branding1.png";

//website design
import socialMediaDesign from "../assets/web1.png";
import socialMediaDesign2 from "../assets/web2.png";

const artPieces = [
  {
    id: 1,
    title: "Photography",
    description: "Photography Examples.",
    date: "November 2024",
    images: [
      { src: photography, description: "Capturing stunning visuals through the lens" },
      { src: simplification, description: "WMSU Palaro Gold Medal" },
      { src: action, description: "Arnis Match" },
    ],
  },

  {
    id: 2,
    title: "Graphic Design",
    description: "Graphic Design Examples",
    date: "2022-2023",
    images: [
      { src: graphicDesign, description: "Job Posting" },
      { src: info1, description: "Infographic about Database Management System" },
      { src: info2, description: "Continuation" },
    ],
  },

  {
    id: 3,
    title: "Brochure Layout",
    description: "Brochure revamp example",
    date: "September 2024",
    images: [
      { src: layout, description: "Revamped Brochure" },
      { src: layout2, description: "Reference Brochure" },
    ],
  },
  
  {
    id: 4,
    title: "Logo Design",
    description: "Complete Logo Set Example",
    date: "October 2024",
    images: [
      { src: logoDesign, description: "Coco Crafts Logo" },
    ],
  },
  {
    id: 5,
    title: "Visual Branding and Merch Design",
    description: "Visual Branding Example",
    date: "October 2024",
    images: [
      { src: visualBranding1, description: "Coco Crafts Visual Branding and Merch Design" },
      { src: visualBranding, description: "Continuation" },
    ],
  },
  // {
  //   id: 6,
  //   title: "Merch/Packaging Design",
  //   description: "Designing impactful packaging and merchandise.",
  //   date: "2023-07-12",
  //   images: [
  //     { src: merchPackaging, description: "Designing impactful packaging and merchandise." },
  //     { src: "path/to/another-merch-packaging.jpg", description: "Another packaging design." },
  //   ],
  // },
  {
    id: 7,
    title: "Website/Social Media Design",
    description: "Web Design Layout Example",
    date: "March 2024",
    images: [
      { src: socialMediaDesign, description: "Sample Login Page" },
      { src: socialMediaDesign2, description: "Sample Regiser Page" },
    ],
  },
];

const Gallery = () => {
  const [selectedArt, setSelectedArt] = useState(null);

  return (
    <section id="gallery" className="gallery">
      <h2>My Works</h2>
      <div className="gallery-grid">
        {artPieces.map((art) => (
          <div
            key={art.id}
            className="gallery-card"
            onClick={() => setSelectedArt(art)}
          >
            <img src={art.images[0].src} alt={art.title} /> {/* Display the first image */}
            <h3>{art.title}</h3>
          </div>
        ))}
      </div>

      {selectedArt && (
        <ArtModal
          art={selectedArt}
          onClose={() => setSelectedArt(null)} // Close the modal
        />
      )}
    </section>
  );
};

export default Gallery;

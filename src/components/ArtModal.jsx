import React, { useState } from "react";
import './ArtModal.css';

const ArtModal = ({ art, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    if (currentImageIndex < art.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>{art.title}</h2>
        <p><strong>Description:</strong> {art.description}</p>
        <p><strong>Date:</strong> {art.date}</p>
        
        <div className="art-image-container">
          <img
            src={art.images[currentImageIndex].src}
            alt={`${art.title} image ${currentImageIndex + 1}`}
          />
          <p>{art.images[currentImageIndex].description}</p>
        </div>

        {/* Conditionally Render Pagination Controls */}
        {art.images.length > 1 && (
          <div className="pagination-controls">
            <button
              onClick={handlePrev}
              disabled={currentImageIndex === 0}
              className="pagination-button"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentImageIndex === art.images.length - 1}
              className="pagination-button"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtModal;

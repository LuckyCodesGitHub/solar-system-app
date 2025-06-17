import React, { useState } from 'react';

function ImageSlideshow() {
  // Array of image URLs
  const images = [
    "https://images-assets.nasa.gov/image/PIA09776/PIA09776~small.jpg",
    "https://images-assets.nasa.gov/image/PIA03604/PIA03604~medium.jpg",
    "https://images-assets.nasa.gov/image/PIA10969/PIA10969~medium.jpg"
  ];


  const [currentIndex, setCurrentIndex] = useState(0);


  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const currentImage = images[currentIndex];


  const getImageAltText = (index) => {
    switch (index) {
      case 0: return "...";
      case 1: return "...";
      case 2: return "...";
      default: return "...";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-black font-inter">
      <div
        className="relative w-full max-w-xl h-96 bg-gray-800 bg-opacity-70 rounded-xl shadow-2xl border border-cyan-500 overflow-hidden cursor-pointer flex items-center justify-center group"
        onClick={handleClick}
      >

        {!currentImage && (
          <div className="text-cyan-400 text-xl animate-pulse">Loading Image...</div>
        )}


        <img
          src={currentImage}
          alt={getImageAltText(currentIndex)}

          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/600x400/0d1a26/00f0ff?text=Image+Load+Error";
          }}
        />


        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-xl font-bold tracking-wider">Click to Explore Next</p>
        </div>


        <div className="absolute bottom-4 right-4 bg-gray-900 bg-opacity-70 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold border border-cyan-700">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}

export default ImageSlideshow;

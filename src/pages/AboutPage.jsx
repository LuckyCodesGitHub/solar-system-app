import React from 'react';
import './ContactPage.css';

const AboutPage = () => {
  return (
    <div className="contact-page">
      <h1 className="text-4xl font-bold mb-6 text-center">About this Webpage</h1>
      <section className="contact-content p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
        <p className="text-lg text-text-color mb-4 leading-relaxed">
          This webite was made using react and some basic HTML code!
        </p>
        <p className="text-lg text-text-color mb-4 leading-relaxed">
          This website was also made for a school computing project with was graded in 2025
        </p>
        <p className="text-lg text-text-color leading-relaxed">
          The website took around 10 hours of developing!
        </p>
        <p className="text-lg text-text-color leading-relaxed">
          Most of the images are from <a href='https://images.nasa.gov'>Nasa Images</a>
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
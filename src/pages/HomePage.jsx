// src/pages/HomePage.jsx

import React from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage-hero">
        <AnimatedTitle text="Explore our Solar System" />
        <p className="homepage-subtitle">A quick information page on the Solar System</p>
      </header>
      <section className="homepage-intro">
        <h2>jayden is fat :]!</h2>
        <p>
          Explore the wonderful world of our Solar System
        </p>
        <p>
          From the small and hot planet of Mercury to the coldest and furthest planet in our Solar System, you can get information of them all!
        </p>
      </section>
    </div>
  );
}

export default HomePage;

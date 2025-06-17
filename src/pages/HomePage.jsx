// // src/pages/HomePage.jsx

// import React from 'react';
// import AnimatedTitle from '../components/AnimatedTitle';
// import './HomePage.css';

// function HomePage() {
//   return (
//     <div className="homepage">
//       <header className="homepage-hero">
//         <AnimatedTitle text="Explore our Solar System" />
//         <p className="homepage-subtitle">A quick information page on the Solar System</p>
//       </header>
//       <section className="homepage-intro">
//         <h2>Welcome to the Solar System Explorer!</h2>
//         <p>
//           Explore the wonderful world of our Solar System
//         </p>
//         <p>
//           From the small and hot planet of Mercury to the coldest and furthest planet in our Solar System, you can get information of them all!
//         </p>
//       </section>
//     </div>
//   );
// }

// export default HomePage;

// src/pages/HomePage.jsx

import React from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import ImageSlideshow from '../components/SlideShow';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage-hero">
        <AnimatedTitle text="Explore our Solar System" />
        <p className="homepage-subtitle">A quick information page on the Solar System</p>
      </header>
      <section className="homepage-intro">
        <h2>Welcome to the Solar System Explorer!</h2>
        <p>
          Explore the wonderful world of our Solar System
        </p>
        <p>
          From the small and hot planet of Mercury to the coldest and furthest planet in our Solar System, you can get information of them all!
        </p>
      </section>

      <section className="homepage-slideshow-section mt-12 mb-12">
        <h3 className="text-2xl font-bold text-cyan-400 text-center mb-6">A Glimpse of the Cosmos</h3>
        <div className="flex justify-center">
          <ImageSlideshow />
        </div>
      </section>
    </div>
  );
}

export default HomePage;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import PlanetsPage from './pages/PlanetsPage';
import PlanetDetailPage from './pages/PlanetsDetailPage';
import DwarfPlanetsPage from './pages/DwarfPlanetsPage';
import MoonsPage from './pages/MoonsPage';
import GlossaryPage from './pages/GlossaryPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

import './App.css';
import './index.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        {/* <ParticlesBackground /> */}

        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/planets" element={<PlanetsPage />} />
            <Route path="/planets/:planetId" element={<PlanetDetailPage />} />
            <Route path="/dwarf-planets" element={<DwarfPlanetsPage />} />
            <Route path="/moons" element={<MoonsPage />} />
            <Route path="/glossary" element={<GlossaryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

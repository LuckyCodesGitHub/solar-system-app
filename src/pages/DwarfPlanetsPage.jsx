// src/pages/DwarfPlanetsPage.jsx
import React from 'react';
import PlanetCard from '../components/PlanetCard';
import { solarSystemData } from '../data/solarSystemData';
import './PlanetsPage.css';

function DwarfPlanetsPage() {
  const dwarfPlanets = solarSystemData.filter(item => item.type === 'dwarf-planet');

  return (
    <div className="planets-page">
      <h2>Our Solar System's Dwarf Planets</h2>
      <div className="planet-grid">
        {dwarfPlanets.map(planet => (
          <PlanetCard key={planet.id} planet={planet} />
        ))}
      </div>
    </div>
  );
}

export default DwarfPlanetsPage;
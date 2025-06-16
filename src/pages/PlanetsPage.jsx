// src/pages/PlanetsPage.jsx
import React from 'react';
import PlanetCard from '../components/PlanetCard';
import { solarSystemData } from '../data/solarSystemData';
import './PlanetsPage.css';

function PlanetsPage() {
  const planets = solarSystemData.filter(item => item.type === 'planet'); // <--- THIS LINE IS CRUCIAL

  return (
    <div className="planets-page font-header">
      <h2 className="">Our Solar System's Planets</h2>
      <div className="planet-grid">
        {planets.map(planet => (
          <PlanetCard key={planet.id} planet={planet} />
        ))}
      </div>
    </div>
  );
}

export default PlanetsPage;
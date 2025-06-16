
import React from 'react';
import PlanetCard from '../components/PlanetCard';
import { solarSystemData } from '../data/solarSystemData';
import './PlanetsPage.css';

function MoonsPage() {
  const moons = solarSystemData.filter(item => item.type === 'moon');

  return (
    <div className="planets-page">
      <h2>Our Solar System's Moons</h2>
      <div className="planet-grid">
        {moons.map(moon => (
          <PlanetCard key={moon.id} planet={moon} />
        ))}
      </div>
    </div>
  );
}

export default MoonsPage;
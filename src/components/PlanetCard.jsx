// src/components/PlanetCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './PlanetCard.css';

function PlanetCard({ planet }) {
  return (
    <div className="planet-card">
      <img src={planet.imageDisplayURl} alt={planet.name} className="planet-card-image" />
      <h3 className="planet-card-title">{planet.name}</h3>
      <p className="planet-card-description">{planet.description.substring(0, 100)}...</p>
      <Link to={`/planets/${planet.id}`} className="planet-card-button">
        Learn More
      </Link>
    </div>
  );
}

export default PlanetCard;
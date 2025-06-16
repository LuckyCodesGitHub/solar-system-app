// src/pages/PlanetDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { solarSystemData } from '../data/solarSystemData';
import './PlanetsDetailPage.css';

function PlanetDetailPage() {
  const { planetId } = useParams();
  const planet = solarSystemData.find(p => p.id === planetId);

  if (!planet) {
    return <div className="planet-detail-page-container"><h2>Either the entered URL is incorrect or the celestial object has not got enough data to add to this webpage</h2></div>;
  }

  return (
    <div className="planet-detail-page-container">
      <div className="planet-header">
        <img src={planet.imageUrl} alt={planet.name} className="planet-detail-image" />
        <h1>{planet.name}</h1>
      </div>

      <p className="planet-description">{planet.description}</p>

      <section className="info-section key-facts-section">
        <h3>Key Facts</h3>
        <ul className="key-facts-list">
          {planet.facts.map((fact, index) => (
            <li key={index} className="key-fact-item">{fact}</li>
          ))}
        </ul>
      </section>

      <section className="info-section scientific-data-section">
        <h3>Scientific Data</h3>
        <table className="scientific-data-table">
          <tbody>
            <tr>
              <td><strong>Diameter:</strong></td>
              <td>{planet.diameterKm.toLocaleString()} km</td>
            </tr>
            <tr>
              <td><strong>Orbital Period:</strong></td>
              <td>{planet.orbitalPeriodDays.toLocaleString()} Earth days</td>
            </tr>
            <tr>
              <td><strong>Rotational Period:</strong></td>
              <td>{planet.rotationalPeriodDays.toLocaleString()} Earth days</td>
            </tr>
            <tr>
              <td><strong>Gravity:</strong></td>
              <td>{planet.gravityEarthRatio} G (Earth = 1G)</td>
            </tr>
            <tr>
              <td><strong>Average Temperature:</strong></td>
              <td>{planet.avgTemperatureC}°C</td>
            </tr>
            <tr>
              <td><strong>Number of Moons:</strong></td>
              <td>{planet.numberOfMoons}</td>
            </tr>
            <tr>
              <td><strong>Rings:</strong></td>
              <td>{planet.hasRings ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <td><strong>Atmosphere:</strong></td>
              <td>{planet.atmosphere}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default PlanetDetailPage;
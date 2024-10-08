import React, { useState } from 'react';
import './Maps.css';
import image from './Images/red location sign.png';  // Correct path to the image
import MapComponent from '../components/MapComponent';  // Correct path to the MapComponent
function TechCompanies() {
  const [populationRange, setPopulationRange] = useState(200);  // State to hold the population range

  const handlePopulationChange = (event) => {
    setPopulationRange(event.target.value);  // Update the population range when user changes input
  };
  return (
    <div className="app-container">
      <div className="options">
        <h2>
          <img src={image} alt="description" style={{ width: "90px", height: "auto" }} />
        </h2>
        <label style={{ fontSize: '26px' }}>Select city:</label>
        <select>
          <option value="jerusalem">Jerusalem</option>
          <option value="tel-aviv">Tel Aviv</option>
          <option value="haifa">Haifa</option>
          <option value="ramat gan">Ramat Gan</option>
          <option value="petah tikva">Petah Tikva</option>
          <option value="ashdod">Ashdod</option>
          <option value="beer sheva">Beer Sheva</option>
          <option value="natanya">Natanya</option>
          <option value="eilat">Eilat</option>
          <option value="herzliya">Herzliya</option>
        </select>

        <label style={{ fontSize: '17px' }}>Select population (0 - 500,000):</label>
        <input type="range" min="0" max="500,000" step="10" 
        value={populationRange} 
        onChange={handlePopulationChange}/>
      </div>

      <div className='mapsContainer'>
        <MapComponent populationRange={populationRange}/>
      </div>

    </div>
  );
}

export default TechCompanies;

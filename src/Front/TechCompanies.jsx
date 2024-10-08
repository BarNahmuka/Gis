import React from 'react';
import './Maps.css'; 
import image from './Images/red location sign.png';  // Correct path to the image

function TechCompanies() {
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

        <label style={{ fontSize: '17px' }}>Select population (0 - 200 km):</label>
        <input type="range" min="0" max="200" step="1" />
      </div>

      <div className="tech-companies-container">
        <div className="tech-company">
          <h1>Tech Companies</h1>
          <ul>
            <li>Company A</li>
            <li>Company B</li>
          </ul>
        </div>
        <div className="tech-company">
          <h1>Demographic Population</h1>
          <ul>
            <li>Population A</li>
            <li>Population B</li>
          </ul>
        </div>
        <div className="tech-company">
          <h1>Impact of Tech Distribution on Demographics</h1>
          <ul>
            <li>Impact A</li>
            <li>Impact B</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TechCompanies;

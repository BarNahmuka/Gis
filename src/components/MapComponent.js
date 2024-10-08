/* global L, json_CSVdemographic_2, json_CSVTech_1 */
import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import Autolinker from 'autolinker';

let map1, map2, map3; // Define map instances for each map

const MapComponent = ({ populationRange }) => {  
  const demographicLayerRef = useRef(null); // Reference to store demographic layer

  useEffect(() => {
    if (!map1) {
      // Initialize Map 1 (Display only demographic data)
      map1 = L.map('map1', {
        zoomControl: false,
        maxZoom: 28,
        minZoom: 1,
      }).fitBounds([[29.58558648296286, 31.59799699704964], [33.50312293796286, 37.72679302032426]]);

      L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map1);
    }



    // Remove existing demographic layer before adding the new filtered data
    if (demographicLayerRef.current) {
      map1.removeLayer(demographicLayerRef.current);
    }

    // Add new demographic data filtered based on population range
    demographicLayerRef.current = L.geoJSON(json_CSVdemographic_2, {
      filter: (feature) => {
        const population = feature.properties['סהכ'];
        console.log('Feature Population:', population);  // Log the population of each feature
        return population >= populationRange;  // Filter based on population being greater than or equal to selected range
      },
      pointToLayer: (feature, latlng) => {
        return L.circleMarker(latlng, {
          radius: 4.0,
          fillColor: 'rgba(231,74,72,1.0)',
          color: 'rgba(35,35,35,1.0)',
          weight: 1,
          opacity: 1,
          fillOpacity: 1,
        });
      },
      onEachFeature: pop_CSVdemographic_2,
    }).addTo(map1);
    // Log the population range to see its value
    console.log('Selected Population Range:', populationRange);
  }, [populationRange]);

  // For tech and combined maps, similar logic is followed
  useEffect(() => {
    if (!map2) {
      // Initialize Map 2 (Display only tech company data)
      map2 = L.map('map2', {
        zoomControl: false,
        maxZoom: 28,
        minZoom: 1,
      }).fitBounds([[29.58558648296286, 31.59799699704964], [33.50312293796286, 37.72679302032426]]);

      L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map2);

      // Add tech company data to Map 2
      const techLayer2 = L.geoJSON(json_CSVTech_1, {
        pointToLayer: (feature, latlng) => {
          return L.circleMarker(latlng, {
            radius: 4.0,
            fillColor: 'rgba(243,229,166,1.0)',
            color: 'rgba(35,35,35,1.0)',
            weight: 1,
            opacity: 1,
            fillOpacity: 1
          });
        },
        onEachFeature: pop_CSVTech_1
      }).addTo(map2);
    }

    if (!map3) {
      // Initialize Map 3 (Display both demographic and tech company data)
      map3 = L.map('map3', {
        zoomControl: false,
        maxZoom: 28,
        minZoom: 1,
      }).fitBounds([[29.58558648296286, 31.59799699704964], [33.50312293796286, 37.72679302032426]]);

      L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map3);

      // Add both demographic and tech company data to Map 3
      const demographicLayer3 = L.geoJSON(json_CSVdemographic_2, {
        pointToLayer: (feature, latlng) => {
          return L.circleMarker(latlng, {
            radius: 4.0,
            fillColor: 'rgba(231,74,72,1.0)',
            color: 'rgba(35,35,35,1.0)',
            weight: 1,
            opacity: 1,
            fillOpacity: 1
          });
        },
        onEachFeature: pop_CSVdemographic_2
      }).addTo(map3);

      const techLayer3 = L.geoJSON(json_CSVTech_1, {
        pointToLayer: (feature, latlng) => {
          return L.circleMarker(latlng, {
            radius: 4.0,
            fillColor: 'rgba(243,229,166,1.0)',
            color: 'rgba(35,35,35,1.0)',
            weight: 1,
            opacity: 1,
            fillOpacity: 1
          });
        },
        onEachFeature: pop_CSVTech_1
      }).addTo(map3);
    }
  }, []);  // Initial effect for maps 2 and 3

  // The return statement renders the maps side by side using flexbox
  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      <div id="map1" style={{ height: '80vh', width: '33%', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ zIndex: '1000', width: 'auto', backgroundColor: 'white' }}>Demographic Data</h1>
      </div>
      <div id="map2" style={{ height: '80vh', width: '33%', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ zIndex: '1000', width: 'auto', backgroundColor: 'white' }}>Tech Company Data</h1>
      </div>
      <div id="map3" style={{ height: '80vh', width: '33%', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ zIndex: '1000', width: 'auto', backgroundColor: 'white' }}>Both Demographic and Tech Company Data</h1>
      </div>
    </div>
  );
};

// Popup function for tech data
const pop_CSVTech_1 = (feature, layer) => {
  const popupContent = `
    <table>
      <tr><td><strong>מספר חברה:</strong></td><td>${feature.properties['מספר חברה'] !== null ? Autolinker.link(feature.properties['מספר חברה'].toLocaleString()) : ''}</td></tr>
      <tr><td><strong>שם חברה:</strong></td><td>${feature.properties['שם חברה'] !== null ? Autolinker.link(feature.properties['שם חברה'].toLocaleString()) : ''}</td></tr>
      <tr><td><strong>שם באנגלית:</strong></td><td>${feature.properties['שם באנגלית'] !== null ? Autolinker.link(feature.properties['שם באנגלית'].toLocaleString()) : ''}</td></tr>
      <tr><td><strong>סטטוס חברה:</strong></td><td>${feature.properties['סטטוס חברה'] !== null ? Autolinker.link(feature.properties['סטטוס חברה'].toLocaleString()) : ''}</td></tr>
      <!-- Add more fields as needed -->
    </table>
  `;
  layer.bindPopup(popupContent);
};

// Popup function for demographic data
const pop_CSVdemographic_2 = (feature, layer) => {
  const popupContent = `
    <table>
      <tr><td><strong>שם ישוב:</strong></td><td>${feature.properties['שם_ישוב'] !== null ? Autolinker.link(feature.properties['שם_ישוב'].toLocaleString()) : ''}</td></tr>
      <tr><td><strong>סה"כ:</strong></td><td>${feature.properties['סהכ'] !== null ? Autolinker.link(feature.properties['סהכ'].toLocaleString()) : ''}</td></tr>
      <tr><td><strong>גיל 0-5:</strong></td><td>${feature.properties['גיל_0_5'] !== null ? Autolinker.link(feature.properties['גיל_0_5'].toLocaleString()) : ''}</td></tr>
      <tr><td><strong>גיל 6-18:</strong></td><td>${feature.properties['גיל_6_18'] !== null ? Autolinker.link(feature.properties['גיל_6_18'].toLocaleString()) : ''}</td></tr>
      <tr><td><strong>גיל 19-45:</strong></td><td>${feature.properties['גיל_19_45'] !== null ? Autolinker.link(feature.properties['גיל_19_45'].toLocaleString()) : ''}</td></tr>
      <tr><td><strong>Latitude:</strong></td><td>${feature.properties['latitude'] !== null ? Autolinker.link(feature.properties['latitude'].toLocaleString()) : ''}</td></tr>
      <tr><td><strong>Longitude:</strong></td><td>${feature.properties['longitude'] !== null ? Autolinker.link(feature.properties['longitude'].toLocaleString()) : ''}</td></tr>
    </table>
  `;
  layer.bindPopup(popupContent);
};

export default MapComponent;

/* global L, json_CSVdemographic_2, json_CSVTech_1 */
import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  useEffect(() => {
    let map;

    if (map) {
      map.remove(); // Remove the previous map instance if it exists
    }

    // Initialize the map
    map = L.map('map', {
      zoomControl: false,
      maxZoom: 28,
      minZoom: 1,
    }).fitBounds([[29.58558648296286, 31.59799699704964], [33.50312293796286, 37.72679302032426]]);

    // Add a tile layer
    L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Layer for CSVdemographic_2 with population filtering
    const demographicLayer = L.geoJSON(json_CSVdemographic_2, {
      pointToLayer: (feature, latlng) => {
        const population = feature.properties['סהכ'];
        if (population > 50000) {
          return L.circleMarker(latlng, {
            radius: 4.0,
            fillColor: 'rgba(231,74,72,1.0)',
            color: 'rgba(35,35,35,1.0)',
            weight: 1,
            opacity: 1,
            fillOpacity: 1
          });
        }
      },
      onEachFeature: function (feature, layer) {
        // Add popups or other interactions here
      }
    });
    map.addLayer(demographicLayer);

    // Layer for CSVTech_1
    const techLayer = L.geoJSON(json_CSVTech_1, {
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
      onEachFeature: function (feature, layer) {
        // Add popups or other interactions here
      }
    });
    map.addLayer(techLayer);

    // Cleanup function to avoid reinitializing the map
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default MapComponent;

/* global L, json_CSVdemographic_2, json_CSVTech_1 */
import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import Autolinker from 'autolinker';  // Import Autolinker

let map; // Define map outside to prevent reinitialization

const MapComponent = () => {
  useEffect(() => {
    if (!map) {
      // Initialize the map only if it doesn't exist
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

      // Function to create the popup content for CSVTech_1 features
      const pop_CSVTech_1 = (feature, layer) => {
        const popupContent = `
        <table>
          <tr><td><strong>מספר חברה:</strong></td><td>${feature.properties['מספר חברה'] !== null ? Autolinker.link(feature.properties['מספר חברה'].toLocaleString()) : ''}</td></tr>
          <tr><td><strong>שם חברה:</strong></td><td>${feature.properties['שם חברה'] !== null ? Autolinker.link(feature.properties['שם חברה'].toLocaleString()) : ''}</td></tr>
          <tr><td><strong>שם באנגלית:</strong></td><td>${feature.properties['שם באנגלית'] !== null ? Autolinker.link(feature.properties['שם באנגלית'].toLocaleString()) : ''}</td></tr>
          <tr><td><strong>סטטוס חברה:</strong></td><td>${feature.properties['סטטוס חברה'] !== null ? Autolinker.link(feature.properties['סטטוס חברה'].toLocaleString()) : ''}</td></tr>
          <tr><td><strong>תאריך התאגדות:</strong></td><td>${feature.properties['תאריך התאגדות'] !== null ? Autolinker.link(feature.properties['תאריך התאגדות'].toLocaleString()) : ''}</td></tr>
          <tr><td><strong>חברה ממשלתית:</strong></td><td>${feature.properties['חברה ממשלתית'] !== null ? Autolinker.link(feature.properties['חברה ממשלתית'].toLocaleString()) : ''}</td></tr>
          <tr><td><strong>שנה אחרונה של דוח שנתי (שהוגש):</strong></td><td>${feature.properties['שנה אחרונה של דוח שנתי (שהוגש)'] !== null ? Autolinker.link(feature.properties['שנה אחרונה של דוח שנתי (שהוגש)'].toLocaleString()) : ''}</td></tr>
          <tr><td><strong>שם עיר:</strong></td><td>${feature.properties['שם עיר'] !== null ? Autolinker.link(feature.properties['שם עיר'].toLocaleString()) : ''}</td></tr>
          <tr><td><strong>שם רחוב:</strong></td><td>${feature.properties['שם רחוב'] !== null ? Autolinker.link(feature.properties['שם רחוב'].toLocaleString()) : ''}</td></tr>
          <tr><td><strong>מספר בית:</strong></td><td>${feature.properties['מספר בית'] !== null ? Autolinker.link(feature.properties['מספר בית'].toLocaleString()) : ''}</td></tr>
          <tr><td><strong>מיקוד:</strong></td><td>${feature.properties['מיקוד'] !== null ? Autolinker.link(feature.properties['מיקוד'].toLocaleString()) : ''}</td></tr>
          <tr><td><strong>קוד סטטוס חברה:</strong></td><td>${feature.properties['קוד סטטוס חברה'] !== null ? Autolinker.link(feature.properties['קוד סטטוס חברה'].toLocaleString()) : ''}</td></tr>
          <tr><td><strong>קוד ישוב:</strong></td><td>${feature.properties['קוד ישוב'] !== null ? Autolinker.link(feature.properties['קוד ישוב'].toLocaleString()) : ''}</td></tr>
          <tr><td><strong>Latitude:</strong></td><td>${feature.properties['latitude'] !== null ? Autolinker.link(feature.properties['latitude'].toLocaleString()) : ''}</td></tr>
          <tr><td><strong>Longitude:</strong></td><td>${feature.properties['longitude'] !== null ? Autolinker.link(feature.properties['longitude'].toLocaleString()) : ''}</td></tr>
        </table>
      `;
      
        layer.bindPopup(popupContent);
      };

      // Function to create the popup content for CSVdemographic_2 features
      const pop_CSVdemographic_2 = (feature, layer) => {
        const popupContent = `
          <table>
            <tr>
              <td><strong>שם ישוב:</strong></td>
              <td>${feature.properties['שם_ישוב'] !== null ? Autolinker.link(feature.properties['שם_ישוב'].toLocaleString()) : ''}</td>
            </tr>
            <tr>
              <td><strong>סה"כ:</strong></td>
              <td>${feature.properties['סהכ'] !== null ? Autolinker.link(feature.properties['סהכ'].toLocaleString()) : ''}</td>
            </tr>
            <tr>
              <td><strong>גיל 0-5:</strong></td>
              <td>${feature.properties['גיל_0_5'] !== null ? Autolinker.link(feature.properties['גיל_0_5'].toLocaleString()) : ''}</td>
            </tr>
            <tr>
              <td><strong>גיל 6-18:</strong></td>
              <td>${feature.properties['גיל_6_18'] !== null ? Autolinker.link(feature.properties['גיל_6_18'].toLocaleString()) : ''}</td>
            </tr>
            <tr>
              <td><strong>גיל 19-45:</strong></td>
              <td>${feature.properties['גיל_19_45'] !== null ? Autolinker.link(feature.properties['גיל_19_45'].toLocaleString()) : ''}</td>
            </tr>
            <tr>
              <td><strong>גיל 46-55:</strong></td>
              <td>${feature.properties['גיל_46_55'] !== null ? Autolinker.link(feature.properties['גיל_46_55'].toLocaleString()) : ''}</td>
            </tr>
            <tr>
              <td><strong>גיל 56-64:</strong></td>
              <td>${feature.properties['גיל_56_64'] !== null ? Autolinker.link(feature.properties['גיל_56_64'].toLocaleString()) : ''}</td>
            </tr>
            <tr>
              <td><strong>גיל 65+:</strong></td>
              <td>${feature.properties['גיל_65_פלוס'] !== null ? Autolinker.link(feature.properties['גיל_65_פלוס'].toLocaleString()) : ''}</td>
            </tr>
            <tr>
              <td><strong>Latitude:</strong></td>
              <td>${feature.properties['latitude'] !== null ? Autolinker.link(feature.properties['latitude'].toLocaleString()) : ''}</td>
            </tr>
            <tr>
              <td><strong>Longitude:</strong></td>
              <td>${feature.properties['longitude'] !== null ? Autolinker.link(feature.properties['longitude'].toLocaleString()) : ''}</td>
            </tr>
          </table>
        `;
        layer.bindPopup(popupContent);
      };
      

      // Add GeoJSON data for CSVTech_1 with custom popup
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
        onEachFeature: pop_CSVTech_1  // Attach the custom popup to each feature
      });
      map.addLayer(techLayer);

      // Add GeoJSON data for CSVdemographic_2 with custom popup
      const demographicLayer = L.geoJSON(json_CSVdemographic_2, {
        pointToLayer: (feature, latlng) => {
          return L.circleMarker(latlng, {
            radius: 4.0,
            fillColor: 'rgba(231,74,72,1.0)',  // Set a different color for demographic markers
            color: 'rgba(35,35,35,1.0)',
            weight: 1,
            opacity: 1,
            fillOpacity: 1
          });
        },
        onEachFeature: pop_CSVdemographic_2  // Attach the custom popup to each demographic feature
      });
      map.addLayer(demographicLayer);
    }

    // Cleanup function to avoid reinitializing the map
    return () => {
      if (map) {
        map.remove(); // Remove the map instance on unmount
        map = null;
      }
    };
  }, []);

  return <div id="map" style={{ height: '80vh', width: '100%' }}></div>;
};

export default MapComponent;

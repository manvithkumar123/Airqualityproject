import React, { useEffect } from 'react';
import './map.css';

const Map = () => {
  useEffect(() => {
    // Add Leaflet CSS
    const leafletCss = document.createElement('link');
    leafletCss.rel = 'stylesheet';
    leafletCss.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
    document.head.appendChild(leafletCss);

    // Add Leaflet JS
    const leafletScript = document.createElement('script');
    leafletScript.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
    leafletScript.async = true;
    leafletScript.onload = () => {
      const OSM_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const OSM_ATTRIB =
        '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
      const osmLayer = window.L.tileLayer(OSM_URL, { attribution: OSM_ATTRIB });

      const WAQI_URL =
        'https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=12b2d416f8a15d6aa03b23ae3bbd71a30d99cdcf';
      const WAQI_ATTR =
        'Air Quality Tiles &copy; <a href="https://waqi.info">waqi.info</a>';
      const waqiLayer = window.L.tileLayer(WAQI_URL, { attribution: WAQI_ATTR });

      const map = window.L.map('map').setView([51.505, -0.09], 11);
      map.addLayer(osmLayer);
      map.addLayer(waqiLayer);
    };
    document.body.appendChild(leafletScript);

    return () => {
      document.head.removeChild(leafletCss);
      document.body.removeChild(leafletScript);
    };
  }, []);

  return (
    <div>
      <div className="maps_page">
        <h1>Maps</h1>
        <div className="map_background">
        <div id="map" />
        <div className="colour_bg">
            <ul>
                <li>0-50 <div className="colour" style={{backgroundColor:"green"}}></div></li>
                <li>51-100 <div className="colour" style={{backgroundColor:"yellow"}}></div></li>
                <li>101-150 <div className="colour" style={{backgroundColor:"orange"}}></div></li>
                <li>151-200 <div className="colour" style={{backgroundColor:"red"}}></div></li>
                <li>201-300 <div className="colour" style={{backgroundColor:"purple"}}></div></li>
                <li>301+ <div className="colour" style={{backgroundColor:"maroon"}}></div></li>
            </ul>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Map;
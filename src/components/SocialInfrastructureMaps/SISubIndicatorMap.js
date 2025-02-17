import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-splitmap';
import 'leaflet-defaulticon-compatibility';
import L from 'leaflet';

import { Box, Typography } from '@mui/material';

const ChangeZoomPosition = () => {
  const map = useMap();

  useEffect(() => {
    // Remove existing zoom controls before adding a new one
    const existingZoomControl = map.zoomControl;
    if (existingZoomControl) {
      map.removeControl(existingZoomControl);
    }

    // Add new zoom control
    const zoomControl = L.control.zoom({ position: 'topright' });
    zoomControl.addTo(map);

    return () => {
      map.removeControl(zoomControl); // Cleanup when component unmounts
    };
  }, [map]);

  return null;
};



const MobileLegend = () => (
  <Box
    sx={{
      background: 'white',
      padding: 2,
      borderRadius: 1,
      boxShadow: 1,
      fontSize: '14px',
      marginTop: 2,
      color: 'black'
    }}
  >
    <Typography variant="subtitle1" fontWeight="bold">
      Indikator Allgemeinmediziner:innen
    </Typography>
    <Typography variant="body2" sx={{ color: 'gray' }}>
      inkl. Spillover Effekten
    </Typography>
    <Box display="flex" alignItems="center" mt={1}>
      <Box sx={{ width: 18, height: 18, background: '#fde7f3', mr: 1 }} />
      <span>0</span>
    </Box>
    <Box display="flex" alignItems="center" mt={1}>
      <Box sx={{ width: 18, height: 18, background: '#cfeee9', mr: 1 }} />
      <span>&lt;3</span>
    </Box>
    <Box display="flex" alignItems="center" mt={1}>
      <Box sx={{ width: 18, height: 18, background: '#64b6ac', mr: 1 }} />
      <span>3-5</span>
    </Box>
    <Box display="flex" alignItems="center" mt={1}>
      <Box sx={{ width: 18, height: 18, background: '#397290', mr: 1 }} />
      <span>5-7</span>
    </Box>
    <Box display="flex" alignItems="center" mt={1}>
      <Box sx={{ width: 18, height: 18, background: '#002d40', mr: 1 }} />
      <span>&gt;7</span>
    </Box>
  </Box>
);

const DesktopLegend = () => {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: 'topleft' });

    legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'legend');
      div.innerHTML = `
        <div style="background: white; color: black; padding: 8px; border-radius: 6px; box-shadow: 0px 0px 4px rgba(0,0,0,0.3); font-size: 14px;">
          <strong>Indikator Allgemeinmediziner:innen</strong>
          <div style="color: gray; font-size: 12px;">inkl. Spillover Effekten</div>
          <div style="display: flex; align-items: center; margin-top: 6px;">
            <div style="width: 18px; height: 18px; background: #fde7f3; margin-right: 8px;"></div>
            <span>0</span>
          </div>
          <div style="display: flex; align-items: center; margin-top: 6px;">
            <div style="width: 18px; height: 18px; background: #cfeee9; margin-right: 8px;"></div>
            <span>&lt;3</span>
          </div>
          <div style="display: flex; align-items: center; margin-top: 6px;">
            <div style="width: 18px; height: 18px; background: #64b6ac; margin-right: 8px;"></div>
            <span>3-5</span>
          </div>
          <div style="display: flex; align-items: center; margin-top: 6px;">
            <div style="width: 18px; height: 18px; background: #397290; margin-right: 8px;"></div>
            <span>5-7</span>
          </div>
          <div style="display: flex; align-items: center; margin-top: 6px;">
            <div style="width: 18px; height: 18px; background: #002d40; margin-right: 8px;"></div>
            <span>&gt;7</span>
          </div>
        </div>
      `;
      return div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, [map]);

  return null;
};

const SISubIndicatorMap = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 540);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 540);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // State for GeoJSON data
  const [geojsonData, setGeojsonData] = useState(null);
  const [minFL, setMinFL] = useState(null);
  const [maxFL, setMaxFL] = useState(null);
  const mapRef = useRef(null);

  const jsonDataPath = `${process.env.PUBLIC_URL}/data/urban_rural_wgs84_dissgem.geojson`;
  
  // Fetch the GeoJSON data
  useEffect(() => {
    fetch(jsonDataPath)
      .then((response) => response.json())
      .then((data) => {
        setGeojsonData(data);
        
        const allFLValues = data.features.map(feature => feature.properties.FL);
        setMinFL(Math.min(...allFLValues));
        setMaxFL(Math.max(...allFLValues));
      })
      .catch((error) => console.error('Error loading GeoJSON:', error));
  }, [jsonDataPath]);

  const getColor = (flValue) => {
    if (minFL !== null && maxFL !== null) {
      const normalizedValue = (flValue - minFL) / (maxFL - minFL);
  
      if (normalizedValue <= 0.03) {
        return '#fde7f3'; 
      } else if (normalizedValue <= 0.2) {
        return '#cfeee9';
      } else if (normalizedValue <= 0.4) {
        return '#64b6ac';
      } else if (normalizedValue <= 0.65) {
        return '#397290';
      } else {
        return '#002d40';
      }
    }
    return '#ccc'; 
};
  

  // Function to style each feature
  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      layer.setStyle({
        fillColor: getColor(feature.properties.FL),
        fillOpacity: 0.7,
        color: '#333',
        weight: 0.5
      });

      // Bind popup
      layer.on({
        click: () => {
          layer.bindPopup(`
            <b>ID:</b> ${feature.properties.id2}<br>
            <b>Gemeinde:</b> ${feature.properties._GEMNAME}<br>
            <b>Bundesland:</b> ${feature.properties.BL}<br>
            <b>Fläche:</b> ${feature.properties.FL}
          `).openPopup();
        }
      });
    }
  };

  return (
    <Box sx={{ marginTop: 4 }}>
      <MapContainer
          center={isMobile ? [48.5, 13.5] : [48.5, 14.5]}
          zoom={isMobile ? 6 : 7}
          minZoom={5}
          maxZoom={12}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          touchZoom={true}
          keyboard={false}
          dragging={true}
          zoomControl={false}
          maxBounds={[[45.5, 9.0], [49.5, 17.5]]}
          maxBoundsViscosity={1.0}
          attributionControl={false}
          style={{ height: '480px', width: '100%', background: '#bfbfbf', borderRadius: '8px', overflow: 'hidden', color: 'black'}}
          ref={mapRef}
      >
          {geojsonData && <GeoJSON data={geojsonData} onEachFeature={onEachFeature} />}
          <ChangeZoomPosition />
          {!isMobile && <DesktopLegend />}
      </MapContainer>
      {isMobile && <MobileLegend />}
    </Box>
  );
};

export default SISubIndicatorMap;
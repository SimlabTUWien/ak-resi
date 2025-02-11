
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

// const Legend = () => {
//   const map = useMap();

//   useEffect(() => {
//     const legend = L.control({ position: 'topleft' });

//     legend.onAdd = () => {
//       const div = L.DomUtil.create('div', 'legend');
//       div.innerHTML = `
//         <div style="background: white; padding: 8px; border-radius: 6px; box-shadow: 0px 0px 4px rgba(0,0,0,0.3); font-size: 14px;">
//           <strong>Gemeinden nach Gemeindegrößen</strong>
//           <div style="display: flex; align-items: center; margin-top: 6px;">
//             <div style="width: 18px; height: 18px; background: #cfe2c3; margin-right: 8px;"></div>
//             <span>unter 2.500 Einwohner:innen</span>
//           </div>
//           <div style="display: flex; align-items: center; margin-top: 6px;">
//             <div style="width: 18px; height: 18px; background: #b3b3d9; margin-right: 8px;"></div>
//             <span>2.500 - 10.000 Einwohner:innen</span>
//           </div>
//           <div style="display: flex; align-items: center; margin-top: 6px;">
//             <div style="width: 18px; height: 18px; background: #9674ab; margin-right: 8px;"></div>
//             <span>10.000 - 100.000 Einwohner:innen</span>
//           </div>
//           <div style="display: flex; align-items: center; margin-top: 6px;">
//             <div style="width: 18px; height: 18px; background: #3e223b; margin-right: 8px;"></div>
//             <span>über 100.000 Einwohner:innen</span>
//           </div>
//         </div>
//       `;
//       return div;
//     };

//     legend.addTo(map);

//     return () => {
//       legend.remove();
//     };
//   }, [map]);

//   return null;
// };

const MobileLegend = () => (
  <Box
    sx={{
      background: 'white',
      padding: 2,
      borderRadius: 1,
      boxShadow: 1,
      fontSize: '14px',
      marginTop: 2,
    }}
  >
    <Typography variant="subtitle1" fontWeight="bold">
      Gemeinden nach Gemeindegrößen
    </Typography>
    <Box display="flex" alignItems="center" mt={1}>
      <Box sx={{ width: 18, height: 18, background: '#cfe2c3', mr: 1 }} />
      <span>unter 2.500 Einwohner:innen</span>
    </Box>
    <Box display="flex" alignItems="center" mt={1}>
      <Box sx={{ width: 18, height: 18, background: '#b3b3d9', mr: 1 }} />
      <span>2.500 - 10.000 Einwohner:innen</span>
    </Box>
    <Box display="flex" alignItems="center" mt={1}>
      <Box sx={{ width: 18, height: 18, background: '#9674ab', mr: 1 }} />
      <span>10.000 - 100.000 Einwohner:innen</span>
    </Box>
    <Box display="flex" alignItems="center" mt={1}>
      <Box sx={{ width: 18, height: 18, background: '#3e223b', mr: 1 }} />
      <span>über 100.000 Einwohner:innen</span>
    </Box>
  </Box>
);

const DesktopLegend = () => {
  const map = useMap(); // ✅ Always inside MapContainer

  useEffect(() => {
    const legend = L.control({ position: 'topleft' });

    legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'legend');
      div.innerHTML = `
        <div style="background: white; padding: 8px; border-radius: 6px; box-shadow: 0px 0px 4px rgba(0,0,0,0.3); font-size: 14px;">
          <strong>Gemeinden nach Gemeindegrößen</strong>
          <div style="display: flex; align-items: center; margin-top: 6px;">
            <div style="width: 18px; height: 18px; background: #cfe2c3; margin-right: 8px;"></div>
            <span>unter 2.500 Einwohner:innen</span>
          </div>
          <div style="display: flex; align-items: center; margin-top: 6px;">
            <div style="width: 18px; height: 18px; background: #b3b3d9; margin-right: 8px;"></div>
            <span>2.500 - 10.000 Einwohner:innen</span>
          </div>
          <div style="display: flex; align-items: center; margin-top: 6px;">
            <div style="width: 18px; height: 18px; background: #9674ab; margin-right: 8px;"></div>
            <span>10.000 - 100.000 Einwohner:innen</span>
          </div>
          <div style="display: flex; align-items: center; margin-top: 6px;">
            <div style="width: 18px; height: 18px; background: #3e223b; margin-right: 8px;"></div>
            <span>über 100.000 Einwohner:innen</span>
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


const CommunitySizeChart = ({ mapboxAccessToken }) => {
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

  // Fetch the GeoJSON data
  useEffect(() => {
    fetch('./urban_rural_wgs84_dissgem.geojson')
      .then((response) => response.json())
      .then((data) => {
        setGeojsonData(data);
        
        const allFLValues = data.features.map(feature => feature.properties.FL);
        setMinFL(Math.min(...allFLValues));
        setMaxFL(Math.max(...allFLValues));
      })
      .catch((error) => console.error('Error loading GeoJSON:', error));
  }, []);

  const getColor = (flValue) => {
    if (minFL !== null && maxFL !== null) {
      const normalizedValue = (flValue - minFL) / (maxFL - minFL); // Normalize between 0 and 1
  
      if (normalizedValue <= 0.1) {
        return '#cfe2c3'; // Lowest 30%
      } else if (normalizedValue <= 0.30) {
        return '#b3b3d9';
      } else if (normalizedValue <= 0.75) {
        return '#9674ab';
      } else {
        return '#3e223b';
      }
    }
    return '#ccc'; // Default color if minFL or maxFL is not defined
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
    <Box
      sx={{
        width: '100%',
        margin: 'auto',
        padding: 2,
        backgroundColor: '#f9f9f9',
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography style={{margin: "4px 0 20px"}}><strong>Wo wohnt Österreich: Gemeindegrößenklassenerklärung</strong></Typography>
      <Typography >In vielen regionalen Statistiken werden die österreichischen Gemeinden in Gemeindegrößenklassen eingeteilt. Sechs österreichische Landeshauptstädte haben über 100.000 Einwohner:innen (Wien, Graz, Linz, Salzburg, Klagenfurt und Innsbruck). Insgesamt leben etwas mehr als 20% aller Bewohner:innen Österreichs in diesen Städten, ähnlich viele wie in den 1.366 Gemeinden mit weniger als 2.500 Einwohner:innen. Mehr als 30% der Österreicher:innen leben in den 641 Gemeinden mit 2.500-10.000 Einwohner:innen und 27% in Klein- und Mittelstädten.</Typography>
      
      {/* Leaflet Map */}
      {/* <Box sx={{ marginTop: 3 }}>
        <MapContainer
          bounds={[[46.372276, 9.530952], [49.021162, 17.160568]]} 
          zoom={8}
          minZoom={5}
          maxZoom={12}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          touchZoom={true}
          keyboard={false}
          dragging={true}
          zoomControl={false}
          maxBounds={[[45.5, 8.5], [49.5, 17.5]]}
          maxBoundsViscosity={1.0}
          attributionControl={false}
          style={{ height: '480px', width: '100%', background: '#f4f4f4', borderRadius: '8px', overflow: 'hidden' }}
          ref={mapRef}
        >
          {geojsonData && <GeoJSON data={geojsonData} onEachFeature={onEachFeature} />}
          <ChangeZoomPosition />
          {!isMobile && <DesktopLegend />}
        </MapContainer>
        {isMobile && <MobileLegend />}
      </Box> */}
      <Box sx={{ marginTop: 3 }}>
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
            style={{ height: '480px', width: '100%', background: '#f4f4f4', borderRadius: '8px', overflow: 'hidden' }}
            ref={mapRef}
          >
            {geojsonData && <GeoJSON data={geojsonData} onEachFeature={onEachFeature} />}
            <ChangeZoomPosition />
            {!isMobile && <DesktopLegend />}
          </MapContainer>
          {isMobile && <MobileLegend />}
        </Box>
    </Box>
  );
};

export default CommunitySizeChart;

import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, GeoJSON, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-splitmap';
import 'leaflet-defaulticon-compatibility';
import L from 'leaflet';

import { Box, Typography } from '@mui/material';

const getIndicatorValue = (subIndicator, siMode) => {
  const propertyMap = {
    1: { so_sub: "EI_Allgemeinmediziner:innen mit Spillover", no_so_sub: "EI_Allgemeinmediziner:innen ohne Spillover" },
    2: { so_sub: "EI_Krankenhäuser", no_so_sub: "EI_Krankenhäuser" },
    3: { so_sub: "EI_Pflegeheime mit Spillover", no_so_sub: "EI_Pflegeheime ohne Spillover" },
    4: { so_sub: "EI_Kinderbetreuung mit Spillover", no_so_sub: "EI_Kinderbetreuung ohne Spillover" },
    5: { so_sub: "EI_Schulen mit Spillover", no_so_sub: "EI_Schulen ohne Spillover" },
    6: { so_sub: "EI_Sozialeinrichtungen mit Spillover", no_so_sub: "EI_Sozialeinrichtungen ohne Spillover" },
  };

  return propertyMap[subIndicator]?.[siMode] || null;
};


const valuesMap = (subIndicator, siMode) => ({
  1: {
    indicatorValue: getIndicatorValue(subIndicator, siMode),
    spillover: siMode,
    indicatorLabel_de: "Allgemeinmediziner:innen", 
    indicatorLabel_en: "General Practitioners"  
  },
  2: {
    indicatorValue: getIndicatorValue(subIndicator, siMode),
    spillover: siMode,
    indicatorLabel_de: "Krankenhäuser", 
    indicatorLabel_en: "Hospitals"
  },
  3: {
    indicatorValue: getIndicatorValue(subIndicator, siMode),
    spillover: siMode,
    indicatorLabel_de: "Pflegeheime", 
    indicatorLabel_en: "Nursing Homes"
  },
  4: {
    indicatorValue: getIndicatorValue(subIndicator, siMode),
    spillover: siMode,
    indicatorLabel_de: "Kindergärten", 
    indicatorLabel_en: "Kindergartens"
  },
  5: {
    indicatorValue: getIndicatorValue(subIndicator, siMode),
    spillover: siMode,
    indicatorLabel_de: "Schulen", 
    indicatorLabel_en: "Schools"
  },
  6: {
    indicatorValue: getIndicatorValue(subIndicator, siMode),
    spillover: siMode,
    indicatorLabel_de: "Andere Solzialeinrichtungen", 
    indicatorLabel_en: "Other Social Institutions"
  }
});

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



const MobileLegend = ({ selectedValue }) => {
  
  const subtitle = selectedValue?.spillover === "so_sub" ? "inkl. Spillover Effekten" : "ohne Spillover Effekten";

  return (
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
        Indikator ${selectedValue?.indicatorLabel_de}
      </Typography>
      <Typography variant="body2" sx={{ color: 'gray' }}>
        {subtitle}
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
};

const DesktopLegend = ({ selectedValue }) => {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: 'topleft' });

    const subtitle = selectedValue?.spillover === "so_sub" ? "inkl. Spillover Effekten" : "ohne Spillover Effekten";

    legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'legend');
      div.innerHTML = `
        <div style="min-width:200px; background: white; color: black; padding: 8px; border-radius: 6px; box-shadow: 0px 0px 4px rgba(0,0,0,0.3); font-size: 14px;">
          <strong>Indikator ${selectedValue?.indicatorLabel_de}</strong>
          <div style="color: gray; font-size: 12px;">${subtitle}</div>
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
  }, [map, selectedValue]);

  return null;
};

const SISubIndicatorMap = ({ siMode, subIndicator }) => {
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
  const mapRef = useRef(null);

  const selectedValue = valuesMap(subIndicator, siMode)[subIndicator];

if (!selectedValue) {
  console.error("selectedValue is undefined. Check subIndicator:", subIndicator);
}

  const jsonDataPath = `${process.env.PUBLIC_URL}/data/pg_gen250_ak_resi_wgs84.geojson`;
  
  // Fetch the GeoJSON data
  useEffect(() => {
    fetch(jsonDataPath)
      .then((response) => response.json())
      .then((data) => {
        setGeojsonData(data);
      })
      .catch((error) => console.error('Error loading GeoJSON:', error));
  }, [jsonDataPath]);

  const getColor = (feature) => {
    const value = feature.properties[selectedValue?.indicatorValue];
    if (value === undefined) return "#ccc"; // Default color if no data

    if (value === 0) return "#fde7f3";
    if (value < 3) return "#cfeee9";
    if (value < 5) return "#64b6ac";
    if (value < 7) return "#397290";
    return "#002d40";
  };
  

  // Function to style each feature
  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      layer.setStyle({
        fillColor: getColor(feature),
        fillOpacity: 0.7,
        color: '#333',
        weight: 0.5
      });

      // Bind popup
      layer.on({
        click: () => {
          layer.bindPopup(`
            <b>Gemeindekennzahl:</b> ${feature.properties.GKZ_2}<br>
            <b>Gemeinde:</b> ${feature.properties.PGName}<br>
            <b>${selectedValue?.indicatorLabel_de}:</b> ${feature.properties[selectedValue?.indicatorValue]}<br>
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
          style={{ height: '480px', width: '100%', background: '#f2f0f0', borderRadius: '8px', overflow: 'hidden', color: 'black'}}
          ref={mapRef}
      >
          {geojsonData && <GeoJSON data={geojsonData} onEachFeature={onEachFeature} />}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          />
          <ChangeZoomPosition />
          {!isMobile && <DesktopLegend selectedValue={selectedValue} />}
      </MapContainer>
      {isMobile && <MobileLegend selectedValue={selectedValue} />}
    </Box>
  );
};

export default SISubIndicatorMap;
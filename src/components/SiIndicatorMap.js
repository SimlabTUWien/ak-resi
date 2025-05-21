import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapContainer, GeoJSON, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-splitmap';
import 'leaflet-defaulticon-compatibility';
import L from 'leaflet';

import { Box, Typography } from '@mui/material';

const translations = {
    DE: {
        title: "Indikator",
        name: "Gemeinde",
        gkz: "Gemeindekennzahl"
    },
    EN : {
        title: "Indicator",
        name: "Municipality",
        gkz: "Municipality code"
    }
}

const getIndicatorValue = (indicator, siMode) => {
  const propertyMap = {
    1: { no_so: "GI_Gesamtindikator ohne Spillover",  so_miv: "GI_Gesamtindikator mit Spillover",  so_oev: "GI_Gesamtindikator mit Spillover" },
    2: { no_so: "EI_Allgemeinmediziner:innen ohne Spillover",  so_miv: "EI_Allgemeinmediziner:innen mit Spillover",  so_oev: "EI_Allgemeinmediziner:innen mit Spillover" },
    3: { no_so: "EI_Krankenhäuser", so_miv: "EI_Krankenhäuser", so_oev: "EI_Krankenhäuser" },
    4: { no_so: "EI_Pflegeheime ohne Spillover", so_miv: "EI_Pflegeheime mit Spillover", so_oev: "EI_Pflegeheime mit Spillover" },
    5: { no_so: "EI_Kinderbetreuung ohne Spillover", so_miv: "EI_Kinderbetreuung mit Spillover", so_oev: "EI_Kinderbetreuung mit Spillover" },
    6: { no_so: "EI_Schulen ohne Spillover", so_miv: "EI_Schulen mit Spillover", so_oev: "EI_Schulen mit Spillover" },
    7: { no_so: "EI_Sozialeinrichtungen ohne Spillover", so_miv: "EI_Sozialeinrichtungen mit Spillover", so_oev: "EI_Sozialeinrichtungen mit Spillover" },
  };

  return propertyMap[indicator]?.[siMode] || null;
};

const valuesMap = (indicator, siMode) => ({
    1: {
        indicatorValue: getIndicatorValue(indicator, siMode),
        spillover: siMode,
        indicatorLabel_de: "Alle Sozialen Infrastrukturen", 
        indicatorLabel_en: "All Social Infrastructures"  
    },
    2: {
        indicatorValue: getIndicatorValue(indicator, siMode),
        spillover: siMode,
        indicatorLabel_de: "Allgemeinmediziner:innen", 
        indicatorLabel_en: "General Practitioners"  
    },
    3: {
        indicatorValue: getIndicatorValue(indicator, siMode),
        spillover: siMode,
        indicatorLabel_de: "Krankenhäuser", 
        indicatorLabel_en: "Hospitals"
    },
    4: {
        indicatorValue: getIndicatorValue(indicator, siMode),
        spillover: siMode,
        indicatorLabel_de: "Pflegeheime", 
        indicatorLabel_en: "Nursing Homes"
    },
    5: {
        indicatorValue: getIndicatorValue(indicator, siMode),
        spillover: siMode,
        indicatorLabel_de: "Kindergärten", 
        indicatorLabel_en: "Kindergartens"
    },
    6: {
        indicatorValue: getIndicatorValue(indicator, siMode),
        spillover: siMode,
        indicatorLabel_de: "Schulen", 
        indicatorLabel_en: "Schools"
    },
    7: {
        indicatorValue: getIndicatorValue(indicator, siMode),
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

const MobileLegend = ({ selectedLanguage }) => {
  
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
      <Typography variant="subtitle1"
        sx={{
          fontSize: '18px',
          fontWeight: 'bold',
          fontFamily: 'ivyepic-variable, sans-serif',
          fontVariationSettings: "'wght' 600",
        }}
      >
        {translations[selectedLanguage].title}
      </Typography>
      <Box display="flex" alignItems="center" mt={0.2}>
        <Box sx={{ width: 22, height: 22, background: '#fde7f3', mr: 1.5 }} />
        <span style={{ fontSize: '18px', paddingTop: '4px' }}>0</span>
      </Box>
      <Box display="flex" alignItems="center" mt={0.2}>
        <Box sx={{ width: 22, height: 22, background: '#cfeee9', mr: 1.5 }} />
        <span style={{ fontSize: '18px', paddingTop: '4px' }}>&lt;3</span>
      </Box>
      <Box display="flex" alignItems="center" mt={0.2}>
        <Box sx={{ width: 22, height: 22, background: '#64b6ac', mr: 1.5 }} />
        <span style={{ fontSize: '18px', paddingTop: '4px' }}>3-5</span>
      </Box>
      <Box display="flex" alignItems="center" mt={0.2}>
        <Box sx={{ width: 22, height: 22, background: '#397290', mr: 1.5 }} />
        <span style={{ fontSize: '18px', paddingTop: '4px' }}>5-7</span>
      </Box>
      <Box display="flex" alignItems="center" mt={0.2}>
        <Box sx={{ width: 22, height: 22, background: '#002d40', mr: 1.5 }} />
        <span style={{ fontSize: '18px', paddingTop: '4px' }}>&gt;7</span>
      </Box>
    </Box>
  );
};

const DesktopLegend = ({ selectedLanguage }) => {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: 'topleft' });

    legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'legend');
      div.innerHTML = `
        <div style="
          min-width:120px; 
          background: white; 
          color: black; 
          padding: 8px 10px; 
          border-radius: 6px; 
          box-shadow: 0px 0px 4px rgba(0,0,0,0.3); 
          font-size: 18px;"
        >
          <span style="font-variation-settings: 'wght' 600;">${translations[selectedLanguage].title}</span>
          <div style="display: flex; align-items: center; margin-top: 2px;">
            <div style="width: 22px; height: 22px; background: #fde7f3; margin-right: 12px;"></div>
            <span style="padding-top: 4px">0</span>
          </div>
          <div style="display: flex; align-items: center; margin-top: 2px;">
            <div style="width: 22px; height: 22px; background: #cfeee9; margin-right: 12px;"></div>
            <span style="padding-top: 4px">&lt;3</span>
          </div>
          <div style="display: flex; align-items: center; margin-top: 2px;">
            <div style="width: 22px; height: 22px; background: #64b6ac; margin-right: 12px;"></div>
            <span style="padding-top: 4px">3-5</span>
          </div>
          <div style="display: flex; align-items: center; margin-top: 2px;">
            <div style="width: 22px; height: 22px; background: #397290; margin-right: 12px;"></div>
            <span style="padding-top: 4px">5-7</span>
          </div>
          <div style="display: flex; align-items: center; margin-top: 2px;">
            <div style="width: 22px; height: 22px; background: #002d40; margin-right: 12px;"></div>
            <span style="padding-top: 4px">&gt;7</span>
          </div>
        </div>
      `;
      return div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, [map, selectedLanguage]);

  return null;
};

const SiIndicatorMap = ({ siMode, subIndicator: indicator }) => {
  
  const { language } = useLanguage();
  const languageRef = useRef(language);
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 540);
  const [borderGeoJson, setBorderGeoJson] = useState(null);
  const [indicatorDataGeoJson, setIndicatorDataGeoJson] = useState(null);
  const mapRef = useRef(null);
  const [paneReady, setPaneReady] = useState(false);

  const selectedValue = valuesMap(indicator, siMode)[indicator];

  if (!selectedValue) {
      console.error("selected indicator value is undefined. Check selected indicator:", indicator);
  }

  useEffect(() => {
    languageRef.current = language;
  }, [language]);
  
  useEffect(() => {
      const handleResize = () => {
      setIsMobile(window.innerWidth < 540);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
  }, []);


  // Fetch the border data GeoJSON
  useEffect(() => {
      const borderJsonPath = `${process.env.PUBLIC_URL}/data/austria_bev_gen250_bl_wgs84.geojson`;

      fetch(borderJsonPath)
      .then((res) => res.json())
      .then((data) => setBorderGeoJson(data))
      .catch((err) => console.error('Failed to load state border GeoJSON:', err));
  }, []);


  // Fetch the indicator data GeoJSON
  useEffect(() => {
      const indicatorJsonPath = `${process.env.PUBLIC_URL}/data/pg_gen250_ak_resi_wgs84.geojson`;

      fetch(indicatorJsonPath)
      .then((response) => response.json())
      .then((data) => {
          setIndicatorDataGeoJson(data);
      })
      .catch((err) => console.error('Failed to load indicator GeoJSON:', err));
  }, []);

  // Pane creation --> deterministic approach to ensur order of layers
  useEffect(() => {
    const interval = setInterval(() => {
        const map = mapRef.current;
        if (map && map.getPane && !map.getPane('borderPane')) {
        map.createPane('borderPane');
        const pane = map.getPane('borderPane');
        if (pane) {
            pane.style.zIndex = 650;
            pane.style.pointerEvents = 'none';
            setPaneReady(true);
            clearInterval(interval);
        }
        } else if (map?.getPane?.('borderPane')) {
        clearInterval(interval);
        }
    }, 100);

    return () => clearInterval(interval);
  }, []);

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
        fillOpacity: 0.9,
        color: '#fff',
        weight: 0.4
      });

      // Bind popup
      // layer.on({
      //   click: () => {
      //     const indicatorValue = feature.properties[selectedValue?.indicatorValue].toFixed(3);
          
      //     layer.bindPopup(`
      //       <b>${ translations[languageRef.current]?.gkz }:</b> ${feature.properties.GKZ_2}<br>
      //       <b>${ translations[languageRef.current]?.name }:</b> ${feature.properties.PGName}<br>
      //       <b>${ translations[languageRef.current]?.title }:</b> ${indicatorValue}<br>
      //     `).openPopup();
      //   }
      // });
      layer.on({
        click: () => {
          const indicatorValue = feature.properties[selectedValue?.indicatorValue].toFixed(3);
          const content = `
            <div>
              <b>${translations[languageRef.current]?.gkz}:</b> ${feature.properties.GKZ_2}<br>
              <b>${translations[languageRef.current]?.name}:</b> ${feature.properties.PGName}<br>
              <b>${translations[languageRef.current]?.title}:</b> ${indicatorValue}
            </div>
          `;
          layer.bindPopup(content).openPopup();
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
        style={{ height: '480px', width: '100%', background: '#f2f0f0', borderRadius: '8px', overflow: 'hidden', color: 'black', fontFamily: 'ivyepic-variable, sans-serif', fontVariationSettings: "'wght' 400"}}
        ref={mapRef}
      >
        {indicatorDataGeoJson && (
          <GeoJSON data={indicatorDataGeoJson} onEachFeature={onEachFeature} />
        )}

        {paneReady && borderGeoJson && (
        <GeoJSON
            data={borderGeoJson}
            pane="borderPane"
            style={{
            color: "#333",
            weight: 1.2,
            fillOpacity: 0,
            interactive: false,
            }}
        />
        )}   
         
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />
        <ChangeZoomPosition />
        {!isMobile && <DesktopLegend selectedLanguage={language} />}
      </MapContainer>
      {isMobile && <MobileLegend selectedLanguage={language} />}
    </Box>
  );
};

export default SiIndicatorMap;
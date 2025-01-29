/* global L */ // Fix for ESLint 'L is not defined' error
import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-splitmap';
import 'leaflet-defaulticon-compatibility';
import chroma from 'chroma-js';

  const AustriaMapComponent = ({ mapboxAccessToken }) => {
    // State for GeoJSON data
    const [geojsonData, setGeojsonData] = useState(null);

    const [minFL, setMinFL] = useState(null);
    const [maxFL, setMaxFL] = useState(null);

    const mapRef = useRef(null); // Initialize the mapRef
  
    // Effect to fetch the GeoJSON data when the component mounts
    useEffect(() => {
      fetch('./urban_rural_wgs84_dissgem.geojson')
        .then((response) => response.json())
        .then((data) => {
          setGeojsonData(data);
          
          // Extract all FL values from the features
          const allFLValues = data.features.map(feature => feature.properties.FL);
  
          // Calculate min and max FL
          const minValue = Math.min(...allFLValues);
          const maxValue = Math.max(...allFLValues);
  
          // Set the min and max state
          setMinFL(minValue);
          setMaxFL(maxValue);
        })
        .catch((error) => console.error('Error loading GeoJSON data:', error));
    }, []);
    
    // const getColor = (flValue, minFL, maxFL) => {
    //    const scale = chroma.scale(['#FFFFCC', '#660066']) // Gradient: light yellow to dark purple
    //      .domain([minFL, maxFL]); // Set the domain to [minFL, maxFL]
    //    return scale(flValue).hex(); // Return the color in hex
    // };

    const getColor = (flValue, minFL, maxFL) => {
      const scale = chroma
          .scale(['#FFFFCC', '#660066']) // Two-color gradient
          .domain([Math.pow(minFL, 0.5), Math.pow(maxFL, 0.5)]) // Adjust power transformation
          .mode('lab');
      return scale(Math.pow(flValue, 0.5)).hex(); // Apply power transformation
  };


    // Function to handle each feature and apply color
    const onEachFeature = (feature, layer) => {
      if (feature.properties && minFL !== null && maxFL !== null) {
        // Apply the gradient color based on the FL property
        const fillColor = getColor(
          feature.properties.FL,
          minFL, 
          maxFL
        );

        layer.setStyle({
          fillColor: fillColor,
          fillOpacity: 0.7,
          color: '#333', // Border color (you can change it)
          weight: 0.5 // Set border width smaller
        });

        // Bind the popup with feature info
        layer.on({
          click: () => {
            layer.bindPopup(`
              <b>ID:</b> ${feature.properties.id2}<br>
              <b>Gemeinde:</b> ${feature.properties._GEMNAME}<br>
              <b>Bundesland:</b> ${feature.properties.BL}<br>
              <b>Fl&auml;che:</b> ${feature.properties.FL}
            `).openPopup();
          }
        });
      }
    };

    // Initialize the split-map
    useEffect(() => {
      const mapInstance = mapRef.current;

      if (mapInstance) {
        const leftLayer = L.tileLayer(
          `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`,
          {
            attribution: 'Mapbox Streets',
          }
        );

        const rightLayer = L.tileLayer(
          `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`,
          {
            attribution: 'Mapbox Light',
          }
        );

        // Add SplitMap control to the map
        L.control.splitMap(leftLayer, rightLayer).addTo(mapInstance);
      }
    }, [mapboxAccessToken]);
  
    return (
      <div>
        <MapContainer
          bounds={[[46.372276, 9.530952], [49.021162, 17.160568]]}  // Fits Austria
          zoom={8}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          touchZoom={false}
          keyboard={false} // Disable keyboard controls
          dragging={false} // Disable dragging (panning)
          zoomControl={false} // Disable zoom control UI on the map
          style={{ height: '800px', width: '100%', background:'#f4f4f4'}}
        >

          {/* <TileLayer
            url={`https://api.mapbox.com/styles/v1/simlabtuwien/cm2bx9u9w00rs01peeqrrakfo/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`}
            attribution='© <a href="https://www.mapbox.com/about/maps/" rel="noreferrer noopener nofollow" target="_blank">Mapbox</a>, <a href="http://www.openstreetmap.org/copyright" rel="noreferrer noopener nofollow" target="_blank">OpenStreetMap contributors</a>'
          /> */}



          {geojsonData && (
            <GeoJSON data={geojsonData} onEachFeature={onEachFeature} />
          )}
        </MapContainer>
      </div>
    );
  };
  
  export default AustriaMapComponent;
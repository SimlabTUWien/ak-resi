import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from "@mui/material";

const svgUrl = `${process.env.PUBLIC_URL}/images/Abb4_BL_MapMedian.svg`;

const dataMap = {
  "v-2500": {
    residualIncome: "2700",
    population: "2500"
  },
  "v-2501": {
    residualIncome: "2700",
    population: "2501"
  },
  "v-10001": {
    residualIncome: "2699",
    population: "10001"
  }
}


const tooltipMap = {
    "v-2500": ["Mittleres Residualeinkommen >2700", "Gemeindegrößenklasse nach Einwohner:innenzahl <2500"],
    "v-2501": ["Mittleres Residualeinkommen >2700", "Gemeindegrößenklasse nach Einwohner:innenzahl 2501 - 10.000"],
    "v-10001": ["Mittleres Residualeinkommen 2500 - 2699", "Gemeindegrößenklasse nach Einwohner:innenzahl 10.001 - 100.000"],
};

const textinfoMap = {
  "b": {
    title: "Burgenland",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  },
  "k": {
    title: "Kärnten",
    text: "Informationen über Kärnten"
  },
  "n": {
    title: "Niederösterreich",
    text: "Informationen über Niederösterreich"
  },
  "o": {
    title: "Oberösterreich",
    text: "Informationen über Oberösterreich"
  },
  "s": {
    title: "Salzburg",
    text: "Informationen über Salzburg"
  },
  "st": {
    title: "Steiermark",
    text: "Informationen über Steiermark"
  },
  "t": {
    title: "Tirol",
    text: "Informationen über Tirol"
  },
  "v": {
    title: "Vorarlberg",
    text: "Informationen über Vorarlberg"
  },
  "w": {
    title: "Wien",
    text: "Informationen über Wien"
  }
}

const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    (navigator.maxTouchPoints > 0 && !window.matchMedia("(any-hover: hover)").matches)
  );
};

const MeanMapChart = ( mode ) => {
  const svgRefMeanMap = useRef(null);

  const initialId = Object.keys(textinfoMap)[0]; // Get first key from textMap
  const [selectedInfo, setSelectedInfo] = useState(textinfoMap[initialId]);
  
  const navigateText = (direction) => {
    const keys = Object.keys(textinfoMap);
    const currentIndex = keys.indexOf(Object.keys(textinfoMap).find(key => textinfoMap[key] === selectedInfo));
    let newIndex = currentIndex + direction;
  
    if (newIndex < 0) newIndex = keys.length - 1; // Loop to last item
    if (newIndex >= keys.length) newIndex = 0; // Loop to first item
  
    setSelectedInfo(textinfoMap[keys[newIndex]]);
  };

  useEffect(() => {
    const loadSVG = async () => {
      if (!svgUrl) return;
      
      try {
        const response = await d3.xml(svgUrl);
        const svgNode = response.documentElement;

        const container = d3.select(svgRefMeanMap.current);
        container.html(null); // Clear previous content
        container.node().appendChild(svgNode);

        const svg = d3.select(svgRefMeanMap.current).select("svg");
        svg.attr("width", "100%").attr("height", "100%");
        svg.style("display", "block").style("margin", "auto");

        if (!isTouchDevice()) {
          // Tooltip setup
          const tooltip = d3.select("body")
          .append("div")
          .style("position", "absolute")
          .style("background", "rgba(0, 0, 0, 0.80)")
          .style("color", "white")
          .style("padding", "5px 10px")
          .style("border-radius", "5px")
          .style("visibility", "hidden")
          .style("font-size", "14px");
      

          // Mouseover circle behavior
          svg.selectAll("path")
            .filter(function () {
              return d3.select(this).attr("id"); // Only select paths with an id
            })
            .style("cursor", "pointer")
            .on("mouseover", function () {
              d3.select(this).style("filter", "brightness(0.9)");
            })
            .on("mouseout", function () {
              d3.select(this).style("filter", ""); // Remove filter on mouseout
            })
            .on("click", function () {
              const id = d3.select(this).attr("id");
              if (textinfoMap[id]) {
                setSelectedInfo(textinfoMap[id]); // Update selected info
              }
            });

          // Mouseover rect behavior
          svg.selectAll("rect")
            .filter(function () {
              const id = d3.select(this).attr("id");
              return id !== null && id !== "2500" && id !== "2501" && id !== "10001" && id !== "100001";
            })

            .style("cursor", "pointer")

            .on("mouseover", function (event) {
              const id = d3.select(this).attr("id");
          
              // Highlight the hovered rectangle
              d3.select(this).style("filter", "brightness(0.9)");
          
              // Find corresponding legend element by matching legend box ID with population of hovered element
              const dataKey = `${id}`;
              if (dataMap[dataKey]) {
                const populationValue = dataMap[dataKey].population;
                const residualIncome = dataMap[dataKey].residualIncome;
          
                // Find the matching legend element by population
                svg.selectAll("rect")
                  .filter(function () {
                    const legendId = d3.select(this).attr("id");
                    return legendId === populationValue.toString(); // Match with population value
                  })
                  .style("fill", "#f0d1c7")
                  .style("stroke", "black")
                  .style("stroke-width", "2px");
                  // .style("filter", "brightness(0.92)");


                svg.selectAll("text")
                  .filter(function () {
                    const textId = d3.select(this).attr("id");
                    return textId === residualIncome.toString();
                  })
                  .style("opacity", "1")
                  .style("font-weight", "bold");

                // svg.selectAll("text")
                //   .filter(function () {
                //     const textId = d3.select(this).attr("id");
                //     return textId !== null && textId !== residualIncome.toString();
                //   })
                //   .style("opacity", "0.75")
                //   .style("font-weight", "normal");  
              }
          
              // Tooltip display
              const info = tooltipMap[dataKey] || ["Keine Daten verfügbar", "Keine Daten verfügbar"];
              tooltip.html(`<strong>${info[0]}</strong><br/>${info[1]}`)
                .style("visibility", "visible")
                .style("top", `${event.pageY - 30}px`)
                .style("left", `${event.pageX + 15}px`);
            })
            .on("mousemove", function (event) {
              tooltip.style("top", `${event.pageY - 30}px`)
                .style("left", `${event.pageX + 15}px`);
            })
            .on("mouseout", function (event) {
              d3.select(this).style("filter", "");

              svg.selectAll("rect")
                .style("stroke", "")
                .style("stroke-width", "")
                .style("fill", "");
                // .style("filter", "");

              svg.selectAll("text")
                .style("font-weight", "normal")
              // svg.selectAll("text")
              //   .style("font-weight", "normal")
              //   .style("opacity", "1");  
              // if (!event.relatedTarget || event.relatedTarget.tagName !== "rect") {
              //   svg.selectAll("text")
              //     .style("font-weight", "normal")
              //     .style("opacity", "1");
              // }

              tooltip.style("visibility", "hidden");
            });
        }
        else {
          svg.selectAll("path")
            .filter(function () {
              return d3.select(this).attr("id"); // Only select paths with an id
            })
            .style("cursor", "pointer")
            .on("mouseover", function () {
              d3.select(this).style("filter", "brightness(0.9)");
            })
            .on("mouseout", function () {
              d3.select(this).style("filter", ""); // Remove filter on mouseout
            })
            .on("click", function () {
              const id = d3.select(this).attr("id");
              if (textinfoMap[id]) {
                setSelectedInfo(textinfoMap[id]); // Update selected info
              }
            });

          svg.selectAll("g")
            .on("click", function () {
              const classList = d3.select(this).attr("class");
              if (classList) {
                const classes = classList.split(" "); // Convert to array
                const matchedClass = classes.find(cls => textinfoMap[cls]); // Find the first matching class
            
                if (matchedClass) {
                  setSelectedInfo(textinfoMap[matchedClass]); // Update selected info
                }
              }
            });
        }

    
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    };

    loadSVG();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
    <div className="mean-map-chart-container" ref={svgRefMeanMap} style={{ maxWidth: "100%", overflow: "hidden" }}></div>
    <Box 
        className="infotext-container"
        sx={{
          // boxShadow: 2,
          // backgroundColor: "white",
          padding: 2,
          borderRadius: 2,
          minHeight: '140px'
        }}
      >
        <div className="info-navigation">
          <button className="nav-button" onClick={() => navigateText(-1)}>
            <ArrowBackIosNewIcon />
          </button>
          <h4 style={{ margin: "0", fontSize: "18px", fontWeight: "bold", paddingTop: "3px"}}> {selectedInfo.title} </h4>
          <button className="nav-button" onClick={() => navigateText(1)}>
            <ArrowForwardIosIcon />
          </button>
        </div>
        <p style={{ margin: 0, textAlign:'justify'}}>{selectedInfo.text}</p>
      </Box>
  </div>
  )
};

export default MeanMapChart;

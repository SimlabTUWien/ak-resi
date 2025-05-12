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
    "v-2500": ["Resiualeinkommen (Median) >2700", "Gemeindegrößenklasse <2500"],
    "v-2501": ["Resiualeinkommen (Median) >2700", "Gemeindegrößenklasse 2501 - 10.000"],
    "v-10001": ["Resiualeinkommen (Median) 2500 - 2699", "Gemeindegrößenklasse 10.001 - 100.000"],
};

const textinfoMap = {
  "b": {
    title: "Burgenland",
    text: "Im Burgenland liegt das mediane Residualeinkommen der Haushalte bei 1.777 €. In Eisenstadt überschreitet es mit knapp über 1.900 € den Landesdurchschnitt. Am niedrigsten ist das Einkommen in Gemeinden mit 2.500 bis 10.000 Einwohner:innen – dort beträgt der Median etwas über 1.600 €. In den kleinsten Gemeinden (unter 2.500 Einwohner:innen) liegt es mit 1.821 € leicht unter dem Wert von Eisenstadt."
  },
  "k": {
    title: "Kärnten",
    text: "In Klagenfurt beträgt das mittlere Residualeinkommen rund 1.670 €. Den höchsten Medianwert verzeichnen Gemeinden mit 10.000 bis 100.000 Einwohner:innen mit rund 1.820 €. Die niedrigsten Einkommen finden sich in den kleinsten Gemeinden unter 2.500 Einwohner:innen."
  },
  "n": {
    title: "Niederösterreich",
    text: "Die höchsten Residualeinkommen in Niederösterreich, inklusive St. Pölten, werden in größeren Gemeinden erzielt – mit etwas über 2.100 €. Knapp darunter liegen die kleinsten Gemeinden, während mittlere Gemeinden rund 1.940 € erreichen. Insgesamt zeigen sich hier nur geringe Unterschiede zwischen den Gemeindetypen."
  },
  "o": {
    title: "Oberösterreich",
    text: "In Linz ist das mittlere Residualeinkommen mit etwa 1.460 € das niedrigste im Bundesland. Deutlich höhere Werte erreichen hingegen kleinere Gemeinden und solche mit 2.501 bis 10.000 Einwohner:innen – jeweils mit über 2.000 €."
  },
  "s": {
    title: "Salzburg",
    text: "Das höchste Residualeinkommen in Salzburg wird sowohl in Salzburg-Stadt als auch in mittelgroßen Gemeinden (2.501–10.000 Einwohner:innen) mit über 1.800 € erzielt. Demgegenüber weisen größere Gemeinden (über 10.000 bis 100.000 Einwohner:innen) mit knapp unter 1.530 € die niedrigsten Werte auf."
  },
  "st": {
    title: "Steiermark",
    text: "In Graz liegt das mittlere Residualeinkommen unter 1.580 € und damit am niedrigsten im Bundesland. Die übrigen Gemeindetypen unterscheiden sich nur geringfügig – mit Werten zwischen 1.738 € (in den kleinsten Gemeinden) und etwa 1.770 € (in kleinen und mittelgroßen Gemeinden)."
  },
  "t": {
    title: "Tirol",
    text: "In Innsbruck sowie in den kleineren und kleinsten Gemeinden sind die mittleren Residualeinkommen weitgehend vergleichbar. Nur in mittelgroßen Gemeinden (10.000 bis 100.000 Einwohner:innen) weicht der Wert deutlich ab und liegt bei rund 1.470 €."
  },
  "v": {
    title: "Vorarlberg",
    text: "Die höchsten Residualeinkommen in Vorarlberg finden sich in kleinen und kleinsten Gemeinden – zwischen 2.050 € und 2.140 €. In größeren Gemeinden, einschließlich Bregenz, sinkt der Median deutlich und liegt unter 1.750 €."
  },
  "w": {
    title: "Wien",
    text: "Wien verzeichnet das niedrigste mediane Residualeinkommen aller Bundesländer – es liegt bei knapp 1.550 €."
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

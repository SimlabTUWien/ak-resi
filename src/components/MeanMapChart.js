import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const svgUrl = `${process.env.PUBLIC_URL}/Abb4_BL_MapMedian.svg`;

const tooltipMap = {
    "v-2500": ["Mittleres Residualeinkommen >2700", "Gemeindegrößenklasse nach Einwohner:innenzahl <2500"],
    "v-2501": ["Mittleres Residualeinkommen >2700", "Gemeindegrößenklasse nach Einwohner:innenzahl 2501 - 10.000"],
    "v-10001": ["Mittleres Residualeinkommen 2500 - 2699", "Gemeindegrößenklasse nach Einwohner:innenzahl 10.001 - 100.000"],
  };

const MeanMapChart = () => {
  const svgRefMeanMap = useRef(null);

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
        svg.attr("width", "100%").attr("height", "auto");
        svg.style("display", "block").style("margin", "auto");

        // Tooltip setup
        const tooltip = d3.select("body")
          .append("div")
          .style("position", "absolute")
          .style("background", "rgba(0, 0, 0, 0.75)")
          .style("color", "white")
          .style("padding", "5px 10px")
          .style("border-radius", "5px")
          .style("visibility", "hidden")
          .style("font-size", "12px");

        // Mouseover behavior
        svg.selectAll("rect")
          .filter(function () {
            return d3.select(this).attr("id"); // Only apply to elements with an id
          })
          .style("cursor", "pointer")
          .on("mouseover", function (event) {
            const id = d3.select(this).attr("id");
            d3.select(this).style("filter", "brightness(0.9)");
            const info = tooltipMap[id] || ["Keine Daten verfügbar", "Keine Daten verfügbar"];
            tooltip.html(`<strong>${info[0]}</strong><br/>${info[1]}`)
              .style("visibility", "visible")
              .style("top", `${event.pageY + 5}px`)
              .style("left", `${event.pageX + 5}px`);
          })
          .on("mousemove", function (event) {
            tooltip.style("top", `${event.pageY + 5}px`)
              .style("left", `${event.pageX + 5}px`);
          })
          .on("mouseout", function () {
            d3.select(this).style("filter", "");
            tooltip.style("visibility", "hidden");
          });
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    };

    loadSVG();
  }, []);

  return <div className="mean-map-chart-container" ref={svgRefMeanMap}></div>;
};

export default MeanMapChart;

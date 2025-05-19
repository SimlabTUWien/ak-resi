import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Box } from "@mui/material";


const svgUrl = `${process.env.PUBLIC_URL}/images/12_INC_SEX_GEMGRO_TU_DE.svg`;


const dataMap = {
    fua: {
        vienna: { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", communitySizeClass: "Wien", q1: 1.2, median: 2.3, q3: 4.3, n: 527 },
        over100k: { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", communitySizeClass: "> 100.000 Einwohner:innen", q1: 1.3, median: 2.3, q3: 4.7, n: 311 },
        till100k: { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", communitySizeClass: "10.001 - 100.000 Einwohner:innen", q1: 1.3, median: 2.8, q3: 5.5, n: 454 },
        under10k: { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", communitySizeClass: "bis 10.000 Einwohner:innen", q1: 1.7, median: 3.5, q3: 6.0, n: 1440 }
    },
    fea: {
        vienna: { titel: "Frauen - Erwerbsarbeit", communitySizeClass: "Wien", q1: 6.0, median: 7.5, q3: 8.7, n: 355 },
        over100k: { titel: "Frauen - Erwerbsarbeit", communitySizeClass: "> 100.000 Einwohner:innen", q1: 5.9, median: 8.0, q3: 8.8, n: 211 },
        till100k: { titel: "Frauen - Erwerbsarbeit", communitySizeClass: "10.001 - 100.000 Einwohner:innen", q1: 5.5, median: 7.6, q3: 9.0, n: 286 },
        under10k: { titel: "Frauen - Erwerbsarbeit", communitySizeClass: "bis 10.000 Einwohner:innen", q1: 5.0, median: 7.3, q3: 9.0, n: 882 }
    },
    mua: {
        vienna: { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", communitySizeClass: "Wien", q1: 0.8, median: 1.5, q3: 2.9, n: 347 },
        over100k: { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", communitySizeClass: "> 100.000 Einwohner:innen", q1: 0.7, median: 1.5, q3: 2.8, n: 207 },
        till100k: { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", communitySizeClass: "10.001 - 100.000 Einwohner:innen", q1: 0.8, median: 1.4, q3: 2.8, n: 306 },
        under10k: { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", communitySizeClass: "bis 10.000 Einwohner:innen", q1: 0.7, median: 1.5, q3: 3.0, n: 956 }
    },
    mea: {
        vienna: { titel: "Männer - Erwerbsarbeit", communitySizeClass: "Wien", q1: 6.5, median: 8.3, q3: 9.5, n: 335 },
        over100k: { titel: "Männer - Erwerbsarbeit", communitySizeClass: "> 100.000 Einwohner:innen", q1: 7.7, median: 8.7, q3: 9.7, n: 181 },
        till100k: { titel: "Männer - Erwerbsarbeit", communitySizeClass: "10.001 - 100.000 Einwohner:innen", q1: 7.5, median: 8.7, q3: 9.7, n: 303 },
        under10k: { titel: "Männer - Erwerbsarbeit", communitySizeClass: "bis 10.000 Einwohner:innen", q1: 7.7, median: 8.8, q3: 10.0, n: 1030 }
    }
};


const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      (navigator.maxTouchPoints > 0 &&
        !window.matchMedia("(any-hover: hover)").matches)
    );
  };
  
const IncSexGemgroBoxplot = () => {
    const svgRef = useRef(null);
  
    useEffect(() => {
      const loadSVG = async () => {
        try {
          const response = await d3.xml(svgUrl);
          const svgNode = response.documentElement;
  
          const container = d3.select(svgRef.current);
          container.html(null);
          container.node().appendChild(svgNode);
  
          const svg = d3.select(svgRef.current).select("svg");
          svg.attr("width", "100%").attr("height", "100%");
          svg.style("display", "block").style("margin", "auto");
  
          if (!isTouchDevice()) {
            const tooltip = d3
              .select("body")
              .append("div")
              .style("position", "absolute")
              .style("background", "rgba(0, 0, 0, 0.8)")
              .style("color", "white")
              .style("padding", "6px 10px")
              .style("border-radius", "5px")
              .style("font-size", "16px")
              .style("font-family", "ivyepic-variable, sans-serif")
              .style("font-variation-settings", "'wght' 400")
              .style("pointer-events", "none")
              .style("visibility", "hidden");
  
            svg
              .selectAll("g.box")
              .filter(function () {
                const parentId = d3.select(this.parentNode).attr("id");
                const boxName = d3.select(this).attr("data-name");
                return !!parentId && !!boxName && dataMap[parentId] && dataMap[parentId][boxName];
              })
            
              .style("cursor", "pointer")
              .on("mouseover", function (event) {
                const box = d3.select(this);
                const outerGroup = this.parentNode;
                const outerId = d3.select(outerGroup).attr("id");
                const dataName = box.attr("data-name");
    
                if (dataMap[outerId] && dataMap[outerId][dataName]) {
                  const data = dataMap[outerId][dataName];
    
                  box.selectAll("*").style("filter", "brightness(0.85)");
    
                  tooltip
                    .html(`
                      <div style="font-variation-settings: 'wght' 700">${data.titel}</div>
                      <div>Gemeindegrößenklasse: ${data.communitySizeClass}</div>
                      <div>1. Quintil: ${data.q1}</div>
                      <div>Median: ${data.median}</div>
                      <div>3. Quintil: ${data.q3}</div>
                      <div>Gruppengröße: ${data.n}</div>
                    `)
                    .style("visibility", "visible")
                    .style("top", `${event.pageY - 40}px`)
                    .style("left", `${event.pageX + 20}px`);
                }
              })
              .on("mousemove", function (event) {
                tooltip
                  .style("top", `${event.pageY - 40}px`)
                  .style("left", `${event.pageX + 20}px`);
              })
              .on("mouseout", function () {
                d3.select(this).selectAll("*").style("filter", "");
                tooltip.style("visibility", "hidden");
              });
          }
        } catch (error) {
          console.error("Error loading SVG:", error);
        }
      };
  
      loadSVG();
    }, []);
  
    return (
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <div ref={svgRef}></div>
      </Box>
    );
  };
  
  export default IncSexGemgroBoxplot;
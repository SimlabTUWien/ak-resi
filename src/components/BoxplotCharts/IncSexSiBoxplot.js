import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Box } from "@mui/material";

const svgUrl = `${process.env.PUBLIC_URL}/images/14_INC_SEX_SI_TU_DE.svg`;

const dataMap = {
  fua: {
    1:   { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", supply: "unterversorgt", q1: '1,6', median: '4,3', q3: '6,8', n: 40 },
    2: { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", supply: "mittel", q1: '1,8', median: '3,8', q3: '6,3', n: 465 },
    3: { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", supply: "gut", q1: '1,7', median: '3,3', q3: '5,7', n: 967 },
    4:   { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", supply: "sehr gut", q1: '1,3', median: '2,7', q3: '5,3', n: 733 },
  },
  fea: {
      1:   { titel: "Frauen - Erwerbsarbeit", supply: "unterversorgt", q1: '5,7', median: '7,8', q3: '8,6', n: 24 },
      2: { titel: "Frauen - Erwerbsarbeit", supply: "mittel", q1: '5,2', median: '7,5', q3: '9', n: 277 },
      3: { titel: "Frauen - Erwerbsarbeit", supply: "gut", q1: '5,2', median: '7,3', q3: '8,8', n: 603 },
      4:   { titel: "Frauen - Erwerbsarbeit", supply: "sehr gut" , q1: '5,5', median: '7,6', q3: '9', n: 475 },
  },

  mua: {
    1:   { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", supply: "unterversorgt", q1: '1,1', median: '2,1', q3: '3,2', n: 28 },
    2: { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", supply: "mittel", q1: '0,8', median: '1,7', q3: '2,8', n: 323 },
    3: { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", supply: "gut", q1: '0,7', median: '1,5', q3: '2,8', n: 641 },      
    4:   { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", supply: "sehr gut", q1: '0,7', median: '1,5', q3: '2,7', n: 477 },
  },
  mea: {
    1:   { titel: "Männer - Erwerbsarbeit", supply: "unterversorgt", q1: '8,6', median: '9,3', q3: '10,3', n: 28 },
    2: { titel: "Männer - Erwerbsarbeit", supply: "mittel", q1: '8', median: '9', q3: '10,5', n: 343 },
    3: { titel: "Männer - Erwerbsarbeit", supply: "gut", q1: '7,7', median: '8,8', q3: '9,9', n: 660 },
    4:   { titel: "Männer - Erwerbsarbeit", supply: "sehr gut", q1: '7,4', median: '8,7', q3: '9,8', n: 483 },
  }
};


const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      (navigator.maxTouchPoints > 0 &&
        !window.matchMedia("(any-hover: hover)").matches)
    );
  };
  
const IncSexSiBoxplot = () => {
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
    
                  box.selectAll("*").each(function () {
                    const currentFill = d3.select(this).style("fill");
                    const darker = d3.color(currentFill)?.darker(0.25);
                    d3.select(this).attr("data-original-fill", currentFill);
                    if (darker) d3.select(this).style("fill", darker);
                  });
    
                  tooltip
                    .html(`
                      <div style="font-variation-settings: 'wght' 700">${data.titel}</div>
                      <div>Infrastrukturversorgung: ${data.supply}</div>
                      <div>Unteres Quartil: ${data.q1} Stunden</div>
                      <div>Median: ${data.median} Stunden</div>
                      <div>Oberes Quartil: ${data.q3} Stunden</div>
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
                d3.select(this).selectAll("*").each(function () {
                  const el = d3.select(this);
                  const original = el.attr("data-original-fill");
                  if (original) el.style("fill", original);
                });
                
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
  
  export default IncSexSiBoxplot;
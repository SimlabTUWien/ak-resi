import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Box } from "@mui/material";


const svgUrl = `${process.env.PUBLIC_URL}/images/9_INC_SEX_EDU_TU_DE.svg`;


const dataMap = {
  fua: {
    hbah:   { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", education: "Postsekunäre oder tertäre Ausbildung", q1: '1,2', median: '2,5', q3: '5,3', n: 877 },
    hbasmm: { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", education: "Sekundarstufe II (mit Matura)", q1: '1,2', median: '2,8', q3: '4,7', n: 158 },
    hbasom: { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", education: "Sekundarstufe I (ohne Matura)", q1: '1,7', median: '3,3', q3: '5,7', n: 1111 },
    hbap:   { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", education: "Pflichtschule", q1: '1,8', median: '3,8', q3: '6', n: 200 },
    hbau:   { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", education: "Unbekannt", q1: '1,3', median: '2,8', q3: '5,5', n: 386 }
  },
  fea: {
      hbah:   { titel: "Frauen - Erwerbsarbeit", education: "Postsekunäre oder tertäre Ausbildung", q1: '5,3', median: '7,5', q3: '8,8', n: 647 },
      hbasmm: { titel: "Frauen - Erwerbsarbeit", education: "Sekundarstufe II (mit Matura)", q1: '5,5', median: '7,7', q3: '9', n: 77 },
      hbasom: { titel: "Frauen - Erwerbsarbeit", education: "Sekundarstufe I (ohne Matura)", q1: '5,3', median: '7,7', q3: '9', n: 653 },
      hbap:   { titel: "Frauen - Erwerbsarbeit", education: "Pflichtschule" , q1: '4,8', median: '6,9', q3: '8,3', n: 90 },
      hbau:   { titel: "Frauen - Erwerbsarbeit", education: "Unbekannt", q1: '5,3', median: '7,5', q3: '8,8', n: 267 }
  },


  mua: {
    hbah:   { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", education: "Postsekunäre oder tertäre Ausbildung", q1: '0,8', median: '1,5', q3: '2,8', n: 613 },
    hbasmm: { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", education: "Sekundarstufe II (mit Matura)", q1: '0,7', median: '1,3', q3: '2,6', n: 111 },
    hbasom: { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", education: "Sekundarstufe I (ohne Matura)", q1: '0,8', median: '1,5', q3: '3', n: 753 },
    hbap:   { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", education: "Pflichtschule", q1: '1', median: '2,2', q3: '3,5', n: 108 },
    hbau:   { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", education: "Unbekannt", q1: '0,7', median: '1,5', q3: '2,7', n: 231 }
  },
  mea: {
    hbah:   { titel: "Männer - Erwerbsarbeit", education: "Postsekunäre oder tertäre Ausbildung", q1: '7,3', median: '8,5', q3: '9,8', n: 648 },
    hbasmm: { titel: "Männer - Erwerbsarbeit", education: "Sekundarstufe II (mit Matura)", q1: '7,7', median: '8,5', q3: '9,3', n: 97 },
    hbasom: { titel: "Männer - Erwerbsarbeit", education: "Sekundarstufe I (ohne Matura)", q1: '7,8', median: '8,8', q3: '10', n: 761 },
    hbap:   { titel: "Männer - Erwerbsarbeit", education: "Pflichtschule", q1: '7,2', median: '8,5', q3: '10', n: 101 },
    hbau:   { titel: "Männer - Erwerbsarbeit", education: "Unbekannt", q1: '7,3', median: '8,8', q3: '9,8', n: 242 }
  }
};


const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      (navigator.maxTouchPoints > 0 &&
        !window.matchMedia("(any-hover: hover)").matches)
    );
  };
  
const IncSexEduBoxplot = () => {
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
                      <div>Höchster Bildungsabschluss: ${data.education}</div>
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
  
  export default IncSexEduBoxplot;
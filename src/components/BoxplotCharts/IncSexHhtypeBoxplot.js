import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Box } from "@mui/material";


const svgUrl = `${process.env.PUBLIC_URL}/images/11_INC_SEX_HHTYPE_TU_DE.svg`;

const dataMap = {

  fua: {
    "1ew":    { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", hhtype: "Alleinlebend", q1: 1.0, median: 1.8, q3: 3.2, n: 562 },
    "1ew1k":  { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", hhtype: "Ein Erwachsener mit einem Kind", q1: 2.0, median: 3.8, q3: 5.3, n: 121 },
    "1ew2k":  { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", hhtype: "Ein Erwachsener mit mehr als einem Kind", q1: 3.3, median: 5.2, q3: 6.7, n: 61 },
    "2ew":    { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", hhtype: "Zwei Erwachsene", q1: 1.2, median: 2.2, q3: 4.0, n: 867 },
    "2ew1k":  { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", hhtype: "Zwei Erwachsene mit einem Kind", q1: 2.5, median: 4.3, q3: 7.0, n: 232 },
    "2ew2k":  { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", hhtype: "Zwei Erwachsene mit mehr als einem Kind", q1: 3.3, median: 5.5, q3: 7.5, n: 345 },
    "3ew":    { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", hhtype: "Drei Erwachsene", q1: 1.3, median: 3.0, q3: 6.5, n: 368 },
    "3ew1k":  { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", hhtype: "Drei Erwachsene mit einem Kind", q1: 3.4, median: 6.0, q3: 9.3, n: 142 },
    "3ew2k":  { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", hhtype: "Drei Erwachsene mit mehr als einem Kind", q1: 3.8, median: 6.6, q3: 9.1, n: 34 }
  },
  fea: {
      "1ew":    { titel: "Frauen - Erwerbsarbeit", hhtype: "Alleinlebend", q1: 6.3, median: 8.2, q3: 9.2, n: 381 },
      "1ew1k":  { titel: "Frauen - Erwerbsarbeit", hhtype: "Ein Erwachsener mit einem Kind", q1: 5.2, median: 7.1, q3: 8.3, n: 82 },
      "1ew2k":  { titel: "Frauen - Erwerbsarbeit", hhtype: "Ein Erwachsener mit mehr als einem Kind", q1: 4.8, median: 5.6, q3: 6.9, n: 46 },
      "2ew":    { titel: "Frauen - Erwerbsarbeit", hhtype: "Zwei Erwachsene", q1: 6.0, median: 7.8, q3: 9.0, n: 591 },
      "2ew1k":  { titel: "Frauen - Erwerbsarbeit", hhtype: "Zwei Erwachsene mit einem Kind", q1: 5.0, median: 6.2, q3: 8.3, n: 142 },
      "2ew2k":  { titel: "Frauen - Erwerbsarbeit", hhtype: "Zwei Erwachsene mit mehr als einem Kind", q1: 4.7, median: 6.0, q3: 8.0, n: 219 },
      "3ew":    { titel: "Frauen - Erwerbsarbeit", hhtype: "Drei Erwachsene", q1: 5.5, median: 8.0, q3: 9.0, n: 197 },
      "3ew1k":  { titel: "Frauen - Erwerbsarbeit", hhtype: "Drei Erwachsene mit einem Kind", q1: 4.1, median: 6.0, q3: 8.4, n: 59 },
      "3ew2k":  { titel: "Frauen - Erwerbsarbeit", hhtype: "Drei Erwachsene mit mehr als einem Kind", q1: 5.3, median: 7.5, q3: 9.0, n: 17 }
  },
  mua: {
    "1ew":    { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", hhtype: "Alleinlebend", q1: 0.7, median: 1.5, q3: 2.5, n: 385 },
    "1ew1k":  { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", hhtype: "Ein Erwachsener mit einem Kind", q1: 0.8, median: 1.5, q3: 2.7, n: 15 },
    "1ew2k":  { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", hhtype: "Ein Erwachsener mit mehr als einem Kind", q1: 1.1, median: 1.7, q3: 4.4, n: 15 },
    "2ew":    { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", hhtype: "Zwei Erwachsene", q1: 0.7, median: 1.3, q3: 2.7, n: 581 },
    "2ew1k":  { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", hhtype: "Zwei Erwachsene mit einem Kind", q1: 1.0, median: 1.8, q3: 3.5, n: 158 },
    "2ew2k":  { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", hhtype: "Zwei Erwachsene mit mehr als einem Kind", q1: 0.8, median: 1.7, q3: 3.0, n: 273 },
    "3ew":    { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", hhtype: "Drei Erwachsene", q1: 0.7, median: 1.5, q3: 2.7, n: 257 },
    "3ew1k":  { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", hhtype: "Drei Erwachsene mit einem Kind", q1: 0.8, median: 1.7, q3: 3.3, n: 107 },
    "3ew2k":  { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", hhtype: "Drei Erwachsene mit mehr als einem Kind", q1: 1.2, median: 1.7, q3: 3.0, n: 25 }
  },
  mea: {
    "1ew":    { titel: "Männer - Erwerbsarbeit", hhtype: "Alleinlebend", q1: 7.5, median: 8.5, q3: 9.7, n: 365 },
    "1ew1k":  { titel: "Männer - Erwerbsarbeit", hhtype: "Ein Erwachsener mit einem Kind", q1: 8.0, median: 9.2, q3: 10.5, n: 21 },
    "1ew2k":  { titel: "Männer - Erwerbsarbeit", hhtype: "Ein Erwachsener mit mehr als einem Kind", q1: 6.8, median: 8.5, q3: 10.0, n: 14 },
    "2ew":    { titel: "Männer - Erwerbsarbeit", hhtype: "Zwei Erwachsene", q1: 7.2, median: 8.5, q3: 9.7, n: 551 },
    "2ew1k":  { titel: "Männer - Erwerbsarbeit", hhtype: "Zwei Erwachsene mit einem Kind", q1: 7.2, median: 8.7, q3: 9.8, n: 161 },
    "2ew2k":  { titel: "Männer - Erwerbsarbeit", hhtype: "Zwei Erwachsene mit mehr als einem Kind", q1: 8.0, median: 9.0, q3: 10.0, n: 286 },
    "3ew":    { titel: "Männer - Erwerbsarbeit", hhtype: "Drei Erwachsene", q1: 7.5, median: 8.7, q3: 10.0, n: 307 },
    "3ew1k":  { titel: "Männer - Erwerbsarbeit", hhtype: "Drei Erwachsene mit einem Kind", q1: 7.6, median: 9.0, q3: 9.8, n: 112 },
    "3ew2k":  { titel: "Männer - Erwerbsarbeit", hhtype: "Drei Erwachsene mit mehr als einem Kind", q1: 8.2, median: 9.8, q3: 10.9, n: 32 }
  }
};


const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      (navigator.maxTouchPoints > 0 &&
        !window.matchMedia("(any-hover: hover)").matches)
    );
  };
  
const IncSexHhtypeBoxplot = () => {
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
              .style("font-size", "14px")
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
                      <div>${data.titel}</div>
                      <div>Haushaltszusammensetzung : ${data.hhtype}</div>
                      <div>1. Quintil: ${data.q1}</div>
                      <div>Median: ${data.median}</div>
                      <div>3. Quintil: ${data.q3}</div>
                      <div>Teilnehmende: ${data.n}</div>
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
  
  export default IncSexHhtypeBoxplot;
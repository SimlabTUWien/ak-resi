import React, { useEffect, useRef } from "react";
import { useLanguage } from '../../context/LanguageContext';
import * as d3 from "d3";
import { Box } from "@mui/material";

const dataMap = {
  DE: {
    fua: {
      bavz: { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", extend: "Vollzeit", q1: 1.0, median: 1.8, q3: 3.2, n: 962 },
      batz: { titel: "Frauen - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", extend: "Teilzeit", q1: 1.8, median: 3.7, q3: 6.0, n: 1075 }
    },
    fea: {
      bavz: { titel: "Frauen - Erwerbsarbeit", extend: "Vollzeit", q1: 6.8, median: 8.3, q3: 9.2, n: 885 },
      batz: { titel: "Frauen - Erwerbsarbeit", extend: "Teilzeit", q1: 4.7, median: 6.2, q3: 8.0, n: 728 }
    },
    mua: {
      bavz: { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", extend: "Vollzeit", q1: 0.7, median: 1.3, q3: 2.7, n: 1312 },
      batz: { titel: "Männer - Unbezahlte Arbeit (Haushalt und Kinderbetreuung)", extend: "Teilzeit", q1: 0.8, median: 1.7, q3: 3.3, n: 182 }
    },
    mea: {
      bavz: { titel: "Männer - Erwerbsarbeit", extend: "Vollzeit", q1: 7.8, median: 8.8, q3: 10.0, n: 1588 },
      batz: { titel: "Männer - Erwerbsarbeit", extend: "Teilzeit", q1: 5.1, median: 6.7, q3: 8.7, n: 163 }
    }
  },
  EN: {
    fua: {
      bavz: { titel: "Women - Care Work", extend: "Full Time", q1: 1.0, median: 1.8, q3: 3.2, n: 962 },
      batz: { titel: "Women - Care Work", extend: "Part Time", q1: 1.8, median: 3.7, q3: 6.0, n: 1075 }
    },
    fea: {
      bavz: { titel: "Women - Paid Work", extend: "Full Time", q1: 6.8, median: 8.3, q3: 9.2, n: 885 },
      batz: { titel: "Women - Paid Work", extend: "Part Time", q1: 4.7, median: 6.2, q3: 8.0, n: 728 }
    },
  
    mua: {
      bavz: { titel: "Men - Care Work", extend: "Full Time", q1: 0.7, median: 1.3, q3: 2.7, n: 1312 },
      batz: { titel: "Men - Care Work", extend: "Part Time", q1: 0.8, median: 1.7, q3: 3.3, n: 182 }
    },
    mea: {
      bavz: { titel: "Men - Paid Work", extend: "Full Time", q1: 7.8, median: 8.8, q3: 10.0, n: 1588 },
      batz: { titel: "Men - Paid Work", extend: "Part Time", q1: 5.1, median: 6.7, q3: 8.7, n: 163 }
    }
  }
};

const labels = {
  DE: {
    extent: "Beschäftigungsausmaß",
    q1: "1. Quartil",
    median: "Median",
    q3: "3. Quartil",
    n: "Gruppengröße"
  },
  EN: {
    extent: "Extent of Employment",
    q1: "1st Quartile",
    median: "Median",
    q3: "3rd Quartile",
    n: "Group Size"
  }
};


const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      (navigator.maxTouchPoints > 0 &&
        !window.matchMedia("(any-hover: hover)").matches)
    );
  };
  
const IncSexFtptBoxplot = () => {

    const { language } = useLanguage();
    const svgUrl = `${process.env.PUBLIC_URL}/images/10_INC_SEX_FTPT_TU_${language.toUpperCase()}.svg`;

    const localizedDataMap = dataMap[language];

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
            d3.select("body").selectAll("div.d3-tooltip-ftpt").remove();
            const tooltip = d3
              .select("body")
              .append("div")
              .attr("class", "d3-tooltip-ftpt")
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
                return !!parentId && !!boxName && localizedDataMap[parentId] && localizedDataMap[parentId][boxName];
              })
            
              .style("cursor", "pointer")
              .on("mouseover", function (event) {
                const box = d3.select(this);
                const outerGroup = this.parentNode;
                const outerId = d3.select(outerGroup).attr("id");
                const dataName = box.attr("data-name");
                const l = labels[language.toUpperCase()];
    
                if (localizedDataMap[outerId] && localizedDataMap[outerId][dataName]) {
                  const data = localizedDataMap[outerId][dataName];
    
                  box.selectAll("*").each(function () {
                    const currentFill = d3.select(this).style("fill");
                    const darker = d3.color(currentFill)?.darker(0.25);
                    d3.select(this).attr("data-original-fill", currentFill);
                    if (darker) d3.select(this).style("fill", darker);
                  });
    
                  tooltip
                    .html(`
                      <div style="font-variation-settings: 'wght' 700">${data.titel}</div>
                      <div>${l.extent}: ${data.extend}</div>
                      <div>${l.q1}: ${data.q1}</div>
                      <div>${l.median}: ${data.median}</div>
                      <div>${l.q3}: ${data.q3}</div>
                      <div>${l.n}: ${data.n}</div>
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
    }, [svgUrl, localizedDataMap, language]);
  
    return (
      <Box 
        sx={{ 
          width: "100%", 
          overflow: "hidden", 
          justifyContent: "center", 
          margin: "auto", 
          "@media (min-width:960px)": {
            width: "80%",
          } 
      }}>
        <div ref={svgRef}></div>
      </Box>
    );
  };
  
  export default IncSexFtptBoxplot;
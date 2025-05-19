import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from "@mui/material";

const dataMap = {
 b : {
  bl: "Burgenland",
  klein: { gemgr: "unter 2500 EW", ri: 1821, riCategory: "below2k" },
  mittel: { gemgr: "bis zu 10.000 EW", ri: 1604, riCategory: "below1800" },
  groß: { gemgr: "bis zu 100.000 EW", ri: 1901, riCategory: "below2k" }
 },
 k : {
  bl: "Kärnten",
  klein: { gemgr: "unter 2500 EW", ri: 1390, riCategory: "below1400" },
  mittel: { gemgr: "bis zu 10.000 EW", ri: 1656, riCategory: "below1800" },
  groß: { gemgr: "bis zu 100.000 EW", ri: 1820, riCategory: "below2k" },
  sg: { gemgr: "über 100.000 EW", ri: 1669, riCategory: "below1800" }
 },
 noe : {
  bl: "Niederösterreich",
  klein: { gemgr: "unter 2500 EW", ri: 2009, riCategory: "over2k" },
  mittel: { gemgr: "bis zu 10.000 EW", ri: 1941, riCategory: "below2k" },
  groß: { gemgr: "bis zu 100.000 EW", ri: 2103, riCategory: "over2k" },
 },
 ooe : {
  bl: "Oberösterreich",
  klein: { gemgr: "unter 2500 EW", ri: 2064, riCategory: "over2k" },
  mittel: { gemgr: "bis zu 10.000 EW", ri: 2031, riCategory: "over2k" },
  groß: { gemgr: "bis zu 100.000 EW", ri: 1712, riCategory: "below1800" },
  sg: { gemgr: "über 100.000 EW", ri: 1459, riCategory: "below1600" }
 },
 s : {
  bl: "Salzburg",
  klein: { gemgr: "unter 2500 EW", ri: 1665, riCategory: "below1800" },
  mittel: { gemgr: "bis zu 10.000 EW", ri: 1886, riCategory: "below2k" },
  groß: { gemgr: "bis zu 100.000 EW", ri: 1526, riCategory: "below1600" },
  sg: { gemgr: "über 100.000 EW", ri: 1839, riCategory: "below2k" }
 },
 st : {
  bl: "Steiermark",
  klein: { gemgr: "unter 2500 EW", ri: 1738, riCategory: "below1800" },
  mittel: { gemgr: "bis zu 10.000 EW", ri: 1868, riCategory: "below2k" },
  groß: { gemgr: "bis zu 100.000 EW", ri: 1875, riCategory: "below2k" },
  sg: { gemgr: "über 100.000 EW", ri: 1578, riCategory: "below1600" }
 },
 t : {
  bl: "Tirol",
  klein: { gemgr: "unter 2500 EW", ri: 1994, riCategory: "below2k" },
  mittel: { gemgr: "bis zu 10.000 EW", ri: 1838, riCategory: "below2k" },
  groß: { gemgr: "bis zu 100.000 EW", ri: 1366, riCategory: "below1400" },
  sg: { gemgr: "über 100.000 EW", ri: 1866, riCategory: "below2k" }
 },
 v : {
  bl: "Vorarlberg",
  klein: { gemgr: "unter 2500 EW", ri: 2046, riCategory: "over2k" },
  mittel: { gemgr: "bis zu 10.000 EW", ri: 2141, riCategory: "over2k" },
  groß: { gemgr: "bis zu 100.000 EW", ri: 1743, riCategory: "below1800" }
 },
 w : {
  bl: "Wien",
  sg: { gemgr: "über 100.000 EW", ri: 1545, riCategory: "below1600" }
 }
}

const textinfoMap = {
  "b": {
    title: "Burgenland",
    text: "Im Burgenland liegt das mediane Residualeinkommen der Haushalte bei 1.777 €. In Eisenstadt überschreitet es mit knapp über 1.900 € den Landesdurchschnitt. Am niedrigsten ist das Einkommen in Gemeinden mit 2.500 bis 10.000 Einwohner:innen – dort beträgt der Median etwas über 1.600 €. In den kleinsten Gemeinden (unter 2.500 Einwohner:innen) liegt es mit 1.821 € leicht unter dem Wert von Eisenstadt."
  },
  "k": {
    title: "Kärnten",
    text: "In Klagenfurt beträgt das mittlere Residualeinkommen rund 1.670 €. Den höchsten Medianwert verzeichnen Gemeinden mit 10.000 bis 100.000 Einwohner:innen mit rund 1.820 €. Die niedrigsten Einkommen finden sich in den kleinsten Gemeinden unter 2.500 Einwohner:innen."
  },
  "noe": {
    title: "Niederösterreich",
    text: "Die höchsten Residualeinkommen in Niederösterreich, inklusive St. Pölten, werden in größeren Gemeinden erzielt – mit etwas über 2.100 €. Knapp darunter liegen die kleinsten Gemeinden, während mittlere Gemeinden rund 1.940 € erreichen. Insgesamt zeigen sich hier nur geringe Unterschiede zwischen den Gemeindetypen."
  },
  "ooe": {
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

  const svgUrl = `${process.env.PUBLIC_URL}/images/7_BL_MapMedian_all_DE.svg`;


  const svgRef = useRef(null);

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
    d3.xml(svgUrl).then((xml) => {
      const svgNode = xml.documentElement;
  
      const svgContainer = d3.select(svgRef.current);
      svgContainer.selectAll("*").remove(); // Clear before adding new SVG
      svgContainer.node().appendChild(svgNode);

      const svg = d3.select(svgNode);
      svg.attr("width", "100%").attr("height", "100%");
      svg.style("display", "block").style("margin", "auto");

      // === Tooltip ===
      d3.select("body").selectAll("div.d3-tooltip-mm").remove();
      const tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "d3-tooltip-mm")
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

      // === Circle behavior ===
      svg.selectAll(".circle")
      .style("cursor", "pointer")
      .on("mouseover", function () {
        d3.select(this).select("circle").style("filter", "brightness(0.9)");
      })
      .on("mouseout", function () {
        d3.select(this).select("circle").style("filter", null);
      })
      .on("click", function () {
        const name = d3.select(this).attr("data-name");
        if (textinfoMap[name]) {
          setSelectedInfo(textinfoMap[name]);
        }
      });

      // === Rect and Polygon Hover Behavior ===
      svg.selectAll("g").each(function () {
        const groupId = d3.select(this).attr("id");
        const group = d3.select(this);

        group.selectAll("rect, polygon").each(function () {
          const box = d3.select(this);
          const dataName = box.attr("data-name");

          if (dataName) {
            box
              .style("cursor", "pointer")
              .on("mouseover", function (event) {
                

                const regionData = dataMap[groupId]?.[dataName];
                const regionName = dataMap[groupId]?.bl;

                // Highlight corresponding gemgr legend item
                const gemgrGroup = svg.select(`g#${CSS.escape(dataName)}`);
                const gemgrRect = gemgrGroup.select("rect");
                gemgrRect.style("fill", "#e2e2e2");

                // Highlight corresponding riCategory legend item
                const riCategoryId = regionData?.riCategory || "notexisting";
                const categoryGroup = svg.select(`g#${CSS.escape(riCategoryId)}`);
                
                if (riCategoryId === "notexisting" || riCategoryId === "nodata") {
                  const baseRect = box.node();
                  if (baseRect && d3.select(this.parentNode).select("rect.highlight-overlay").empty()) {
                    const { x, y, width, height } = baseRect.getBBox();
                
                    // Add highlight overlay on top of the hovered box
                    d3.select(this.parentNode)
                      .insert("rect", ":first-child") // inserts it as the first element in the group
                      .attr("x", x)
                      .attr("y", y)
                      .attr("width", width)
                      .attr("height", height)
                      .attr("fill", "#e2e2e2")
                      .attr("opacity", 1.0)
                      .attr("pointer-events", "none")
                      .classed("highlight-overlay", true);
                  }
                
                  // Also add overlay to legend category
                  const categoryGroup = svg.select(`g#${CSS.escape(riCategoryId)}`);
                  const catRect = categoryGroup.select("rect").node();
                  if (catRect && categoryGroup.select("rect.highlight-overlay").empty()) {
                    const { x, y, width, height } = catRect.getBBox();
                
                    categoryGroup
                      .insert("rect", ":first-child")
                      .attr("x", x)
                      .attr("y", y)
                      .attr("width", width)
                      .attr("height", height)
                      .attr("fill", "#e2e2e2")
                      .attr("opacity", 1.0)
                      .attr("pointer-events", "none")
                      .classed("highlight-overlay", true);
                  }
                }
                else if (riCategoryId === "below1k" || riCategoryId === "below1200" || riCategoryId === "below1400") {
                  box.style("filter", "brightness(0.9)");
                  categoryGroup.select("rect").style("filter", "brightness(0.9)");
                } else {
                  box.style("filter", "brightness(1.2)");
                  categoryGroup.select("rect").style("filter", "brightness(1.2)");
                }

                const tooltipHTML = regionData
                  ? `
                    <div style="font-variation-settings: 'wght' 700">${regionName}</div>
                    <div>Gemeindegrößenklasse: ${regionData.gemgr}</div>
                    <div>Residualeinkommen (Median): ${regionData.ri} €</div>
                  `
                  : `
                    <div style="font-variation-settings: 'wght' 700">${regionName}</div>
                    <div>Gemeindegrößenklasse nicht vorhanden</div>
                  `;

                tooltip
                  .html(tooltipHTML)
                  .style("visibility", "visible")
                  .style("top", `${event.pageY - 40}px`)
                  .style("left", `${event.pageX + 20}px`);
              })
              .on("mousemove", function (event) {
                tooltip
                  .style("left", `${event.pageX + 10}px`)
                  .style("top", `${event.pageY - 28}px`);
              })
              .on("mouseout", function () {
                box.style("filter", null);
                tooltip.style("visibility", "hidden");

                const gemgrGroup = svg.select(`g#${CSS.escape(dataName)}`);
                const gemgrRect = gemgrGroup.select("rect");
                gemgrRect.style("fill", "#fff");

                const regionData = dataMap[groupId]?.[dataName];
                const riCategoryId = regionData?.riCategory || "notexisting";
                svg.select(`g#${CSS.escape(riCategoryId)}`).select("rect").style("filter", null);

                // Remove both overlays
                d3.select(this.parentNode).select("rect.highlight-overlay").remove();

                const categoryGroup = svg.select(`g#${CSS.escape(riCategoryId)}`);
                categoryGroup.select("rect.highlight-overlay").remove();
              });
          }
        });
      });
    });

    return () => {
      d3.selectAll(".tooltip").remove();
    };
  }, []);
  
  return (
    <div style={{ textAlign: "center" }}>
    <div className="mean-map-chart-container" ref={svgRef} style={{ maxWidth: "100%", overflow: "hidden" }}></div>
    <Box 
        className="infotext-container"
        sx={{
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

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from "@mui/material";

// const langMap = {
//   de: {
//     klein: { de: "unter 2500 EW"},
//     mittel: { de: "bis zu 10.000 EW"},
//     groß: { de: "bis zu 100.000 EW"},
//     sg: { de: "über 100.000 EW"}
//   },
//   en: {
//     klein: { en: "under 2,500 inhabitants" },
//     mittel: { en: "up to 10,000 inhabitants" },
//     groß: { en: "up to 100,000 inhabitants" },
//     sg: { en: "over 100,000 inhabitants" }
//   }
// }

const dataMap = {
  b : {
    bl: "Burgenland",
    klein: { 
      gemgr: "unter 2500 EW", 
      all: { ri: 1821, riCategory: "below2k" },
      renter: { ri: 1273, riCategory: "below1400" },
    }, 
    mittel: { 
      gemgr: "bis zu 10.000 EW",
      all: { ri: 1604, riCategory: "below1800" },
      renter: { ri: 1089, riCategory: "below1200" }
    },
    groß: { 
      gemgr: "bis zu 100.000 EW", 
      all: { ri: 1901, riCategory: "below2k" },
      renter: { riCategory: "nodata" }
    }
  },
  k : {
    bl: "Kärnten",
    klein: { 
      gemgr: "unter 2500 EW", 
      all: { ri: 1390, riCategory: "below1400" },
      renter: { ri: 745, riCategory: "below1k" }
    },
    mittel: { 
      gemgr: "bis zu 10.000 EW",
      all: { ri: 1656, riCategory: "below1800" },
      renter: { ri: 1285, riCategory: "below1400" }
    },
    groß: { 
      gemgr: "bis zu 100.000 EW", 
      all: { ri: 1820, riCategory: "below2k" },
      renter: { ri: 1148, riCategory: "below1200" }
    },
    sg: { 
      gemgr: "über 100.000 EW", 
      all: { ri: 1669, riCategory: "below1800" },
      renter: { ri: 1053, riCategory: "below1200" }
    },
  },
  noe : {
    bl: "Niederösterreich",
    klein: { 
      gemgr: "unter 2500 EW", 
      all: { ri: 2009, riCategory: "over2k" },
      renter: { ri: 873, riCategory: "below1k" }
    },
    mittel: { 
      gemgr: "bis zu 10.000 EW", 
      all: { ri: 1941, riCategory: "below2k" },
      renter: { ri: 1423, riCategory: "below1600" }
    },
    groß: { 
      gemgr: "bis zu 100.000 EW", 
      all: { ri: 2103, riCategory: "over2k" },
      renter: { ri: 1378, riCategory: "below1400" }
    }
  },
  ooe : {
    bl: "Oberösterreich",
    klein: { 
      gemgr: "unter 2500 EW", 
      all: { ri: 2064, riCategory: "over2k" },
      renter: { ri: 1389, riCategory: "below1400" }
    },
    mittel: { 
      gemgr: "bis zu 10.000 EW", 
      all: { ri: 2031, riCategory: "over2k" },
      renter: { ri: 1317, riCategory: "below1400" }
    },
    groß: { 
      gemgr: "bis zu 100.000 EW", 
      all: { ri: 1712, riCategory: "below1800" },
      renter: { ri: 1401, riCategory: "below1600" }
    },
    sg: { 
      gemgr: "über 100.000 EW", 
      all: { ri: 1459, riCategory: "below1600" },
      renter: { ri: 1244, riCategory: "below1400" }
    }
  },
  s : {
    bl: "Salzburg",
    klein: { 
      gemgr: "unter 2500 EW", 
      all: { ri: 1665, riCategory: "below1800" },
      renter: { riCategory: "nodata" }
    },
    mittel: { 
      gemgr: "bis zu 10.000 EW", 
      all: { ri: 1886, riCategory: "below2k" },
      renter: { ri: 1290, riCategory: "below1400" }
    },
    groß: { 
      gemgr: "bis zu 100.000 EW", 
      all: { ri: 1526, riCategory: "below1600" },
      renter: { ri: 1095, riCategory: "below1200" }
    },
    sg: { 
      gemgr: "über 100.000 EW", 
      all: { ri: 1839, riCategory: "below2k" },
      renter: { ri: 1422, riCategory: "below1600" }
    }
  },
  st : {
    bl: "Steiermark",
    klein: { 
      gemgr: "unter 2500 EW",
      all: { ri: 1738, riCategory: "below1800" },
      renter: { ri: 1467, riCategory: "below1600" }
    },
    mittel: { 
      gemgr: "bis zu 10.000 EW",
      all: { ri: 1868, riCategory: "below2k" },
      renter: { ri: 1216, riCategory: "below1400" }
    },
    groß: { 
      gemgr: "bis zu 100.000 EW",
      all: { ri: 1875, riCategory: "below2k" },
      renter: { ri: 1285, riCategory: "below1400" }
    },
    sg: { 
      gemgr: "über 100.000 EW", 
      all: { ri: 1578, riCategory: "below1600" },
      renter: { ri: 1178, riCategory: "below1200" }
    }
  },
  t : {
    bl: "Tirol",
    klein: { 
      gemgr: "unter 2500 EW", 
      all: { ri: 1994, riCategory: "below2k" },
      renter: { ri: 1436, riCategory: "below1600" }
    },
    mittel: { 
      gemgr: "bis zu 10.000 EW", 
      all: { ri: 1838, riCategory: "below2k" },
      renter: { ri: 1402, riCategory: "below1600" }
    },
    groß: { 
      gemgr: "bis zu 100.000 EW", 
      all: { ri: 1366, riCategory: "below1400" },
      renter: { ri: 854, riCategory: "below1k" }
    },
    sg: { 
      gemgr: "über 100.000 EW", 
      all: { ri: 1866, riCategory: "below2k" },
      renter: { ri: 1442, riCategory: "below1600" }
    },
  },
  v : {
    bl: "Vorarlberg",
    klein: { 
      gemgr: "unter 2500 EW", 
      all: { ri: 2046, riCategory: "over2k" },
      renter: { ri: 1168, riCategory: "below1200" }
    },
    mittel: { 
      gemgr: "bis zu 10.000 EW", 
      all: { ri: 2141, riCategory: "over2k" },
      renter: { ri: 1035, riCategory: "below1200" }
    },
    groß: { 
      gemgr: "bis zu 100.000 EW", 
      all: { ri: 1743, riCategory: "below1800" },
      renter: { ri: 1133, riCategory: "below1200" }
    },
  },
  w : {
    bl: "Wien",
    sg: { 
      gemgr: "über 100.000 EW", 
      all: { ri: 1545, riCategory: "below1600" },
      renter: { ri: 1336, riCategory: "below1400" }
    }
  }
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

const MedianMapChart = ({ mode }) => {

  const svgRef = useRef(null);

  const [parentWidth, setParentWidth] = useState(window.innerWidth);
  const parentRef = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        setParentWidth(entry.contentRect.width);
      }
    });

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isMobile = parentWidth < 820;

  const svgUrl = mode === "all"
    ? `${process.env.PUBLIC_URL}/images/7_BL_MapMedian_${isMobile ? "all_mobile" : "all"}_DE.svg`
    : `${process.env.PUBLIC_URL}/images/7_BL_MapMedian_${isMobile ? "onlyRent_mobile" : "onlyRent"}_DE.svg`;


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

    let isMounted = true;

    d3.xml(svgUrl).then((xml) => {

      if (!isMounted) return;

      const svgNode = xml.documentElement;
      const svgContainer = d3.select(svgRef.current);
      svgContainer.selectAll("*").remove(); // Clear before adding new SVG
      svgContainer.node().appendChild(svgNode);

      const svg = d3.select(svgNode);
      svg.attr("width", "100%").attr("height", "100%");
      svg.style("display", "block").style("margin", "auto");

      const storeOriginalFill = (el) => {
        if (!el.attr("data-original-fill")) {
          const currentFill = el.style("fill");
          el.attr("data-original-fill", currentFill);
        }
      };

      const applyColorAdjustment = (el, adjustmentFn) => {
        storeOriginalFill(el);
        const currentFill = el.style("fill");
        const adjusted = adjustmentFn(d3.color(currentFill));
        if (adjusted) el.style("fill", adjusted);
      };


      if(!isTouchDevice()) {
      
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
          d3.select(this).select("circle").each(function () {
            const el = d3.select(this);
            const original = el.style("fill");
            const darker = d3.color(original)?.darker(0.3);
            el.attr("data-original-fill", original);
            if (darker) el.style("fill", darker);
          });
        })
        .on("mouseout", function () {
          d3.select(this).select("circle").each(function () {
            const el = d3.select(this);
            const original = el.attr("data-original-fill");
            if (original) el.style("fill", original);
          });
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
                  
                  const regionData = dataMap[groupId]?.[dataName]?.[mode];
                  const regionName = dataMap[groupId]?.bl;

                  const riCategoryId = regionData?.riCategory || "notexisting";

                  // Highlight corresponding gemgr legend item
                  const gemgrGroup = svg.select(`g#${CSS.escape(dataName)}`);
                  const gemgrRect = gemgrGroup.select("rect");
                  gemgrRect.style("fill", "#e2e2e2");

                  // === Special Overlay for "notexisting"
                  if (riCategoryId === "notexisting") {
                    const baseRect = box.node();
                    if (baseRect && d3.select(this.parentNode).select("rect.highlight-overlay-notexisting").empty()) {
                      const { x, y, width, height } = baseRect.getBBox();

                      d3.select(this.parentNode)
                        .insert("rect", ":first-child")
                        .attr("x", x)
                        .attr("y", y)
                        .attr("width", width)
                        .attr("height", height)
                        .attr("fill", "#e2e2e2")
                        .attr("opacity", 1.0)
                        .attr("pointer-events", "none")
                        .classed("highlight-overlay-notexisting", true);
                    }
                  }

                  // === Special Overlay for "nodata"
                  else if (riCategoryId === "nodata") {
                    const baseRect = box.node();
                    if (baseRect && d3.select(this.parentNode).select("rect.highlight-overlay-nodata").empty()) {
                      const { x, y, width, height } = baseRect.getBBox();

                      d3.select(this.parentNode)
                        .insert("rect", ":first-child")
                        .attr("x", x)
                        .attr("y", y)
                        .attr("width", width)
                        .attr("height", height)
                        .attr("fill", "#e2e2e2")
                        .attr("opacity", 1.0)
                        .attr("pointer-events", "none")
                        .classed("highlight-overlay-nodata", true);
                    }
                  }
                  if (["below1k", "below1200"].includes(riCategoryId)) {
                    applyColorAdjustment(box, c => c?.darker(0.15));
                  } else if(["below1400", "below1600", "below1800"].includes(riCategoryId)) {
                    applyColorAdjustment(box, c => c?.brighter(0.3));
                  } else if(["over2k", "below2k"].includes(riCategoryId)) {
                    applyColorAdjustment(box, c => c?.brighter(0.45));
                  } 

                  const gemgrText = dataMap[groupId]?.[dataName]?.gemgr;

                  let tooltipHTML;

                  if (!regionData) {
                    tooltipHTML = `
                      <div style="font-variation-settings: 'wght' 700">${regionName}</div>
                      <div>Gemeindegrößenklasse nicht vorhanden</div>
                    `;
                  } else if(regionData.riCategory === "nodata") {
                    tooltipHTML = `
                      <div style="font-variation-settings: 'wght' 700">${regionName}</div>
                      <div>Keine Daten für Gemeindegrößenklasse vorhanden</div>
                    `;
                  } else {
                    tooltipHTML = `
                      <div style="font-variation-settings: 'wght' 700">${regionName}</div>
                      <div>Gemeindegrößenklasse: ${gemgrText}</div>
                      <div>Residualeinkommen (Median): ${regionData.ri} €</div>
                    `;
                  }

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

                  // Reset gemgr legend fill
                  svg.select(`g#${CSS.escape(dataName)}`).select("rect").style("fill", "#fff");

                  // === Remove all highlight overlays
                  svg.selectAll("rect.highlight-overlay-notexisting").remove();
                  svg.selectAll("rect.highlight-overlay-nodata").remove();

                  // === Reset all fills
                  svg.selectAll("rect, polygon").each(function () {
                    const el = d3.select(this);
                    const original = el.attr("data-original-fill");
                    if (original) {
                      el.style("fill", original);
                    }
                  });
                });
            }
          });
        });
      }
      else {
        // === Touch device behavior ===
        svg.select("g#bl-boxes")
          .selectAll("g")
          .style("cursor", "pointer")
          .on("click", function () {
            const id = d3.select(this).attr("id");
            if (textinfoMap[id]) {
              setSelectedInfo(textinfoMap[id]);
            }
          });

        svg.selectAll(".circle")
          .style("cursor", "pointer")
          .on("click", function () {
            const name = d3.select(this).attr("data-name");
            if (textinfoMap[name]) {
              setSelectedInfo(textinfoMap[name]);
            }
          }); 
      }
    });
    return () => {
      isMounted = false;
      d3.selectAll(".d3-tooltip-mm").remove();
    };
  }, [mode, svgUrl]);
  
  return (
    <div style={{ textAlign: "center" }} ref={parentRef}>
    <div className="mean-map-chart-container" ref={svgRef} style={{ maxWidth: "100%", overflow: "hidden", marginTop: "24px" }}></div>
    <Box 
        className="infotext-container"
        sx={{
          padding: 2,
          borderRadius: 2,
          minHeight: '140px'
        }}
      >
        <div className="info-navigation">
          <button className="nav-button" onClick={() => navigateText(-1)} aria-label="back">
            <ArrowBackIosNewIcon />
          </button>
          <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "bold", paddingTop: "4px"}}> {selectedInfo.title} </h3>
          <button className="nav-button" onClick={() => navigateText(1)} aria-label="forward">
            <ArrowForwardIosIcon />
          </button>
        </div>
        <p style={{ margin: 0, textAlign: isMobile ? 'left' : 'justify'}}>{selectedInfo.text}</p>
      </Box>
  </div>
  )
};

export default MedianMapChart;

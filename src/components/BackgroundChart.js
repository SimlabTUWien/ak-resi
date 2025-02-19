import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from "@mui/material";
import "../styles/BackgroundChart.css";


const svgUrl = `${process.env.PUBLIC_URL}/images/Abb1_4Kreise4Overlaps_DE.svg`;

const textMap = {
  "einkommen": {
    title: "Einkommen",
    text: "Das Haushaltseinkommen setzt sich aus verschiedenen Quellen zusammen, wie etwa Anstellungen, eigenständigem Einkommen, Pensionen oder Sozialleistungen. In Österreich liegt das mittlere Haushaltseinkommen bei XXX €, was bedeutet, dass 50 % der Haushalte über und 50 % unter diesem Betrag zur Verfügung haben.",
    // color: "#e2e0e1"
    color: "#BDBDBD" //"#b3b3b3"
  },
  "notwendige_ausgaben": {
    title: "Notwendige Ausgaben",
    text: "Zur Deckung der Grundbedürfnisse gehören Ausgaben, die sich kaum vermeiden lassen. Dazu zählen Wohnen, Heizen, Energie, Lebensmittel, Mobilität sowie Kosten für Bildung und Gesundheit. Diese notwendigen Ausgaben können jedoch stark variieren, etwa je nach Region, Wohnform oder dem Zugang zu öffentlicher Infrastruktur.",
    color: "#f0ae9f"
  },
  "soziale_infrastrukturen": {
    title: "Soziale Infrastrukturen",
    text: "Soziale Infrastrukturen sind genauso essenziell wie technische Netze wie Straßen oder Telefonverbindungen. Zugang zu Kindergärten, Schulen, Ärzt:innen, Krankenhäusern, Pflegeheimen und ähnlichen sozialen Angeboten ist unverzichtbar für das Funktionieren unserer Gesellschaft. Dennoch diese Einrichtungen nicht überall in gleicher Qualität oder Dichte verfügbar, was regionale Unterschiede in der Lebensqualität verstärken kann.",
    color: "#a5cdc8"
  },
  "zeit_verwendung": {
    title: "Zeitverwendung",
    text: "Jeder Mensch hat 24 Stunden pro Tag – doch wie diese Stunden genutzt werden, unterscheidet sich stark. Zeit für bezahlte Arbeit, unbezahlte Tätigkeiten wie Haushalt oder Kinderbetreuung, Freizeit, Wegzeiten und Schlaf ist nicht für alle gleich verteilt. Diese Unterschiede beeinflussen sowohl die Lebensqualität als auch die Möglichkeiten, Einkommen zu erzielen oder soziale Aktivitäten wahrzunehmen.",
    color: "#fcd799"
  },
  "verfuegbares_einkommen": {
    title: "Residualeinkommen",
    text: "Das verfügbare Einkommen, auch Residualeinkommen genannt, beschreibt das Einkommen, das nach Abzug der notwendigen Ausgaben übrig bleibt. Dieses Geld steht für unregelmäßige Ausgaben, Freizeitgestaltung oder zum Sparen zur Verfügung und spielt eine wichtige Rolle für die finanzielle Freiheit eines Haushalts.",
    color: "#f0d1c7"
  },
  "geld_sparen_durch_SI": {
    title: "Geld sparen durch SI",
    text: "Öffentlich zugängliche und kostengünstige Bildungs- und Gesundheitseinrichtungen entlasten Haushalte finanziell, indem sie die notwendigen Ausgaben reduzieren. Sind solche Einrichtungen jedoch schwer erreichbar, steigen die Mobilitätskosten, oder Haushalte müssen auf teure private Angebote wie Ärzt:innen ohne Kassenvertrag ausweichen.",
    color: "#d2d5cb"
  },
  "zeit_ist_geld": {
    title: "Zeit is Geld",
    text: "Wer mehr Zeit in bezahlte Arbeit investiert, hat meist ein höheres Einkommen. Doch unbezahlte Tätigkeiten wie Hausarbeit, Kinderbetreuung oder ehrenamtliches Engagement bleiben dabei oft unberücksichtigt. Menschen mit höherem Einkommen können ihre Zeit anders nutzen – etwa, indem sie Dienstleistungen wie Haushaltshilfen oder Kinderbetreuung „einkaufen“, um Freiräume zu schaffen.",
    color: "#f0e6d7"
  },
  "zeit_und_infrastruktur": {
    title: "Zeit und Infrastruktur",
    text: "Soziale Infrastrukturen haben großen Einfluss darauf, wie Menschen ihre Zeit verbringen können. Ein gut erreichbarer Kindergarten ermöglicht es Eltern, mehr Zeit für bezahlte Arbeit zu nutzen. Weite Wege zu Schulen oder Gesundheitseinrichtungen hingegen führen zu langen Fahrzeiten oder – im Notfall – zu erhöhten Risiken, wenn Hilfe zu spät eintrifft.",
    color: "#e9dfbe"
  }
};

const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    (navigator.maxTouchPoints > 0 && !window.matchMedia("(any-hover: hover)").matches)
  );
};


const BackgroundChart = () => {
  const svgRef = useRef(null);

  // const [isVisible, setIsVisible] = useState(isTouchDevice());

  const initialId = Object.keys(textMap)[0]; // Get first key from textMap
  const [selectedInfo, setSelectedInfo] = useState(textMap[initialId]);

  const navigateText = (direction) => {
    const keys = Object.keys(textMap);
    const currentIndex = keys.indexOf(Object.keys(textMap).find(key => textMap[key] === selectedInfo));
    let newIndex = currentIndex + direction;
  
    if (newIndex < 0) newIndex = keys.length - 1; // Loop to last item
    if (newIndex >= keys.length) newIndex = 0; // Loop to first item
  
    setSelectedInfo(textMap[keys[newIndex]]);
  };

  useEffect(() => {
    d3.xml(svgUrl).then((data) => {
      if (svgRef.current) {
        svgRef.current.innerHTML = "";
        svgRef.current.appendChild(data.documentElement);
  
        const svg = d3.select(svgRef.current).select("svg");
  
        svg.attr("width", "100%").attr("height", "auto");
        svg.style("display", "block").style("margin", "auto");
  
        // const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  
        if (!isTouchDevice()) {
          svg.selectAll("g")
            .filter(function () {
              const id = d3.select(this).attr("id");
              return id !== "basis" && id !== "schnittflaechen" && id !== "pfeile";
            })
            .style("cursor", "pointer")
            .on("mouseover", function () {
              d3.select(this).style("filter", "brightness(0.9)");
            })
            .on("mouseout", function () {
              d3.select(this).style("filter", "");
            })
            .on("click", function () {
              const id = d3.select(this).attr("id");
              const info = textMap[id] || { title: "Unbekannt", text: "Keine Beschreibung verfügbar.", color: "#ccc" };
            
              setSelectedInfo(info);
              
              // if (!isTouchDevice) {
              //   setIsVisible(true);
              // }
              // setIsVisible(true);
            });
        }
      }
    });
  }, []);
  

  return (
    <div style={{ textAlign: "center" }}>
      <div ref={svgRef} style={{ maxWidth: "100%", overflow: "hidden" }}></div>
      <Box 
        className="infotext-container"
        sx={{
          boxShadow: 2, // Use shadow from MUI's theme (0-24)
          padding: 2,
          borderRadius: 2,
          backgroundColor: selectedInfo.color,
          // display: isVisible ? "block" : "none"
        }}
      >
        <div className="info-navigation">
          <button onClick={() => navigateText(-1)} className="nav-button">
            <ArrowBackIosNewIcon />
          </button>
          <h4 style={{ margin: "0", fontSize: "18px", fontWeight: "bold", paddingTop: "3px"}}>{selectedInfo.title}</h4>
          <button onClick={() => navigateText(1)} className="nav-button">
            <ArrowForwardIosIcon />
          </button>
        </div>
        <p style={{ margin: 0, textAlign:'justify' }}>{selectedInfo.text}</p>
      </Box>

    </div>
  );
};

export default BackgroundChart;
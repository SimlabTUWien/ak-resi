import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from "@mui/material";


const svgUrl = `${process.env.PUBLIC_URL}/images/Abb1_4Kreise4Overlaps_Outlook_DE_V3.svg`;

const textMap = {
    "einkommen": {
        title: "Einkommen",
        subtitle: "Mehr als nur Lohn – es geht um echte Verfügbarkeit",
        text: "Das Haushaltseinkommen setzt sich aus verschiedenen Quellen zusammen, wie etwa Anstellungen, eigenständigem Einkommen, Pensionen oder Sozialleistungen. In Österreich liegt das mittlere Haushaltseinkommen bei XXX €, was bedeutet, dass 50 % der Haushalte über und 50 % unter diesem Betrag zur Verfügung haben.",
        implications: [
            "Mindestlohn & Sozialtransfers an realen Lebenshaltungskosten ausrichten",
            "Steuerliche Entlastung für niedrige Einkommen verstärken",
            "Bessere Absicherung für atypische Beschäftigte und Menschen außerhalb des Arbeitsmarkts"
        ],
        color: "#BDBDBD"
    },
    "notwendige_ausgaben": {
        title: "Notwendige Ausgaben",
        subtitle: "Wer mehr ausgeben muss, hat weniger Spielraum",
        text: "Zur Deckung der Grundbedürfnisse gehören Ausgaben, die sich kaum vermeiden lassen. Dazu zählen Wohnen, Heizen, Energie, Lebensmittel, Mobilität sowie Kosten für Bildung und Gesundheit. Diese notwendigen Ausgaben können jedoch stark variieren, etwa je nach Region, Wohnform oder dem Zugang zu öffentlicher Infrastruktur.",
        implications: [
            "Mietpreisbremse & leistbarer Wohnraum als zentrale Stellschrauben",
            "Zielgerichtete Energie- und Mobilitätszuschüsse",
            "Ausbau kostengünstiger Alternativen im öffentlichen Sektor"
        ],
        color: "#f0ae9f"
    },
    "soziale_infrastrukturen": {
        title: "Soziale Infrastrukturen",
        subtitle: "Wer auf eigene Mittel angewiesen ist, bleibt zurück",
        text: "Soziale Infrastrukturen sind genauso essenziell wie technische Netze wie Straßen oder Telefonverbindungen. Zugang zu Kindergärten, Schulen, Ärzt:innen, Krankenhäusern, Pflegeheimen und ähnlichen sozialen Angeboten ist unverzichtbar für das Funktionieren unserer Gesellschaft. Dennoch diese Einrichtungen nicht überall in gleicher Qualität oder Dichte verfügbar, was regionale Unterschiede in der Lebensqualität verstärken kann.",
        implications: [
            "Kostenfreie und flächendeckende Kinderbetreuung als Grundpfeiler",
            "Investitionen in den öffentlichen Gesundheits- und Pflegesektor",
            "Stärkung ländlicher Infrastruktur, um Stadt-Land-Ungleichheiten zu reduzieren"
        ],
        color: "#a5cdc8"
    },
    "zeit_verwendung": {
        title: "Zeitverwendung",
        subtitle: "Armut ist oft auch Zeitmangel",
        text: "Jeder Mensch hat 24 Stunden pro Tag – doch wie diese Stunden genutzt werden, unterscheidet sich stark. Zeit für bezahlte Arbeit, unbezahlte Tätigkeiten wie Haushalt oder Kinderbetreuung, Freizeit, Wegzeiten und Schlaf ist nicht für alle gleich verteilt. Diese Unterschiede beeinflussen sowohl die Lebensqualität als auch die Möglichkeiten, Einkommen zu erzielen oder soziale Aktivitäten wahrzunehmen.",
        implications: [
            "Arbeitszeitverkürzung bei vollem Lohnausgleich für untere Einkommensgruppen",
            "Faire Verteilung unbezahlter Sorgearbeit durch bessere Anreize",
            "Stärkung von Teilzeit- und Elternzeitmodellen ohne finanzielle Nachteile"
        ],
        color: "#fcd799"
    },
};


const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    (navigator.maxTouchPoints > 0 && !window.matchMedia("(any-hover: hover)").matches)
  );
};


const OutlookChart = () => {
  const svgRef = useRef(null);

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
  
        svg.attr("width", "100%").attr("height", "100%");
        svg.style("display", "block").style("margin", "auto");
        
        if (window.innerWidth > 600) {
            svg.attr("transform", "translate(0, -50)");
          }

        if (!isTouchDevice()) {
          svg.selectAll("g")
            .filter(function () {
              const id = d3.select(this).attr("id");
              return Object.keys(textMap).includes(id);
            })
            .style("cursor", "pointer")
            .on("mouseover", function () {
              d3.select(this).selectAll("*").each(function () {
                const currentColor = d3.select(this).style("fill");
                const darker = d3.color(currentColor)?.darker(0.25); // Darken
                d3.select(this).attr("data-original-fill", currentColor); // Save original
                d3.select(this).style("fill", darker);
              });
            })
            .on("mouseout", function () {
              d3.select(this).selectAll("*").each(function () {
                const original = d3.select(this).attr("data-original-fill");
                if (original) d3.select(this).style("fill", original);
              });
            })
            .on("click", function () {
              const id = d3.select(this).attr("id");
              const info = textMap[id] || { title: "Unbekannt", text: "Keine Beschreibung verfügbar.", color: "#ccc" };
            
              setSelectedInfo(info);
            });
        }
      }
    });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div ref={svgRef} style={{ maxHeight: "520px", maxWidth: "100%", overflow: "hidden" }}></div>
      <Box 
        className="infotext-container"
        sx={{
          boxShadow: 2, // Use shadow from MUI's theme (0-24)
          padding: 2,
          borderRadius: 2,
          backgroundColor: selectedInfo.color,
          marginTop: 0
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
        <h5 style={{ margin: "0", fontSize: "18px", fontWeight: "bold", padding: "3px 0 3px"}}>{selectedInfo.subtitle}</h5>
        <p style={{ margin: 0, textAlign:'justify' }}>{selectedInfo.text}</p>

        <p style={{ margin: '12px 0 0', textAlign:'left' }}>Politische Implikationen</p>
        <ul className="custom-list" style={{ textAlign:'left' }}>
            {selectedInfo.implications?.map((implication, index) => (
                <li key={index}>{implication}</li>
            ))}
        </ul>
      </Box>

    </div>
  );
};

export default OutlookChart;
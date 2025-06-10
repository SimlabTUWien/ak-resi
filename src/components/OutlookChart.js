import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from "@mui/material";


const svgUrl = `${process.env.PUBLIC_URL}/images/Abb1_4Kreise4Overlaps_Outlook_DE_V3.svg`;

const textMap = {
    "einkommen": {
        title: "Einkommen",
        subtitle: <>Mehr als nur Lohn – <br/> es geht um echte Verfügbarkeit</>,
        text: [
          "Das Haushaltseinkommen setzt sich aus verschiedenen Quellen zusammen, wie etwa Anstellungen, eigenständigem Einkommen, Pensionen oder Sozialleistungen. Dabei ist der Lohn aus Erwerbstätigkeit zwar oft der größte Posten, doch längst nicht der einzige. Besonders bei Haushalten mit Kindern, Pensionist:innen oder Menschen mit Unterstützungsbedarf spielen staatliche Leistungen und Transfers eine zentrale Rolle.",
          "Ein Blick auf den Gini-Index – ein Maß für Einkommensungleichheit – zeigt, dass die Ungleichverteilung in Österreich mit einem Wert von etwa 0,27 (nach Steuern und Transfers) zwar moderat, aber keineswegs unbedeutend ist. Das heißt: Trotz Umverteilung durch den Staat bestehen weiterhin Einkommensunterschiede zwischen Haushalten. Um Einkommensverhältnisse gerechter zu gestalten, müssen politische Maßnahmen im Bereich (Erwerbs-)Arbeit, Transfers und Besteuerung stärker an den realen Lebensbedingungen ausgerichtet werden."
        ],
        color: "#BDBDBD"
    },
    "notwendige_ausgaben": {
        title: "Notwendige Ausgaben",
        subtitle: "Wer mehr ausgeben muss, hat weniger Spielraum",
        text: [
          "Zur Deckung der Grundbedürfnisse gehören Ausgaben, die sich kaum vermeiden lassen. Dazu zählen Wohnen, Heizen, Energie, Lebensmittel, Mobilität sowie Kosten für Bildung und Gesundheit. Diese notwendigen Ausgaben können jedoch stark variieren, etwa je nach Region, Wohnform oder dem Zugang zu öffentlicher Infrastruktur. Alleinerziehende, Pensionist:innen aber auch Mieter:innen stehen unter erhöhtem finanziellem Druck. Sie haben oft weniger Gestaltungsspielraum als andere Personen mit vergleichbarerem nominellem Einkommen.",
          "Auch im regionalen Vergleich zeigen sich deutliche Unterschiede: Während Städte wie Salzburg oder Innsbruck höhere durchschnittliche Ausgaben aufweisen, bleibt das sogenannte Residualeinkommen – also das Einkommen nach Abzug der notwendigen Ausgaben – dort teils höher als in Graz, Linz oder Wien. Das verdeutlicht, dass nicht allein die Höhe des Einkommens entscheidend ist, sondern vor allem, wie viel davon real verfügbar bleibt. Maßnahmen sollen also räumliche und strukturelle Unterschiede ernst nehmen und Spielräume schaffen, um auf lokale Gegebenheiten angemessen reagieren zu können."
        ],        
        color: "#f0ae9f"
    },
    "soziale_infrastrukturen": {
        title: "Soziale Infrastrukturen",
        subtitle: "Wenn soziale Infrastruktur zum Standortvorteil wird",
        text: [
          "Soziale Infrastrukturen sind genauso essenziell wie technische Netze wie Straßen oder Telefonverbindungen. Zugang zu Kindergärten, Schulen, Ärzt:innen, Krankenhäusern, Pflegeheimen und ähnlichen sozialen Angeboten ist unverzichtbar für das Funktionieren unserer Gesellschaft. Dennoch diese Einrichtungen nicht überall in gleicher Qualität oder Dichte verfügbar, was regionale Unterschiede in der Lebensqualität verstärken kann. Haushalte in gut ausgestatteten Gemeinden profitieren auf mehreren Ebenen: Sie sparen Wege, Zeit und Kosten, insbesondere für Betreuung, Gesundheit oder Bildung. Das erhöht nicht nur die reale Verfügbarkeit von Einkommen, sondern wirkt sich auch positiv auf Erwerbschancen, Familienorganisation und die Vereinbarkeit von Beruf und Alltag aus.",
          "Diese Unterschiede verdeutlichen, dass der Ausbau und Erhalt sozialer Infrastruktur ein zentraler Bestandteil jeder nachhaltigen Daseinsvorsorge ist und somit auch ein Hebel zur Reduktion sozialer und regionaler Ungleichheit sein kann."
        ],
        color: "#a5cdc8"
    },
    "zeit_verwendung": {
        title: "Zeitverwendung",
        subtitle: "Armut ist oft auch Zeitmangel",
        text: [
          "Jeder Mensch verfügt über dieselben 24 Stunden am Tag – doch wie diese Zeit genutzt wird, variiert stark. Die Verteilung von Zeit für bezahlte Arbeit, unbezahlte Tätigkeiten wie Haushalt und Kinderbetreuung, Freizeit, Wegzeiten sowie Schlaf ist alles andere als gleichmäßig. Diese Differenzen haben tiefgreifende Auswirkungen auf die Lebensqualität und beeinflussen maßgeblich die Möglichkeiten, Einkommen zu erzielen oder soziale Kontakte und Aktivitäten wahrzunehmen.",
          "Frauen übernehmen deutlich mehr Care-Arbeit als Männer, ein Anteil, der mit steigender Kinderzahl weiter zunimmt. Hinzu kommt, dass mangelnde Verfügbarkeit oder schlechte Erreichbarkeit sozialer Infrastruktur den Zeitaufwand für unbezahlte Sorgearbeit erheblich erhöht. Dadurch entstehen zusätzliche Belastungen, die nicht nur die individuelle Lebensgestaltung einschränken, sondern auch gesellschaftliche Ungleichheiten verstärken. Rahmenbedingungen sollten daher besser darauf ausgerichtet werden, Zeit als wertvolle Ressource anzuerkennen und beispielsweise durch den Ausbau sozialer Infrastruktur dazu beitragen, die ungleiche Verteilung von Arbeits- und Sorgezeiten zu verringern."
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
          backgroundColor: selectedInfo.color
        }}
        style={{marginTop: 0}}
      >
        <div className="info-navigation">
          <button onClick={() => navigateText(-1)} className="nav-button">
            <ArrowBackIosNewIcon aria-label="back" />
          </button>
          <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "bold", paddingTop: "4px"}}>{selectedInfo.title}</h3>
          <button onClick={() => navigateText(1)} className="nav-button">
            <ArrowForwardIosIcon aria-label="forward" />
          </button>
        </div>
        <h4 style={{ margin: "0", fontSize: "18px", fontWeight: "bold", padding: "3px 0 3px"}}>{selectedInfo.subtitle}</h4>
        <div style={{ marginTop: "1em"}}>
          {selectedInfo.text.map((paragraph, index) => (
            <p key={index} style={{ margin: "0.6em"}}>
              {paragraph}
            </p>
          ))}
        </div>
        
      </Box>

    </div>
  );
};

export default OutlookChart;
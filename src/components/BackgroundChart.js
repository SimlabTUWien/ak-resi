import { useEffect, useRef, useState } from "react";
import { useLanguage } from '../context/LanguageContext';
import * as d3 from "d3";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from "@mui/material";
import "../styles/BackgroundChart.css";

const textMap = {
  DE: {
    elements: {
       "einkommen": {
          title: "Einkommen",
          text: "Das Haushaltseinkommen setzt sich aus verschiedenen Quellen zusammen, wie etwa Anstellungen, selbständiger Arbeit, Pensionen oder Sozialleistungen. In Österreich liegt das mittlere Haushaltseinkommen bei 2.632€, was bedeutet, dass 50 % der Haushalte über und 50 % unter diesem Betrag pro Monat zur Verfügung haben.",
          // color: "#e2e0e1"
          color: "#BDBDBD"
        },
        "notwendige_ausgaben": {
          title: "Notwendige Ausgaben",
          text: "Ausgaben für die  Deckung von Grundbedürfnissen sind Kosten, die sich nicht oder nur schwer vermeiden lassen. Dazu zählen Wohnen, Heizen, Energie, Lebensmittel, Mobilität sowie Kosten für Bildung und Gesundheit. Diese notwendigen Ausgaben können jedoch stark variieren, etwa je nach Region, Wohnform oder dem Zugang zu öffentlicher Infrastruktur.",
          color: "#f0ae9f"
        },
        "soziale_infrastrukturen": {
          title: "Soziale Infrastrukturen",
          text: "Soziale Infrastrukturen sind für das Funktionieren einer Gesellschaft genauso essenziell wie technische Infrastrukturen, also Straßen oder Telefonverbindungen. Zugang zu Kindergärten, Schulen, Ärzt:innen, Krankenhäusern, Pflegeheimen und ähnlichen sozialen Angeboten sind für große Teile der Bevölkerung unverzichtbar und dennoch sind diese Einrichtungen nicht überall in gleicher Qualität oder Dichte verfügbar, was regionale Unterschiede in der Lebensqualität verstärken kann.",
          color: "#a5cdc8"
        },
        "zeit_verwendung": {
          title: "Zeitverwendung",
          text: "Jeder Mensch verfügt über 24 Stunden pro Tag – doch wie diese Stunden genutzt werden, unterscheidet sich stark. Die Zeit die täglich für bezahlte Arbeit, unbezahlte Tätigkeiten wie Haushalt oder Kinderbetreuung, Freizeit, Wegzeiten und Schlaf aufgewandt wird, ist individuell verschieden. Diese Unterschiede beeinflussen sowohl die Lebensqualität als auch die Möglichkeiten, Einkommen zu erzielen oder soziale Aktivitäten wahrzunehmen.",
          color: "#fcd799"
        },
        "residualeinkommen": {
          title: "Residualeinkommen",
          text: "Das Residualeinkommen beschreibt das Einkommen, das nach Abzug der notwendigen Ausgaben für Wohnen, Energie, Gesundheit etc. übrig bleibt. Dieses Geld steht dann für unregelmäßige Ausgaben, Freizeitgestaltung oder zum Sparen zur Verfügung und spielt eine wichtige Rolle für die finanzielle Freiheit eines Haushalts.",
          color: "#f0d1c7"
        },
        "notwendige_ausgaben_und_SI": {
          title: "Notwendige Ausgaben und SI",
          text: "Öffentlich zugängliche und kostengünstige Bildungs- und Gesundheitseinrichtungen entlasten Haushalte finanziell, indem sie notwendige Ausgaben reduzieren. Sind solche Einrichtungen jedoch schwer erreichbar, steigen die Mobilitätskosten, oder Haushalte müssen auf teure private Angebote wie Ärzt:innen ohne Kassenvertrag ausweichen.",
          color: "#d2d5cb"
        },
        "zeit_und_infrastruktur": {
          title: "Zeit und Infrastruktur",
          text: "Soziale Infrastrukturen haben großen Einfluss darauf, wie Menschen ihre Zeit verbringen können. Ein gut erreichbarer Kindergarten ermöglicht es Eltern, mehr Zeit für bezahlte Arbeit zu nutzen. Weite Wege zu Schulen oder Gesundheitseinrichtungen hingegen führen zu langen Fahrzeiten oder – im Notfall – zu erhöhten Risiken, wenn Hilfe zu spät eintrifft.",
          color: "#e9dfbe"
        },
        "zeit_als_ressource": {
          title: "Zeit als Ressource",
          text: "Wer mehr Zeit in bezahlte Arbeit investiert, erzielt potenziell höhere Einkommen, hat jedoch weniger Zeit für andere (unbezahlte) Tätigkeiten, wie Hausarbeit, Kinderbetreuung oder ehrenamtliches Engagement. Menschen mit höherem Einkommen können ihre Zeit wiederum anders nutzen – etwa, indem sie Dienstleistungen wie Haushaltshilfen oder Kinderbetreuung „einkaufen“, um Freiräume zu schaffen.",
          color: "rgb(247, 227, 196)" // "#f0e6d7"
        }
    },
    alt: "Diagramm mit vier überlappenden Kreisen, welche die Themenbereiche dieser Webseite visualisieren"
  },
  EN: {
    elements: {
      "einkommen": {
        title: "Income",
        text: "Household income comes from various sources, such as employment, self-employment, pensions, or social benefits. In Austria, the median household income is €2,632, which means that 50% of households have more and 50% have less than this amount available per month.",
        color: "#BDBDBD"
      },
      "notwendige_ausgaben": {
        title: "Necessary Expenses",
        text: "Expenses for covering basic needs are costs that are unavoidable or difficult to reduce. These include housing, heating, energy, food, transportation, and costs for education and health. These necessary expenses can vary greatly depending on the region, type of housing, or access to public infrastructure.",
        color: "#f0ae9f"
      },
      "soziale_infrastrukturen": {
        title: "Social Infrastructures",
        text: "Social infrastructures are just as essential for the functioning of a society as technical infrastructures, such as roads or phone networks. Access to kindergartens, schools, doctors, hospitals, nursing homes, and similar social services is indispensable for large parts of the population. However, these services are not always available in the same quality or density everywhere, which can reinforce regional differences in quality of life.",
        color: "#a5cdc8"
      },
      "zeit_verwendung": {
        title: "Time Use",
        text: "Everyone has 24 hours a day, but how these hours are used varies greatly. The time spent each day on paid work, unpaid activities like household chores or childcare, leisure, commuting, and sleep is different for everyone. These differences influence both the quality of life and the possibilities to earn income or participate in social activities.",
        color: "#fcd799"
      },
      "residualeinkommen": {
        title: "Residual Income",
        text: "Residual income describes the money left after deducting necessary expenses for housing, energy, health, etc. This remaining money can be used for irregular expenses, leisure activities, or savings and plays an important role in a household’s financial freedom.",
        color: "#f0d1c7"
      },
      "notwendige_ausgaben_und_SI": {
        title: "Necessary Expenses and SI",
        text: "Publicly accessible and affordable educational and health services reduce households’ necessary expenses, thus easing the financial burden. However, if these services are difficult to access, mobility costs rise, or households may have to rely on expensive private options like doctors without insurance coverage.",
        color: "#d2d5cb"
      },
      "zeit_und_infrastruktur": {
        title: "Time and Infrastructure",
        text: "Social infrastructures have a big impact on how people can spend their time. A conveniently located kindergarten allows parents to spend more time in paid work. Long distances to schools or healthcare facilities, on the other hand, lead to longer commutes or – in emergencies – increased risks when help arrives too late.",
        color: "#e9dfbe"
      },
      "zeit_als_ressource": {
        title: "Time as a Resource",
        text: "Those who invest more time in paid work can potentially earn higher incomes but have less time for other (unpaid) tasks like housework, childcare, or volunteering. People with higher incomes can use their time differently – for example, by paying for services like household help or childcare to free up time for other activities.",
        color: "rgb(247, 227, 196)"
      }
    },
    alt: "Diagram with four overlapping circles visualizing the content areas of this website"
  }
 
};

const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    (navigator.maxTouchPoints > 0 && !window.matchMedia("(any-hover: hover)").matches)
  );
};


const BackgroundChart = () => {

  const { language } = useLanguage();
  const localizedDataMap = textMap[language];

  const svgRef = useRef(null);
  // const svgUrl = `${process.env.PUBLIC_URL}/images/1_4Kreise4Overlaps_${language.toUpperCase()}.svg`;
  const svgUrl = `${process.env.PUBLIC_URL}/images/1_4Kreise4Overlaps_${language.toUpperCase()}_V2.svg`;




  // const [isVisible, setIsVisible] = useState(isTouchDevice());

  const initialId = Object.keys(localizedDataMap.elements)[0]; // Get first key from textMap
  const [selectedInfo, setSelectedInfo] = useState(localizedDataMap.elements[initialId]);

  const navigateText = (direction) => {
    const keys = Object.keys(localizedDataMap.elements);
    const currentIndex = keys.indexOf(Object.keys(localizedDataMap.elements).find(key => localizedDataMap.elements[key] === selectedInfo));
    let newIndex = currentIndex + direction;
  
    if (newIndex < 0) newIndex = keys.length - 1; // Loop to last item
    if (newIndex >= keys.length) newIndex = 0; // Loop to first item
  
    setSelectedInfo(localizedDataMap.elements[keys[newIndex]]);
  };

  useEffect(() => {
    const initialId = Object.keys(localizedDataMap.elements)[0];

    setSelectedInfo(localizedDataMap.elements[initialId]);
  }, [localizedDataMap]);

  useEffect(() => {
    d3.xml(svgUrl).then((data) => {
      if (svgRef.current) {
        svgRef.current.innerHTML = "";
        svgRef.current.appendChild(data.documentElement);
  
        const svg = d3.select(svgRef.current).select("svg");

        svg.attr("width", "100%").attr("height", "100%").attr("alt", localizedDataMap.alt);
        svg.style("display", "block").style("margin", "auto");

        

        // const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  
        if (!isTouchDevice()) {
          svg.selectAll("g")
            .filter(function () {
              const id = d3.select(this).attr("id");
              // return id !== "basis" && id !== "schnittflaechen" && id !== "pfeile";
              return Object.keys(localizedDataMap.elements).includes(id);
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
              const info = localizedDataMap.elements[id] || { title: "Unbekannt", text: "Keine Beschreibung verfügbar.", color: "#ccc" };
            
              setSelectedInfo(info);
              
              // if (!isTouchDevice) {
              //   setIsVisible(true);
              // }
              // setIsVisible(true);
            });
        }
      }
    });
  }, [localizedDataMap, svgUrl]);
  

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
          <button onClick={() => navigateText(-1)} className="nav-button" aria-label="back">
            <ArrowBackIosNewIcon />
          </button>
          <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "bold", paddingTop: "4px"}}>{selectedInfo.title}</h3>
          <button onClick={() => navigateText(1)} className="nav-button" aria-label="forward">
            <ArrowForwardIosIcon />
          </button>
        </div>
        <p style={{ margin: "0.6em" }}>{selectedInfo.text}</p>
      </Box>

    </div>
  );
};

export default BackgroundChart;
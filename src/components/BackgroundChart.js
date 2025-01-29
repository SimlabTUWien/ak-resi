import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const svgUrl = `${process.env.PUBLIC_URL}/Abb1_4Kreise4Overlaps_DE.svg`;

  const textMap = {
    "einkommen": "Das Haushaltseinkommen setzt sich aus verschiedenen Quellen zusammen, wie etwa Anstellungen, eigenständigem Einkommen, Pensionen oder Sozialleistungen. In Österreich liegt das mittlere Haushaltseinkommen bei XXX €, was bedeutet, dass 50 % der Haushalte über und 50 % unter diesem Betrag zur Verfügung haben.",
    "notwendige_ausgaben": "Zur Deckung der Grundbedürfnisse gehören Ausgaben, die sich kaum vermeiden lassen. Dazu zählen Wohnen, Heizen, Energie, Lebensmittel, Mobilität sowie Kosten für Bildung und Gesundheit. Diese notwendigen Ausgaben können jedoch stark variieren, etwa je nach Region, Wohnform oder dem Zugang zu öffentlicher Infrastruktur.",
    "soziale_infrastrukturen": "Soziale Infrastrukturen sind genauso essenziell wie technische Netze wie Straßen oder Telefonverbindungen. Zugang zu Kindergärten, Schulen, Ärzt:innen, Krankenhäusern, Pflegeheimen und ähnlichen sozialen Angeboten ist unverzichtbar für das Funktionieren unserer Gesellschaft. Dennoch diese Einrichtungen nicht überall in gleicher Qualität oder Dichte verfügbar, was regionale Unterschiede in der Lebensqualität verstärken kann.",
    "zeit_verwendung": "Jeder Mensch hat 24 Stunden pro Tag – doch wie diese Stunden genutzt werden, unterscheidet sich stark. Zeit für bezahlte Arbeit, unbezahlte Tätigkeiten wie Haushalt oder Kinderbetreuung, Freizeit, Wegzeiten und Schlaf ist nicht für alle gleich verteilt. Diese Unterschiede beeinflussen sowohl die Lebensqualität als auch die Möglichkeiten, Einkommen zu erzielen oder soziale Aktivitäten wahrzunehmen.",
    "verfuegbares_einkommen": "Das verfügbare Einkommen, auch Residualeinkommen genannt, beschreibt das Einkommen, das nach Abzug der notwendigen Ausgaben übrig bleibt. Dieses Geld steht für unregelmäßige Ausgaben, Freizeitgestaltung oder zum Sparen zur Verfügung und spielt eine wichtige Rolle für die finanzielle Freiheit eines Haushalts.",
    "zeit_ist_geld": "Wer mehr Zeit in bezahlte Arbeit investiert, hat meist ein höheres Einkommen. Doch unbezahlte Tätigkeiten wie Hausarbeit, Kinderbetreuung oder ehrenamtliches Engagement bleiben dabei oft unberücksichtigt. Menschen mit höherem Einkommen können ihre Zeit anders nutzen – etwa, indem sie Dienstleistungen wie Haushaltshilfen oder Kinderbetreuung „einkaufen“, um Freiräume zu schaffen.",
    "zeit_und_infrastruktur": "Soziale Infrastrukturen haben großen Einfluss darauf, wie Menschen ihre Zeit verbringen können. Ein gut erreichbarer Kindergarten ermöglicht es Eltern, mehr Zeit für bezahlte Arbeit zu nutzen. Weite Wege zu Schulen oder Gesundheitseinrichtungen hingegen führen zu langen Fahrzeiten oder – im Notfall – zu erhöhten Risiken, wenn Hilfe zu spät eintrifft.",
    "geld_sparen_durch_SI": "Öffentlich zugängliche und kostengünstige Bildungs- und Gesundheitseinrichtungen entlasten Haushalte finanziell, indem sie die notwendigen Ausgaben reduzieren. Sind solche Einrichtungen jedoch schwer erreichbar, steigen die Mobilitätskosten, oder Haushalte müssen auf teure private Angebote wie Ärzt:innen ohne Kassenvertrag ausweichen."
  };

const BackgroundChart = () => {
  const svgRef = useRef(null);
  const [selectedText, setSelectedText] = useState("");

  useEffect(() => {
    d3.xml(svgUrl).then((data) => {
      if (svgRef.current) {
        svgRef.current.innerHTML = "";
        svgRef.current.appendChild(data.documentElement);

        const svg = d3.select(svgRef.current).select("svg");

         // Ensure SVG scales properly
         svg.attr("width", "100%").attr("height", "auto");

         // Center the SVG in its container
         svg.style("display", "block").style("margin", "auto");

        // Select all <g> elements except those with the excluded IDs
        svg.selectAll("g")
          .filter(function() {
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
          .on("click", function (event) {
            const id = d3.select(this).attr("id");
            const text = textMap[id] || "No description available.";
            setSelectedText(`${id}: ${text}`);
          });
      }
    });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div ref={svgRef} style={{ maxWidth: "100%", overflow: "hidden" }}></div>
      <p>{selectedText}</p>
    </div>
  );
};

export default BackgroundChart;


// import React, { useEffect, useRef, useState } from "react";
// import * as d3 from "d3";

// const svgUrl = `${process.env.PUBLIC_URL}/Abb1_4Kreise4Overlaps_DE.svg`;

// const BackgroundChart = () => {
//   const svgRef = useRef();
//   const [selectedText, setSelectedText] = useState("");

//   const textMap = {
//     "time-money": "This represents the trade-off between time and money.",
//     "effort-benefit": "This represents the balance between effort and benefit.",
//     "risk-reward": "This represents the relationship between risk and reward.",
//     "knowledge-action": "This represents the connection between knowledge and action.",
//   };

//   useEffect(() => {
//     d3.xml(svgUrl).then((data) => {
//       const svgContainer = d3.select(svgRef.current);

//       // Remove any existing SVG before appending a new one
//       svgContainer.selectAll("svg").remove();

//       // Append imported SVG
//       const importedNode = document.importNode(data.documentElement, true);
//       svgContainer.node().appendChild(importedNode);

//       // Apply D3 selection on the newly imported SVG
//       const svg = d3.select(svgRef.current).select("svg");

//       // Add hover effect to all rectangles
//       svg.selectAll("rect")
//         .on("mouseover", function () {
//           d3.select(this)
//             .transition()
//             .duration(200)
//             .attr("stroke", "black") // Add border
//             .attr("stroke-width", 2);
//         })
//         .on("mouseout", function () {
//           d3.select(this)
//             .transition()
//             .duration(200)
//             .attr("stroke", "none");   // Remove stroke
//         });

//       // Add click event to display unique text
//       svg.selectAll("rect").on("click", function () {
//         const rectId = d3.select(this).attr("id"); // Get the ID of the clicked rect
//         if (textMap[rectId]) {
//           setSelectedText(textMap[rectId]); // Update text state
//         }
//       });

//     });
//   }, []);

//   return (
//     <div>
//       <div ref={svgRef}></div>
//       {selectedText && (
//         <p style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
//           {selectedText}
//         </p>
//       )}
//     </div>
//   );
// };

// export default BackgroundChart;
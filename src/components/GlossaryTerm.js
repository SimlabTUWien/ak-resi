import React, { useMemo } from "react";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const sectionColors = {
  intro: "#808080", //"#b3b3b3",
  income: "#808080",
  residualIncome: "#d99484", //"#f0ae9f",
  "social-infrastructure": "#72a69f",//"#a5cdc8",
  "time-usage": "#fcd799",
  "what-now": "#808080" //"#b3b3b3",
};

const StyledGlossaryTerm = styled("span")(({ color }) => ({
  cursor: "pointer",
  color: color || "inherit",
  fontStyle: "italic",
  fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 500',
  "&:hover": {
    color: color ? `${color}CC` : "inherit", // Adding opacity via hex code (CC ~ 80% opacity)
  },
}));

const GlossaryTerm = ({ className, sectionId, children }) => {
  const tooltipStyles = {
    backgroundColor: "#333",
    color: "white",
    fontSize: "0.9rem",
    border: "1px solid #444",
  };

  const arrowColor = "#333";
  const color = sectionColors[sectionId] || "inherit"; // Default to inherit if sectionId is missing

  const glossaryTerms = useMemo(
    () => ({
      incomeInequality:
        "Maß für die ungleiche Verteilung von Einkommen innerhalb einer Gesellschaft.",
      communitySizeClass:
        "Kategorisierung von Gemeinden nach Einwohnerzahl zur statistischen Analyse.",
      gini: "Kennzahl zur Messung der Einkommensungleichheit; Werte zwischen 0 (völlige Gleichheit) und 1 (maximale Ungleichheit).",
      consumption:
        "Statistische Erhebung zu den Ausgaben und dem Konsumverhalten von Haushalten.",
      median:
        "Der mittlere Wert einer geordneten Datenreihe, bei dem 50 % der Werte darüber und 50 % darunter liegen.",
      expenditure:
        "Unvermeidbare Kosten für Grundbedürfnisse wie Wohnen, Energie, Ernährung, Bildung, Mobilität und Gesundheitsversorgung.",
      quintil:
        "Ein Fünftel einer geordneten Datenreihe, oft genutzt zur Analyse von Einkommensgruppen.",
      residualIncome:
        "Einkommen, das nach Abzug der notwendigen Ausgaben für anderen Konsum oder Ersparnisse übrig bleibt.",
      si: "Einrichtungen und Dienstleistungen, die das gesellschaftliche Leben unterstützen, z. B. Bildung, Gesundheit, Pflegeeinrichtungen und andere soziale Einrichtungen.",
      timeUsage:
        "Studie zur Analyse, wie Menschen ihre Zeit für Erwerbsarbeit, Kinderbetreuung, Haushalt, Freizeit und andere Aktivitäten nutzen.",
    }),
    []
  );

  // Extract term key from className
  const termKey = className?.split(" ").find((cls) => glossaryTerms[cls]);
  const tooltipContent = termKey ? glossaryTerms[termKey] : null;

  const handleClick = () => {
    if (!termKey) return;
    const glossaryUrl = `${window.location.origin}/ak-resi#/glossar#${termKey}`;
    window.open(glossaryUrl, "_blank");
  };

  return tooltipContent ? (
    <Tooltip
      title={tooltipContent}
      placement="top"
      arrow
      slotProps={{
        tooltip: {
          sx: tooltipStyles,
        },
        arrow: {
          sx: {
            color: arrowColor,
          },
        },
      }}
    >
      <StyledGlossaryTerm color={color} onClick={handleClick}>
        {children}
      </StyledGlossaryTerm>
    </Tooltip>
  ) : (
    <StyledGlossaryTerm color={color}>{children}</StyledGlossaryTerm>
  );
};

export default GlossaryTerm;


// import React, { useMemo } from "react";
// import Tooltip from "@mui/material/Tooltip";
// import { styled } from "@mui/material/styles";

// const StyledGlossaryTerm = styled("span")(({ tooltipTheme }) => ({
//     cursor: "pointer",
//     color: tooltipTheme === "dark" ? "#568f88" : "#e9dfbe",
//     "&:hover": {
//       color: tooltipTheme === "dark" ? "#89aba7" : "#f0e6d7",
//     },
//   }));

// const GlossaryTerm = ({ className, children, theme = "light" }) => {

//     const tooltipStyles =
//     theme === "light"
//       ? {
//           backgroundColor: "#f4f4f4",
//           color: "black",
//           fontSize: "0.9rem",
//           border: "1px solid rgb(233, 233, 233)"
//       }
//       : {
//           backgroundColor: "#333", // very dark grey
//           color: "white",
//           fontSize: "0.9rem",
//           border: "1px solid #444", // slightly lighter dark grey
//         };

//     const arrowColor = theme === "light" ? "#f4f4f4" : "#333";

//     const glossaryTerms = useMemo(() => ({
//         incomeInequality: "Maß für die ungleiche Verteilung von Einkommen innerhalb einer Gesellschaft.",
//         communitySizeClass: "Kategorisierung von Gemeinden nach Einwohnerzahl zur statistischen Analyse.",
//         gini: "Kennzahl zur Messung der Einkommensungleichheit; Werte zwischen 0 (völlige Gleichheit) und 1 (maximale Ungleichheit).",
//         consumption: "Statistische Erhebung zu den Ausgaben und dem Konsumverhalten von Haushalten.",
//         median: "Der mittlere Wert einer geordneten Datenreihe, bei dem 50 % der Werte darüber und 50 % darunter liegen.",
//         expenditure: "Unvermeidbare Kosten für Grundbedürfnisse wie Wohnen, Energie, Ernährung, Bildung, Mobilität und Gesundheitsversorgung.",
//         quintil: "Ein Fünftel einer geordneten Datenreihe, oft genutzt zur Analyse von Einkommensgruppen.",
//         residualIncome: "Einkommen, das nach Abzug der notwendigen Ausgaben für anderen Konsum oder Ersparnisse übrig bleibt.",
//         si: "Einrichtungen und Dienstleistungen, die das gesellschaftliche Leben unterstützen, z. B. Bildung, Gesundheit, Pflegeeinrichtungen und andere soziale Einrichtungen.",
//         timeUsage: "Studie zur Analyse, wie Menschen ihre Zeit für Erwerbsarbeit, Kinderbetreuung, Haushalt, Freizeit und andere Aktivitäten nutzen.",
//     }), []);

//     const termKey = className?.split(" ").find((cls) => glossaryTerms[cls]);
//     const tooltipContent = termKey ? glossaryTerms[termKey] : null;

//     const termId = termKey || "";
    
//     const handleClick = () => {
//       if (!termId) return;
//       const glossaryUrl = `${window.location.origin}/ak-resi#/glossar#${termId}`;
//       window.open(glossaryUrl, "_blank");
//     };

//     return tooltipContent ? (
//         <Tooltip 
//             title={tooltipContent} 
//             placement="top"
//             arrow
//             slotProps={{
//                 tooltip: {
//                     sx: tooltipStyles,
//                   },
//                   arrow: {
//                     sx: {
//                       color: arrowColor,
//                     },
//                 }
//           }}
//         > 
//             <StyledGlossaryTerm tooltipTheme={theme} className={className} onClick={handleClick}>
//                 {children}
//             </StyledGlossaryTerm>
//         </Tooltip>
//     ) : (
//         <StyledGlossaryTerm tooltipTheme={theme} className={className}>
//             {children}
//         </StyledGlossaryTerm>
//     );
// };

// export default GlossaryTerm;
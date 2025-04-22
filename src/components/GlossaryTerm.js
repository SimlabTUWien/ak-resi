import React, { useMemo, useRef, useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
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

const getStyledGlossaryTerm = (isMobile) => styled("span")(({ color }) => ({
  cursor: "pointer",
  color: color || "inherit",
  fontStyle: "italic",
  fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 500',
  display: isMobile ? "inline" : "inline-block",
  wordBreak: isMobile ? "normal" : "break-word",
  overflowWrap: isMobile ? "normal" : "break-word",
  hyphens: isMobile ? "auto" : "none",
  "&:hover": {
    color: color ? `${color}CC` : "inherit", // Adding opacity via hex code (CC ~ 80% opacity)
  },
}));

const GlossaryTerm = ({ className, sectionId, children }) => {

  const { language } = useLanguage();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const StyledGlossaryTerm = getStyledGlossaryTerm(isMobile);
  const wordRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      DE: {
        incomeInequality: "Maß für die ungleiche Verteilung von Einkommen innerhalb einer Gesellschaft.",
        communitySizeClass: "Kategorisierung von Gemeinden nach Einwohnerzahl zur statistischen Analyse.",
        gini: "Kennzahl zur Messung der Einkommensungleichheit; Werte zwischen 0 (völlige Gleichheit) und 1 (maximale Ungleichheit).",
        consumption: "Statistische Erhebung zu den Ausgaben und dem Konsumverhalten von Haushalten.",
        median: "Der mittlere Wert einer geordneten Datenreihe, bei dem 50 % der Werte darüber und 50 % darunter liegen.",
        expenditure: "Unvermeidbare Kosten für Grundbedürfnisse wie Wohnen, Energie, Ernährung, Bildung, Mobilität und Gesundheitsversorgung.",
        quintil: "Ein Fünftel einer geordneten Datenreihe, oft genutzt zur Analyse von Einkommensgruppen.",
        residualIncome: "Einkommen, das nach Abzug der notwendigen Ausgaben für anderen Konsum oder Ersparnisse übrig bleibt.",
        si: "Einrichtungen und Dienstleistungen, die das gesellschaftliche Leben unterstützen, z. B. Bildung, Gesundheit, Pflegeeinrichtungen und andere soziale Einrichtungen.",
        timeUsage: "Studie zur Analyse, wie Menschen ihre Zeit für Erwerbsarbeit, Kinderbetreuung, Haushalt, Freizeit und andere Aktivitäten nutzen.",
      },
      EN: {
        incomeInequality: "Measure of the unequal distribution of income within a society.",
        communitySizeClass: "Categorization of municipalities by population size for statistical analysis.",
        gini: "Indicator of income inequality; values range from 0 (perfect equality) to 1 (maximum inequality).",
        consumption: "Statistical survey of household spending and consumption behavior.",
        median: "The middle value of a sorted data set, with 50% of values above and 50% below.",
        expenditure: "Essential costs for basic needs such as housing, energy, food, education, transport, and healthcare.",
        quintil: "One fifth of a sorted data set, often used to analyze income groups.",
        residualIncome: "Income remaining after necessary expenses, available for other consumption or savings.",
        si: "Facilities and services that support social life, such as education, healthcare, and care institutions.",
        timeUsage: "Study analyzing how people spend their time on work, childcare, household, leisure, and other activities.",
      },
    }),[]
  );

  // Extract term key from className
  const selectedLanguage = glossaryTerms[language] ? language : "DE";

  const termKey = className?.split(" ").find((cls) => glossaryTerms[selectedLanguage][cls]);
  const tooltipContent = termKey ? glossaryTerms[selectedLanguage][termKey] : null;

  const handleClick = () => {
    if (!termKey) return;
    const glossaryUrl = `${window.location.origin}/ak-resi#/glossar#${termKey}`;
    
    if (isMobile) {
      window.open(glossaryUrl, "_blank");
    } else {
      window.location.href = glossaryUrl;
    }
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
      <StyledGlossaryTerm ref={wordRef} color={color} onClick={handleClick}>
        {children}
      </StyledGlossaryTerm>
    </Tooltip>
  ) : (
    <StyledGlossaryTerm ref={wordRef} color={color}>{children}</StyledGlossaryTerm>
  );
};

export default GlossaryTerm;


/* no break of lines approach */

// import React, { useMemo, useRef, useState, useEffect } from "react";
// import Tooltip from "@mui/material/Tooltip";
// import { styled } from "@mui/material/styles";

// const sectionColors = {
//   intro: "#808080",
//   income: "#808080",
//   residualIncome: "#d99484",
//   "social-infrastructure": "#72a69f",
//   "time-usage": "#fcd799",
//   "what-now": "#808080",
// };

// const StyledGlossaryTerm = styled("span")(({ color }) => ({
//   cursor: "pointer",
//   color: color || "inherit",
//   fontStyle: "italic",
//   fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 500',
//   // display: "inline-block",
//   wordBreak: "break-word",
//   overflowWrap: "break-word",
//   hyphens: "none",
//   "&:hover": {
//     color: color ? `${color}CC` : "inherit",
//   },
// }));

// const GlossaryTerm = ({ className, sectionId, children }) => {
//   const wordRef = useRef(null);
//   const [isSplit, setIsSplit] = useState(false);

  // const glossaryTerms = useMemo(
  //   () => ({
  //     incomeInequality:
  //       "Maß für die ungleiche Verteilung von Einkommen innerhalb einer Gesellschaft.",
  //     communitySizeClass:
  //       "Kategorisierung von Gemeinden nach Einwohnerzahl zur statistischen Analyse.",
  //     gini: "Kennzahl zur Messung der Einkommensungleichheit; Werte zwischen 0 (völlige Gleichheit) und 1 (maximale Ungleichheit).",
  //     consumption:
  //       "Statistische Erhebung zu den Ausgaben und dem Konsumverhalten von Haushalten.",
  //     median:
  //       "Der mittlere Wert einer geordneten Datenreihe, bei dem 50 % der Werte darüber und 50 % darunter liegen.",
  //     expenditure:
  //       "Unvermeidbare Kosten für Grundbedürfnisse wie Wohnen, Energie, Ernährung, Bildung, Mobilität und Gesundheitsversorgung.",
  //     quintil:
  //       "Ein Fünftel einer geordneten Datenreihe, oft genutzt zur Analyse von Einkommensgruppen.",
  //     residualIncome:
  //       "Einkommen, das nach Abzug der notwendigen Ausgaben für anderen Konsum oder Ersparnisse übrig bleibt.",
  //     si: "Einrichtungen und Dienstleistungen, die das gesellschaftliche Leben unterstützen, z. B. Bildung, Gesundheit, Pflegeeinrichtungen und andere soziale Einrichtungen.",
  //     timeUsage:
  //       "Studie zur Analyse, wie Menschen ihre Zeit für Erwerbsarbeit, Kinderbetreuung, Haushalt, Freizeit und andere Aktivitäten nutzen.",
  //   }),
  //   []
  // );

//   const termKey = className?.split(" ").find((cls) => glossaryTerms[cls]);
//   const tooltipContent = termKey ? glossaryTerms[termKey] : null;
//   const color = sectionColors[sectionId] || "inherit";

//   // Check if the word is split across two lines
//   useEffect(() => {
//     if (wordRef.current) {
//       const wordRect = wordRef.current.getBoundingClientRect();
//       const firstLetter = wordRef.current.firstChild; // First character or element

//       if (firstLetter && firstLetter.getBoundingClientRect) {
//         const firstLetterRect = firstLetter.getBoundingClientRect();

//         // If top positions differ, the word is split into two lines
//         setIsSplit(Math.round(wordRect.top) !== Math.round(firstLetterRect.top));
//       }
//     }
//   }, [children]);

//   const handleClick = () => {
//     if (!termKey) return;
//     const glossaryUrl = `${window.location.origin}/ak-resi#/glossar#${termKey}`;
//     window.open(glossaryUrl, "_blank");
//   };

//   return tooltipContent ? (
//     <Tooltip
//       title={tooltipContent}
//       placement={isSplit ? "bottom" : "top"} // Adjust tooltip placement if split
//       arrow
//       slotProps={{
//         tooltip: {
//           sx: {
//             backgroundColor: "#333",
//             color: "white",
//             fontSize: "0.9rem",
//             border: "1px solid #444",
//           },
//         },
//       }}
//     >
//       <StyledGlossaryTerm ref={wordRef} color={color} onClick={handleClick}>
//         {children}
//       </StyledGlossaryTerm>
//     </Tooltip>
//   ) : (
//     <StyledGlossaryTerm ref={wordRef} color={color}>
//       {children}
//     </StyledGlossaryTerm>
//   );
// };

// export default GlossaryTerm;


/*OLD APPROACH WITH LIGHT/DARK THEMES */

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
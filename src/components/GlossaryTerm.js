import { useMemo, useRef, useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const sectionColors = {
  intro: "#6b6b6b", //"#b3b3b3",
  income: "#6b6b6b",
  residualIncome: "#d99484", //"#f0ae9f",
  "social-infrastructure": "#72a69f",//"#a5cdc8",
  "time-usage": "#fab741", //"#fcd799",
  "what-now": "#6b6b6b" //"#b3b3b3",
};

const getStyledGlossaryTerm = (isMobile) => styled("span")(({ color }) => ({
  cursor: "pointer",
  color: color || "inherit",
  fontVariationSettings: '"slnt" -10, "wdth" 100, "wght" 500',
  display: isMobile ? "inline" : "inline-block",
  wordBreak: isMobile ? "normal" : "break-word",
  overflowWrap: isMobile ? "normal" : "break-word",
  hyphens: isMobile ? "manual" : "none",
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
    background: "rgba(0, 0, 0, 0.85)",
    color: "white",
    fontSize: "1.1rem",
    fontFamily: "ivyepic-variable, sans-serif",
    fontVariationSettings: "'wght' 400",
    border: "1px solid #444",
    borderRadius: "8px",
    padding: "6px 10px",
    textAlign: "justify",
    hyphens: "auto"
  };

  const arrowColor = "#333";
  const color = sectionColors[sectionId] || "inherit"; // Default to inherit if sectionId is missing

  const glossaryTerms = useMemo(
    () => ({
      DE: {
        incomeInequality: "Maß für die ungleiche Verteilung von Einkommen innerhalb einer Gesellschaft.",
        municipalitySizeClass: "Kategorisierung von Gemeinden nach Einwohnerzahl zur statistischen Analyse.",
        gini: "Kennzahl zur Messung der Einkommensungleichheit; Werte zwischen 0 (völlige Gleichheit) und 1 (maximale Ungleichheit).",
        consumption: "Statistische Erhebung zu den Ausgaben und dem Konsumverhalten von Haushalten.",
        median: "Der mittlere Wert einer geordneten Datenreihe, bei dem 50 % der Werte darüber und 50 % darunter liegen.",
        expenditure: "Unvermeidbare Kosten für Grundbedürfnisse wie Wohnen, Energie, Ernährung, Bildung, Mobilität und Gesundheitsversorgung.",
        postsecondaryEducation: "Postsekundäre Ausbildung bezeichnet Bildungsprogramme, die nach Abschluss der Sekundarstufe II (z. B. Matura oder gleichwertiger Abschluss) beginnen, aber nicht zwingend zu einem Hochschulabschluss führen. Beispiele für die postsekundäre Bildung sind Kollegs oder Meisterschulen.",
        tertiaryEducation: "Die tertiäre Ausbildung umfasst alle Bildungsprogramme, die nach der Sekundarstufe II (z. B. Matura) beginnen und zu einem akademischen oder hochqualifizierten Berufsabschluss führen. Diese Ausbildung findet klassischerweise an Universitäten oder Fachhochschulen statt.",
        quintil: "Ein Fünftel einer geordneten Datenreihe, oft genutzt zur Analyse von Einkommensgruppen.",
        residualIncome: "Einkommen, das nach Abzug der notwendigen Ausgaben für anderen Konsum oder Ersparnisse übrig bleibt.",
        si: "Einrichtungen und Dienstleistungen, die das gesellschaftliche Leben unterstützen, z. B. Bildung, Gesundheit, Pflegeeinrichtungen und andere soziale Einrichtungen.",
        spillovers: "Spillovers im Bereich der sozialen Infrastruktur bedeuten, dass Einrichtungen wie Schulen, Kindergärten und Ärzt:innenpraxen nicht nur den Haushalten in der jeweiligen Gemeinde zugutekommen, sondern auch von Menschen aus umliegenden Gemeinden genutzt werden können. Das heißt: Der Nutzen „spielt über“ die Gemeindegrenzen hinaus.",
        timeUsage: "Studie zur Analyse, wie Menschen ihre Zeit für Erwerbsarbeit, Kinderbetreuung, Haushalt, Freizeit und andere Aktivitäten nutzen.",
      },
      EN: {
        incomeInequality: "Measure of the unequal distribution of income within a society.",
        municipalitySizeClass: "Categorization of municipalities by population size for statistical analysis.",
        gini: (
          <>
            Indicator of income inequality;
            <br/>
            values range from 0 (perfect equality) to 1 (maximum inequality).
          </>
        ),
        consumption: "Statistical survey of household spending and consumption behavior.",
        median: "The middle value of a sorted data set, with 50% of values above and 50% below.",
        expenditure: "Essential costs for basic needs such as housing, energy, food, education, transport, and healthcare.",
        postsecondaryEducation: "Post-secondary education refers to educational programs that begin after completion of upper secondary level (e.g. Matura or equivalent) but do not necessarily lead to a university degree. Examples of post-secondary education are colleges or master schools.",
        tertiaryEducation: "Tertiary education includes all educational programs that begin after upper secondary level (e.g. Matura) and lead to an academic or highly qualified professional qualification. This education traditionally takes place at universities or universities of applied sciences.",
        quintil: "One fifth of a sorted data set, often used to analyze income groups.",
        residualIncome: "Income remaining after necessary expenses, available for other consumption or savings.",
        si: "Facilities and services that support social life, such as education, healthcare, and care institutions.",
        spillovers: "Spillovers in the area of social infrastructure mean that facilities such as schools, kindergartens and doctors' surgeries not only benefit households in the respective municipality, but can also be used by people from surrounding communities. In other words, the benefits “play across” municipal boundaries.",
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
    
    // if (isMobile) {
    //   window.open(glossaryUrl, "_blank");
    // } else {
    //   window.location.href = glossaryUrl;
    // }
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
      <StyledGlossaryTerm ref={wordRef} color={color} onClick={handleClick}>
        {children}
      </StyledGlossaryTerm>
    </Tooltip>
  ) : (
    <StyledGlossaryTerm ref={wordRef} color={color}>{children}</StyledGlossaryTerm>
  );
};

export default GlossaryTerm;
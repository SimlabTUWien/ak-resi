import React, { useState, useEffect } from "react";
import {Accordion, AccordionSummary, AccordionDetails, Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';


import HeroSection from "../components/HeroSection";
import BackgroundChart from '../components/BackgroundChart';
import ScrollProgressBar from '../components/ScrollProgressBar';
import ExpenditureCharts from '../components/ExpenditureCharts/ExpenditureCharts';
import HouseholdTable from "../components/HouseholdTable";
import CounterAnimation from "../components/CounterAnimation";
import SocialInfrastructureTable from "../components/SocialInfrastructureTable";
import MeanMapChart from "../components/MeanMapChart";
import SIOverallIndicatorMap from "../components/SocialInfrastructureMaps/SIOverallIndicatorMap";
import FloatingButton from "../components/FloatingButton";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TrainIcon from '@mui/icons-material/Train';

import "../styles/HomePage.css";
import ResiDefinitionChart from "../components/ResiDefinitionChart";
import SISubIndicatorMap from "../components/SocialInfrastructureMaps/SISubIndicatorMap";
import IndicatorSelect from "../components/IndicatorSelect";
import GlossaryTerm from "../components/GlossaryTerm";
import OutlookChart from "../components/OutlookChart";

export default function HomePage() {

    const [showFloatingButton, setShowFloatingButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setShowFloatingButton(window.scrollY > 1400);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);


    const [expenditureMode, setExpenditureMode] = useState("quantils");
    const [siMode, setSiMode] = useState("so_cars");
    const [siSubMode, setSiSubMode] = useState("so_sub");



    const handleToggleModeChange = (type, newValue) => {
        if (newValue !== null) {
            if (type === "expenditure") {
                setExpenditureMode(newValue);
            } else if (type === "si") {
                setSiMode(newValue);
            } else if (type === "si-sub") {
                setSiSubMode(newValue);
            }
        }
    };

    return (
        <>

        <HeroSection></HeroSection>

        <div className='title-wrapper'>
            <section className="title-section" id="intro">
            
            <h1 className="title">Perspektiven auf Ungleichheit in Österreich</h1>
            <h3>Residualeinkommen, soziale Infrastruktur und Zeitverwendung</h3>

            <div className='image-container logo-large'>
                <img style={{width: '240px'}} src={`${process.env.PUBLIC_URL}/images/Logo_project_icons.png`} alt="showing the four core aspects of the project" />
            </div>
            </section>
        </div>


        {/* Scrollable Content */}
        <div className="content-wrapper">

            <section className='background' id="background">
                <h2 className="content-header"> Hintergrund / Einleitung</h2>
                <p className="paragraph">
                    Die Ressourcen in unserer Gesellschaft sind ungleich verteilt. Traditionelle Indikatoren zur Messung von Ungleichheit, wie das Bruttoinlandsprodukt oder der <GlossaryTerm className="glossary-term gini" sectionId="intro">Gini-Index</GlossaryTerm>, konzentrieren sich vor allem auf Einkommensunterschiede. Aber das Einkommen allein erzählt nicht die ganze Geschichte.
                </p>
                <p className='paragraph'>
                    Unser Leben wird auch von anderen Faktoren beeinflusst: Wie hoch sind die Kosten für Grundbedürfnisse wie Wohnen, Energie oder Mobilität? Welche Infrastruktur steht uns zur Verfügung, etwa in den Bereichen Bildung oder Gesundheit? Und wie gehen wir mit der kostbaren Ressource Zeit um, die oft ungleich verteilt ist - sei es durch berufliche Verpflichtungen, unbezahlte Sorgearbeit oder andere Verantwortlichkeiten?
                </p>
                <p className='paragraph'>
                    Diese Aspekte sind nicht unabhängig voneinander, sondern stehen in enger Wechselwirkung. Wenn die Miete einen Großteil des Einkommens beansprucht, bleibt für andere Lebensbereiche weniger übrig. Wer weite Wege zurücklegen muss, verliert Zeit für Erholung, Bildung oder soziale Teilhabe. Solche Ungleichheiten wirken sich nicht nur auf das Leben des Einzelnen aus, sondern beeinflussen unsere Gesellschaft als Ganzes: Sie fördern Polarisierung, gefährden den sozialen Zusammenhalt und verschärfen globale Herausforderungen wie den Klimawandel.
                </p>
                <p className='paragraph'>
                    Für eine umfassende Betrachtung der Lebensqualität müssen wir daher über das Einkommen hinausschauen: Im Zusammenspiel von Einkommen, Ausgaben, Infrastruktur und Zeitverwendung lässt sich ein vollständigeres Bild der Lebenswirklichkeit zeichnen. 
                </p>
                <p className='paragraph'>
                    Genau dieses Ziel hatte das <span className="boldText">Re:Si:Ze</span> Projekt. Auf dieser Website findet ihr die Ergebnisse der Untersuchung dieser Ebenen in Österreich.
                </p>
                <p className='paragraph click-information'>
                    Klicke auf die Elemente um mehr zu erfahren: 
                </p>

                {/* <BackgroundChart/> */}
                <div className='background-chart'>
                    <BackgroundChart/>
                </div>
            </section>

            <p className='paragraph content-information'>
                In den weiteren Teilen dieser Website werden nun Einblicke in diese Bereiche gegeben: 
            </p>

            <section id="income">

                <h2 className="content-header">Wieviel Einkommen haben die Haushalte?</h2>
                <p className='paragraph'>
                    Das Haushaltseinkommen ist ein zentraler Indikator für wirtschaftliche Ungleichheit und Lebensstandard in Österreich. Um eine präzisere Analyse der Einkommensverteilung zu ermöglichen, wird das Haushaltseinkommen häufig in sogenannte <GlossaryTerm className="glossary-term quintil" sectionId="income">Quintile</GlossaryTerm> eingeteilt. Aber was bedeutet das genau, und warum ist diese Einteilung sinnvoll?
                </p>

                <h2 className="content-header">Was sind Quintile?</h2>
                <div className='paragraph'>
                    <p>Ein <GlossaryTerm className="glossary-term quintil" sectionId="income">Quintil</GlossaryTerm> beschreibt jeweils ein Fünftel der Haushalte, geordnet nach ihrem verfügbaren Einkommen. Das bedeutet:</p>
                    <ul className="custom-list background">
                        <li>Erstes Quintil: Die 20 % der Haushalte mit dem niedrigsten Einkommen</li>
                        <li>Zweites Quintil: Haushalte mit Einkommen zwischen den unteren 20 % und 40 %</li>
                        <li>Drittes Quintil: Die mittleren 20 % der Haushalte</li>
                        <li>Viertes Quintil: Haushalte mit Einkommen zwischen den oberen 40 % und 80 %</li>
                        <li>Fünftes Quintil: Die 20 % der Haushalte mit dem höchsten Einkommen</li>
                    </ul>
                </div>

                <h2 className="content-header">Warum teilen wir das Haushaltseinkommen in Quintile?</h2>
                <p className='paragraph'>
                    Die Einteilung in <GlossaryTerm className="glossary-term quintil" sectionId="income">Quintile</GlossaryTerm> hilft, die Einkommensverteilung und wirtschaftliche Ungleichheiten besser sichtbar zu machen. Während Durchschnittswerte oft verzerrt sein können (z. B. durch extreme Einkommen an der Spitze), zeigen <GlossaryTerm className="glossary-term quintil" sectionId="income">Quintile</GlossaryTerm> deutlicher, wie Einkommen auf verschiedene gesellschaftliche Gruppen verteilt sind. 
                </p>

            <p style={{margin: '32px 0 0'}}>TODO: Grafik Quintils?</p>
            <p>Das Medianhaushaltseinkommen in Österreich ist XX. Das erste Quintil XXX.</p>


            </section>

            <section id="residualIncome">
                <h1 className="content-header">Residualeinkommen in Österreich</h1>
            <p className='paragraph'>
                Während das Haushaltseinkommen ein wichtiger Indikator für wirtschaftliche Verhältnisse ist, stellt sich die Frage, wie viel davon nach den grundlegenden Lebenshaltungskosten im Monat übrigbleibt. Das sogenannte <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> – also das Einkommen nach den Ausgaben für Essen, Wohnen, Bildung, Gesundheit und Mobilität – gibt einen noch genaueren Einblick in die finanzielle Lage der Haushalte. Es zeigt, wie viel finanzieller Spielraum tatsächlich für individuelle Bedürfnisse, Ersparnisse oder Freizeitaktivitäten zur Verfügung steht. Wie man hier sehen kann, lässt sich das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> berechnen, indem man vom Einkommen der Haushalte, <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendige Ausgaben</GlossaryTerm> abzieht. 
            </p>
            
            <Box 
                className="definition-chart-container"
                sx={{
                    // background: "#f4f4f4",
                    // boxShadow: 1,
                    padding: 0,
                    borderRadius: 1,
                    // fontSize: '14px',
                    marginTop: 2
                }}
            >
                <ResiDefinitionChart/>
            </Box>


            <div style={{margin: '24px 0 24px'}}>
                <Accordion sx={{background: "#f4f4f4"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h4" sx={{ fontSize: '1.125rem'}}>Wo kommen unsere Daten her und wie funktioniert die Berechnung genau?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Zur Berechnung der verfügbaren Einkommen werden die Abgestimmte Lohn- und Einkommensteuerstatistik 2019 und 2020 und die <GlossaryTerm className="glossary-term consumption" sectionId="residualIncome">Konsumerhebung</GlossaryTerm> (2019-2020) verwendet. Die Informationen zu Personen können über eine ID zwischen den beiden Erhebungen verknüpft und Personen eindeutig Haushalten zugeordnet werden. Das an die OECD-Skala angepasste Haushaltseinkommen wird berechnet. Die <GlossaryTerm className="glossary-term consumption" sectionId="residualIncome">Konsumerhebung</GlossaryTerm> liefert detaillierte Informationen über die Ausgaben der Haushalte, wobei die unter <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendige Ausgaben</GlossaryTerm> zusammengefassten Kategorien identifiziert werden können. Während für alle Personen in Österreich mit steuerrelevantem Einkommen Informationen vorliegen, handelt es sich bei der <GlossaryTerm className="glossary-term consumption" sectionId="residualIncome">Konsumerhebung</GlossaryTerm> um eine repräsentative Stichprobenerhebung, die 6.873 Haushalte umfasst. Das verfügbare Einkommen kann daher nur für diese Haushalte berechnet werden, weshalb die Ergebnisse auf der Ebene von Personengruppen, Regionen und Haushaltstypen ausgewertet werden.</Typography>
                </AccordionDetails>
                </Accordion>
            </div>

            <h2 className="content-header">Wofür geben Haushalte Geld aus?</h2>
            <p className='paragraph'>
                Betrachtet man alle Haushalte gemeinsam, zeigt sich, dass im Durchschnitt etwa 10% des Einkommens für Wohnen aufgewendet werden. Ein ähnlicher Anteil entfällt auf Ernährung. Doch ein genauerer Blick auf Mieter:innenhaushalte offenbart eine deutliche finanzielle Belastung: Hier steigt der Anteil der Wohnkosten drastisch auf über 23% des Einkommens. Diese Differenz wirkt sich auch stark auf das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> aus – also das Einkommen, das nach Grundausgaben für Wohnen, Ernährung, Bildung, Gesundheit und Mobilität verbleibt. Während der Median des <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommens</GlossaryTerm> über alle Haushalte hinweg bei etwa 70% des Haushaltseinkommens liegt, sinkt dieser Wert für Mieter:innenhaushalte auf nur noch ca. 58 %.Das bedeutet, dass Mieter:innen deutlich weniger finanziellen Spielraum für weitere Ausgaben oder Rücklagen haben.
            </p>

            <p style={{margin: '32px 0 0'}}>TODO: Überblick über Ausgabenkategorien - Kreisdiagramm</p>

            <h2 className="content-header">Residualeinkommen nach Haushaltstyp</h2>
            <p className='paragraph'>
            Wieviel Haushalte einnehmen und ausgeben ist stark von der Haushaltsform abhängig. Mehr erwerbstätige Personen im Haushalt bringt ein höheres Einkommen, während weitere Haushaltsmitglieder auch höhere Konsumausgaben bedeuten. Hier sieht man die mittleren Einkommen, <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendigen Ausgaben</GlossaryTerm> und daraus ergebende verfügbare Einkommen für unterschiedliche Haushaltstypen:
            </p>

            {/* Table mit/ohne Piktogramme */}
            <HouseholdTable/>

            <h2 className="content-header">Einkommen und Residualeinkommen</h2>
            <p className='paragraph'>
                Der Scatterplot, der das Haushaltseinkommen und das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> darstellt, zeigt eine starke positive Korrelation: Haushalte mit höherem Einkommen verfügen in der Regel auch über ein höheres <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm>. Das ist zu erwarten, da höhere Einkommen mehr Spielraum nach Abzug fixer Ausgaben lassen.
            </p>

            <p className='paragraph'>
                Trotz dieser Korrelation ist es wichtig, das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> separat zu betrachten. Während das Haushaltseinkommen allein oft als Maßstab für Wohlstand verwendet wird, zeigt das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> realistischeren finanziellen Spielraum. Zwei Haushalte mit gleichem Einkommen können stark unterschiedliche Lebensrealitäten haben – je nach Wohnkosten, Gesundheitsausgaben oder Mobilitätsbedarf.
            </p>

            <p className='paragraph'>
                Besonders auffällig sind die Abweichungen von der Korrelation in niedrigen und mittleren Einkommensgruppen. Manche Haushalte haben trotz mittlerem Einkommen ein sehr geringes oder sogar negatives <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm>, wenn ihre Fixkosten ihre Einnahmen übersteigen. Das bedeutet, dass sie Schulden machen oder auf Ersparnisse zurückgreifen müssen, um ihren Lebensunterhalt zu bestreiten. Umgekehrt gibt es Haushalte mit relativ niedrigem Einkommen, die aufgrund niedriger Fixkosten dennoch über ein stabiles <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> verfügen.
            </p>

            <p className='paragraph'>
                Das bedeutet, dass wirtschaftliche Analysen und sozialpolitische Maßnahmen nicht nur auf das Haushaltseinkommen fokussiert sein sollten. Erst durch die Berücksichtigung des <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommens</GlossaryTerm> lassen sich tatsächliche finanzielle Ungleichheiten und die Notwendigkeit gezielter Unterstützung erkennen.
            </p>

            <p style={{margin: '32px 0 0'}}>TODO: Scatterplot</p>
            
            <h2 className="content-header">Ausgaben nach Einkommensquintilen</h2>
            <Box
                sx={{
                    background: "#f4f4f4",
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 1,
                    marginTop: 3,
                    marginBottom: 3,
                }}
            >
                {/* <div className="toggle-container">
                    <ToggleButtonGroup
                        className="expenditure-toggle"
                        value={expenditureMode}
                        exclusive
                        onChange={(_, newValue) => handleToggleModeChange("expenditure", newValue)}
                        aria-label="expenditure chart mode selection"
                    >
                        <ToggleButton sx={{ fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600'}} value="quantils"><label>Quintil</label></ToggleButton>
                        <ToggleButton sx={{ fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600'}} value="decils"><label>Dezil</label></ToggleButton>
                    </ToggleButtonGroup>
                </div> */}
        
                <div className="expenditure-charts-container">
                    <ExpenditureCharts mode={expenditureMode}/>
                </div>
            </Box>
            
            <p className='paragraph'>
                Die Grafik zeigt, dass die Arten und die Gesamthöhe der Ausgaben bei Haushalten unterschiedlicher Einkommensgruppen auf den ersten Blick recht ähnlich erscheinen (linke Seite). Deutliche Unterschiede zeigen sich jedoch im Verhältnis der Ausgaben zum Einkommen (rechte Seite).
            </p>

            <p className='paragraph'>
                Die ärmsten 20 % der Haushalte geben nahezu ihr gesamtes Einkommen für <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendige Ausgaben</GlossaryTerm> wie Wohnen, Energie oder Lebensmittel aus. Dadurch bleibt ihnen kaum <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> übrig, was bedeutet, dass sie kaum Spielraum für Notfälle – wie den Ausfall einer Waschmaschine – oder andere unvorhergesehene Ausgaben haben. Im Gegensatz dazu verwenden die reichsten 20 % der Haushalte nur etwa 30 % ihres Einkommens für <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendige Ausgaben</GlossaryTerm>. Das resultiert in einem sehr hohen <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm>, das für Freizeit, Ersparnisse oder zusätzliche Investitionen genutzt werden kann. Bei Haushalten im mittleren Einkommensbereich verbleiben nach den notwendigen Ausgaben 40 bis 60 % ihres Einkommens, wodurch sie zwar mehr Spielraum als die ärmsten Haushalte, aber weniger finanzielle Freiheit als die reichsten haben.
            </p>

            <h2>Einkommensungleichheit nach Gesamteinkommen und verfügbaren Einkommen</h2>
            <p className='paragraph'>
                Ein zentrales Maß zur Erfassung der <GlossaryTerm className="glossary-term incomeInequality" sectionId="residualIncome">Einkommensungleichheit</GlossaryTerm> ist der <GlossaryTerm className="glossary-term gini" sectionId="residualIncome">Gini-Koeffizient</GlossaryTerm>. Dieser Wert liegt zwischen 0 und 1, wobei 0 für eine völlig gleichmäßige Verteilung (alle Haushalte haben das gleiche Einkommen) und 1 für maximale Ungleichheit (eine Person erhält das gesamte Einkommen) steht.
            </p>

            <p className='paragraph'>
                Unsere Analyse zeigt, dass der <GlossaryTerm className="glossary-term gini" sectionId="residualIncome">Gini-Koeffizient</GlossaryTerm> für das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> deutlich höher ist als für das Haushaltseinkommen. Das liegt daran, dass fixe Grundkosten wie Miete, Lebensmittel oder Gesundheitsausgaben einen viel größeren Anteil des Einkommens in unteren Einkommensgruppen ausmachen. Dadurch bleibt in diesen Gruppen deutlich weniger finanzielle Flexibilität, während höhere Einkommensgruppen nach den Grundausgaben überproportional mehr Mittel zur Verfügung haben. Dies verstärkt die wirtschaftliche Ungleichheit und macht deutlich, dass das Haushaltseinkommen allein nicht ausreicht, um die (Un-)Gleichverteilung von Ressourcen abzubilden.
            </p>

            {/* GINI gegenüberstellen*/}
            <div className="gini-container">
                <div>
                <CounterAnimation targetValue={32} />
                <h3>Gini-Koeffizient (Gesamteinkommen)</h3>
                </div>
                <div>
                <CounterAnimation targetValue={39} />
                <h3>Gini-Koeffizient (Verfügbares Einkommen)</h3>
                </div>
            </div>

            <div style={{margin: '24px 0 24px'}}>
                <Accordion sx={{background: "#f4f4f4"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h4" sx={{ fontSize: '1.125rem'}}>Wie wird der Gini berechnet?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Der Gini-Koeffizient wird aus der Lorenz-Kurve abgeleitet. Diese Kurve zeigt, wie das Einkommen in einer Gesellschaft verteilt ist. Auf der x-Achse steht der Anteil der Haushalte (von den ärmsten bis zu den reichsten), auf der y-Achse der Anteil am gesamten Einkommen.
                    </Typography>
                    <ul className="custom-list infobox-list">
                        <li>Schritt 1: Wir ordnen alle Haushalte nach Einkommen, von niedrig nach hoch.</li>
                        <li>Schritt 2: Dann berechnen wir, wie viel Prozent des gesamten Einkommens auf die ärmsten 10 %, 20 %, 30 % usw. entfallen.</li>
                        <li>Schritt 3: Wir zeichnen die Lorenz-Kurve: Eine Linie, die zeigt, wie viel Einkommen die unteren Einkommensgruppen zusammen haben.</li>
                        <li>Schritt 4: Der Gini-Koeffizient ergibt sich aus der Fläche zwischen der Lorenz-Kurve und der Gleichverteilungslinie (die eine vollkommen gerechte Verteilung darstellen würde). Je größer diese Fläche, desto ungleicher ist die Verteilung.
                            Ein Gini-Koeffizient von 0 bedeutet, dass alle Haushalte exakt das gleiche Einkommen haben. Ein Wert nahe 1 bedeutet, dass fast das gesamte Einkommen von wenigen Haushalten verdient wird.
                        </li>
                    </ul>
                    
                    <p style={{margin: '32px 0 0'}}>TODO: Lorenzkurve</p>

                </AccordionDetails>
                </Accordion>
            </div>

            <h2 className="content-header">Bildung und ihr Einfluss auf das Residualeinkommen von Haushalten</h2>
            <p className='paragraph'>
                Da die Einkommen stark vom Bildungsniveau, dem Beschäftigungsgrad und der Art der Erwerbstätigkeit abhängen, die <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendige Ausgaben</GlossaryTerm> aber von allen getätigt werden müssen, spiegeln sich diese wirtschaftlichen Unterschiede noch stärker im verfügbaren Einkommen wider. In der Grafik kann zwischen den Kategorien gewechselt werden: 
            </p>

            {/* Barchart*/}
            <p style={{margin: '32px 0 0'}}>TODO: Barchart</p>


            {/* Barchart Bildung 1*/}
            {/* Barchart Bildung 2*/}
            <p style={{margin: '32px 0 0'}}>TODO: Barchart - Bildungsabschlüsse</p>

            <p className='paragraph'>
                Höhere Bildungsabschlüsse und Vollzeiterwerbstätigkeit geben den Haushalten deutlich mehr finanziellen Spielraum. Die Bedeutung von Bildung geht weit über den Abschluss einer Schule oder Universität hinaus – sie beeinflusst direkt die finanzielle Sicherheit eines Haushalts und die Höhe des <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommens</GlossaryTerm>.
            </p>

            <p className='paragraph'>
                Für Haushalte, in denen alle Mitglieder im erwerbsfähigen Alter sind und auf dem Arbeitsmarkt aktiv, aber lediglich über den höchsten Bildungsabschluss der Pflichtschule verfügen, liegt das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> bei nur etwa 1190 Euro im <GlossaryTerm className="glossary-term median" sectionId="residualIncome">Median</GlossaryTerm>. Dieser Betrag reicht oft nur für das tägliche Leben und lässt wenig Raum für größere finanzielle Spielräume. Die Ursache liegt darin, dass geringere Bildungsabschlüsse in der Regel mit niedrigeren Löhnen und weniger flexiblen Arbeitsmöglichkeiten verbunden sind, was die Einkommenspotenziale stark begrenzt.
            </p>

            <p className='paragraph'>
                Im Gegensatz dazu zeigt sich bei Haushalten, deren höchste Bildungsabschlüsse eine tertiäre oder postsekundäre Ausbildung umfassen, ein deutlich anderes Bild. In diesen Haushalten liegt das Medianeinkommen bei rund 2640 Euro, was fast doppelt so hoch ist. Der Grund dafür ist oftmals, dass höhere Bildungsabschlüsse Zugang zu besser bezahlten und stabileren Arbeitsplätzen eröffnen. Menschen mit höherer Bildung können in anspruchsvolleren, qualifizierteren Berufen arbeiten, die nicht nur ein höheres Gehalt bieten, sondern auch bessere Aufstiegschancen und eine größere berufliche Sicherheit.
            </p>

            <p className='paragraph'>
                Die Auswirkungen sind nicht nur individuell spürbar – sie betreffen auch die gesamte Familie. Höheres <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> bedeutet mehr finanzielle Freiheit, die nicht nur für den Lebensunterhalt genutzt werden kann, sondern auch für Investitionen in die Zukunft, sei es durch Ersparnisse, die Unterstützung der Ausbildung der Kinder oder die Planung einer stabilen Altersvorsorge.
            </p>

            <p className='paragraph'>
                Jedoch zeigt die Analyse auch eine dramatische Verschiebung, wenn in einem Haushalt zumindest ein Mitglied pensioniert ist. Diese Haushalte haben häufig ein signifikant niedrigeres <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm>, da Renten oft nicht ausreichen, um den Lebensstandard zu halten, besonders wenn sie nicht durch private Ersparnisse oder Zusatzgewinne ergänzt werden. Hier wird der Unterschied zwischen Haushalten mit höherer Bildung und denen ohne noch klarer. Oft müssen Pensionisten auf staatliche Unterstützung angewiesen sein, während Haushalte mit einem stabilen Einkommensniveau und einer höheren Bildung in der Lage sind, langfristige finanzielle Sicherheit zu gewährleisten.
            </p>
            
            <p className='paragraph'>
                Ähnliches zeigt sich, wenn man das Ausmaß der Beschäftigung betrachtet. In Haushalten, in denen der höchste Bildungsabschluss lediglich die Pflichtschule ist, und in denen alle Haushaltsmitglieder, die dem Arbeitsmarkt zur Verfügung stehen, Vollzeit arbeiten, liegt das <GlossaryTerm className="glossary-term median" sectionId="residualIncome">Median</GlossaryTerm><span style={{fontStyle: 'italic'}}>-</span><GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> bei etwa 1100 Euro. Trotz Vollzeitarbeit bleibt das Einkommen in diesen Haushalten relativ niedrig. Ganz anders sieht es in Haushalten aus, in denen zumindest ein Familienmitglied eine postsekundäre oder tertiäre Ausbildung abgeschlossen hat. Auch hier arbeiten alle Mitglieder im erwerbsfähigen Alter Vollzeit, doch das <GlossaryTerm className="glossary-term median" sectionId="residualIncome">Median</GlossaryTerm><span style={{fontStyle: 'italic'}}>-</span><GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> liegt mit 2800 Euro fast dreimal so hoch wie in den Haushalten mit Pflichtschulabschluss. Der Unterschied ist auffällig und verdeutlicht, wie stark Bildung den Zugang zu besser bezahlten und stabileren Arbeitsplätzen beeinflusst.
            </p>
            
            <p className='paragraph'>
            Selbst bei Teilzeitbeschäftigung zeigt sich ein ähnlicher Trend. In Haushalten mit tertiärer oder postsekundärer Ausbildung haben die Familien im <GlossaryTerm className="glossary-term median" sectionId="residualIncome">Median</GlossaryTerm> etwa 400 Euro mehr <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> als Haushalte, deren höchster Bildungsabschluss die Pflichtschule ist. Obwohl Teilzeitarbeit in vielen Fällen geringere Arbeitszeiten und damit auch geringere Einnahmen bedeutet, bleibt der Unterschied zwischen den Haushalten mit unterschiedlichen Bildungsabschlüssen bestehen. Auch hier wird die Bedeutung der Ausbildung deutlich: Höhere Bildungsabschlüsse ermöglichen Zugang zu besser bezahlten Teilzeitstellen, die sich positiv auf das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> auswirken.
            </p>
            
            <h2 className="content-header">Regionale Unterschiede beim Residualeinkommen</h2>

            {/* MeanMap */}
            <Box 
                className="mean-map-container"
                sx={{
                    background: "#f4f4f4",
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 1,
                    fontSize: '14px',
                    marginTop: 3,
                    marginBottom: 3,
                }}
            >
                <MeanMapChart/>
            </Box>

            <p className='paragraph'>
                Die regionalen Unterschiede im <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> sind erheblich und verdeutlichen, wie stark die Einkommensmöglichkeiten und Lebensbedingungen in verschiedenen Teilen des Landes variieren. Besonders bemerkenswert ist, dass diese Unterschiede nicht nur auf der Höhe des Einkommens beruhen, sondern auch durch lokale Gegebenheiten wie Lebenshaltungskosten und Immobilienpreise beeinflusst werden.
            </p>

            <p className='paragraph'>
                In Wien, der größten Stadt des Landes, liegt das <GlossaryTerm className="glossary-term median" sectionId="residualIncome">Median</GlossaryTerm><span style={{fontStyle: 'italic'}}>-</span><GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> mit rund 1500 Euro am niedrigsten. Dies mag auf den ersten Blick überraschen, da man in einer Großstadt höhere Einkommensmöglichkeiten vermuten würde. Allerdings spielen die hohen Lebenshaltungskosten in der Hauptstadt, insbesondere die Immobilienpreise und Mieten im privaten Mietmarkt, eine entscheidende Rolle.
            </p>

            <p className='paragraph'>
                Im Vergleich dazu zeigen die Bundesländer Niederösterreich, Oberösterreich und Vorarlberg ein deutlich höheres <GlossaryTerm className="glossary-term median" sectionId="residualIncome">Median</GlossaryTerm><span style={{fontStyle: 'italic'}}>-</span><GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm>. Besonders auffällig ist, dass in den kleineren Gemeinden das höchste <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> erzielt wird. Hier spielt der Eigentumserwerb beim Wohnen eine entscheidende Rolle: In ländlicheren Gebieten ist die Eigentumsrate deutlich höher als in städtischen Zentren. Dies ermöglicht es den Haushalten, gegeben, dass sie keine Kreditrückzahlungen bedienen müssen, mehr von ihrem Einkommen zu sparen und somit ein höheres <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> zu erzielen.
            </p>

            <p className='paragraph'>
                Trotz dieser generellen Tendenzen gibt es auch innerhalb der Bundesländer Unterschiede. In Oberösterreich sind es vor allem kleinere Gemeinden, die ein höheres <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> aufweisen, während im Burgenland vor allem Haushalte in Eisenstadt das höchste <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> erzielen.
            </p>

            <p className='paragraph'>
                Diese regionalen Unterschiede implizieren, dass das  <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> nicht nur von den Einkommen selbst abhängt, sondern auch stark durch die Lebenshaltungskosten in der jeweiligen Region beeinflusst wird.
            </p>

            <p className='paragraph'>
                Allerdings reicht der Blick auf das  <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> allein nicht aus, um die Lebensqualität und die tatsächliche Wohlstandssituation von Haushalten zu beurteilen. Häufig ist es so, dass in Regionen mit höherem  <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> die Infrastruktur und öffentlichen Dienstleistungen nicht in gleichem Maße ausgebaut sind wie in städtischen Gebieten. Umfassende Infrastruktur und die Verfügbarkeit öffentlicher Dienstleistungen sind ebenfalls entscheidende Faktoren für den Lebensstandard. In Regionen mit günstigen Lebenshaltungskosten, aber schlechterer Infrastruktur, könnte das höhere  <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> zwar finanziellen Spielraum bieten, jedoch nicht die gleichen Lebensbedingungen und Möglichkeiten wie in gut erschlossenen urbanen Regionen.
            </p>

            <p className='paragraph'>
                Für gewisse Bevölkerungsgruppen ist <GlossaryTerm className="glossary-term si" sectionId="residualIncome">soziale Infrastruktur</GlossaryTerm> besonders wichtig. Vor allem für Haushalte mit geringem Einkommen oder großer finanzieller Belastung durch Lebenserhaltungskosten ist diese von großer Bedeutung. Diese Gruppen können sich häufig keine teuren privaten Lösungen leisten, weshalb sie öffentliche Angebote wie Gesundheitsversorgung, Kinderbetreuung und andere <GlossaryTerm className="glossary-term si" sectionId="residualIncome">soziale Infrastrukturen</GlossaryTerm> deutlich finanziell entlasten können.
            </p>

             {/* Infobox with CommunitySizeClass map */}
             <div style={{margin: '24px 0 0'}}>
                <Accordion sx={{background: "#f4f4f4"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h4" sx={{ fontSize: '1.125rem'}}>Wo wohnt Österreich: Gemeindegrößeklassenerklärung</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        In vielen regionalen Statistiken werden die österreichischen Gemeinden in <GlossaryTerm className="glossary-term communitySizeClass" sectionId="residualIncome">Gemeindegrößeklassen</GlossaryTerm> eingeteilt. Sechs österreichische Landeshauptstädte haben über 100.000 Einwohner:innen (Wien, Graz, Linz, Salzburg, Klagenfurt und Innsbruck). Insgesamt leben etwas mehr als 20% aller Bewohner:innen Österreichs in diesen Städten, ähnlich viele wie in den 1.366 Gemeinden mit weniger als 2.500 Einwohner:innen. Mehr als 30% der Österreicher:innen leben in den 641 Gemeinden mit 2.500-10.000 Einwohner:innen und 27% in Klein- und Mittelstädten.
                    </Typography>

                    <img className="community-size-map" src={`${process.env.PUBLIC_URL}/images/Abb_KarteGemeindegroeßen_DE.png`} alt="Gemeindegrößeklassen" />
                </AccordionDetails>
                </Accordion>
            </div>

            </section>

            <section id="social-infrastructure">
            <h1 className="content-header">Soziale Infrastruktur in Österreich</h1>
            <p className='paragraph'>
            <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">Soziale Infrastrukturen</GlossaryTerm> wie Kindergärten, Schulen, Gesundheits- und Pflegeeinrichtungen sind essenziell für eine funktionierende Gesellschaft. Sie ermöglichen Bildung, Gesundheit und soziale Teilhabe – unabhängig vom Einkommen. Doch ihr Zugang und ihre Qualität sind nicht überall gleich. Regionale Unterschiede und fehlende Angebote können Haushalte zusätzlich belasten und Ungleichheiten verstärken.
            </p>

            <p className='paragraph'>
                Die Karten zeigen die <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">sozialen Infrastrukturen</GlossaryTerm> in Bezug auf den Bedarf in der Gemeinde. Während Ärzt:innen pro Einwohner:in berechnet werden, beziehen sich Kindergartengruppen auf Kinder im Alter von 3 bis 6 Jahren und Plätze in Pflegeheimen auf Menschen über 70. Neben der Verfügbarkeit von Infrastrukturen spielt auch ihre Zugänglichkeit eine Rolle: Kurze Öffnungszeiten oder hohe Kosten können die Nutzung einschränken. Da viele Menschen auch die Infrastrukturen in Nachbargemeinden nutzen, werden diese – mit geringerem Gewicht – in den Infrastrukturindikator einbezogen. In der Karte kann dieser Effekt ein- und ausgeblendet werden. Die obere Karte zeigt die Gesamtsumme aller Infrastrukturen, während in der unteren Karte die verschiedenen Infrastrukturarten einzeln betrachtet werden können. Genauere Informationen zu den einzelnen Infrastrukturen und der Berechnung der Indikatoren lassen sich unten ausklappen.
            </p>

            {/* SI map overall */}
            <Box
                sx={{
                    background: "#f4f4f4",
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 1,
                    fontSize: '14px',
                    marginTop: 3,
                }}
            >
                <div className="toggle-container">
                    <ToggleButtonGroup
                        className="si-toggle"
                        value={siMode}
                        exclusive
                        onChange={(_, newValue) => handleToggleModeChange("si", newValue)}
                        aria-label="mode selection"
                    >
                    {/* <ToggleButton value="so_cars">PKW</ToggleButton> */}
                    {/* <ToggleButton value="so_miv">MIV</ToggleButton> */}
                    <ToggleButton value="so_cars"><DirectionsCarIcon/></ToggleButton>
                    <ToggleButton value="so_miv"><TrainIcon/></ToggleButton>
                    <ToggleButton value="no_so"><label>No Spillover</label></ToggleButton>
                    </ToggleButtonGroup>
                </div>
        
                <div className="si-overall-container">
                    <SIOverallIndicatorMap/>
                </div>
            </Box>

            {/* SI map sub indicators */}
            <Box
                sx={{
                    background: "#f4f4f4",
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 1,
                    fontSize: '14px',
                    margin: '24px 0 48px',
                }}
            >
                <div className="control-container">
                    <div className="select-component">
                        <IndicatorSelect/>
                    </div>

                    <div className="toggle-container">
                        <ToggleButtonGroup
                            className="si-toggle"
                            value={siSubMode}
                            exclusive
                            onChange={(_, newValue) => handleToggleModeChange("si-sub", newValue)}
                            aria-label="mode selection"
                        >
                            <ToggleButton value="so_sub"><label>Spillover</label></ToggleButton>
                            <ToggleButton value="no_so_sub"><label>No Spillover</label></ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                
                <div className="si-subindicator-container">
                    <SISubIndicatorMap/>
                </div>
            </Box>

            <p className='paragraph'>
                Die Verfügbarkeit sozialer Infrastruktur wie Ärzt:innen, Schulen, Kindergärten und sozialen Einrichtungen spielt eine entscheidende Rolle für das Residualeinkommen von Haushalten. In Regionen, in denen diese Angebote gut ausgebaut sind, profitieren Haushalte von niedrigeren privaten Ausgaben für Bildung, Gesundheit und soziale Dienstleistungen. Umgekehrt führt ein mangelhafter Zugang zu diesen Angeboten dazu, dass Menschen gezwungen sind, private Alternativen zu finanzieren – sei es durch längere Anfahrtswege, kostenpflichtige Dienstleistungen oder haushaltsinterne Bereitstellung (wie beispielsweise Kinderbetreuung oder Pflege von Angehörigen).
            </p>

            <p className='paragraph'>
                Dies hat direkte Folgen für das Residualeinkommen: Haushalte in Regionen mit schlechter sozialer Infrastruktur müssen oft höhere Fixkosten tragen, obwohl ihr Einkommen identisch mit dem von Haushalten in besser versorgten Gebieten ist. Besonders betroffen sind Familien mit Kindern, ältere Menschen oder Menschen mit gesundheitlichen Einschränkungen, da sie stärker auf diese Angebote angewiesen sind.
            </p>

            <p className='paragraph'>
            Langfristig verstärkt sich dadurch die soziale Ungleichheit. Haushalte mit ohnehin geringem Einkommen werden durch zusätzliche Ausgaben weiter belastet, während jene mit besserem Zugang zu Infrastruktur größere finanzielle Spielräume haben. Regionen mit schlechter Infrastruktur verlieren zudem an Attraktivität, was zu Abwanderung und einem wirtschaftlichen Abwärtstrend führen könnte.
            </p>

            <h2 className="content-header">Wie werden die einzelnen Infrastrukturindikatoren berechnet?</h2>

            <p className='paragraph'>
                Der Gesamtindikator für <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">soziale Infrastrukturen</GlossaryTerm> setzt sich aus sechs gleich gewichteten Teilindikatoren zusammen: Kindergärten, Schulen, Krankenhäuser, Allgemeinmediziner:innen, Pflegeeinrichtungen und andere soziale Einrichtungen. Innerhalb der Teilindikatoren wird die Verfügbarkeit mit 50 %, die Zugänglichkeit mit 30 % und die Einflüsse von Nachbargemeinden (Spillover-Effekte) mit 20 % gewichtet, um die unterschiedlichen Aspekte der Infrastruktur umfassend zu berücksichtigen.
            </p>

            {/* SI Table*/}
            <SocialInfrastructureTable/>

            </section>

            <section id="time-usage">
                <h1 className="content-header">Zeitverwendung in Österreich</h1>
                
                <p className='paragraph'>
                In Österreich – wie in vielen anderen Ländern – übernehmen Frauen nach wie vor einen überproportional großen Anteil an unbezahlter Arbeit, darunter Haushaltsführung, Kinderbetreuung und die Pflege von Angehörigen. Dies hat weitreichende finanzielle und soziale Konsequenzen.
                </p>

                <div className='paragraph'>
                    <p>
                    Da Frauen mehr Zeit für unbezahlte Arbeit aufwenden, haben sie oft geringere Erwerbsarbeitszeiten, was zu einem niedrigeren Haushaltseinkommen führt. Gleichzeitig beeinflusst dies das Residualeinkommen, denn:
                    </p>
                    <ul className="custom-list">
                        <li>Frauen in Teilzeit oder mit unterbrochenen Erwerbsbiografien haben oft niedrigere Löhne und Sozialleistungen (z. B. Pensionen).</li>
                        <li>Wenn günstige Kinderbetreuung oder Pflegeeinrichtungen fehlen, sind Haushalte gezwungen, private Lösungen zu finanzieren oder eine Person (oft Frauen) bleibt zu Hause – was das verfügbare Einkommen weiter reduziert.</li>
                        <li>Zeitintensive Care-Arbeit kann dazu führen, dass Frauen weniger in Weiterbildungen oder Karrierechancen investieren können, was langfristig Einkommens- und Vermögensunterschiede verfestigt.</li>
                    </ul>
                </div>

                <p className='paragraph'>
                    Die Verfügbarkeit sozialer Infrastruktur wie Kinderbetreuungseinrichtungen, Ganztagsschulen und Pflegeangebote hat einen direkten Einfluss darauf, wie Erwerbs- und Care-Arbeit innerhalb von Haushalten aufgeteilt wird. In Regionen mit gut ausgebauter Infrastruktur können Frauen häufiger Vollzeit oder in besser bezahlten Positionen arbeiten, da die Betreuung von Kindern oder Angehörigen nicht vollständig auf private Ressourcen angewiesen ist.
                </p>

                <p className='paragraph'>
                    Fehlt diese Infrastruktur, werden Haushalte nicht nur durch direkte Kosten (z. B. private Betreuung), sondern auch durch indirekte Einbußen belastet – etwa durch entgangenes Einkommen oder verringerte Karrieremöglichkeiten. Dies wirkt sich langfristig auf das Residualeinkommen und die wirtschaftliche Absicherung von Frauen aus.
                </p>
                
                <h2 className="content-header">Fokus Tageszeitnutzung nach Geschlecht und Alter</h2>

                <p className='paragraph'>
                    Schaut man sich die Zeitverwendung unterschiedlicher Altersklassen an, wird deutlich, dass sich Ungleichheiten bei bezahlter und unbezahlter Arbeit schon früh abzeichnen. Bereits bei den unter 20-Jährigen verrichten Mädchen und junge Frauen täglich rund 30 Minuten mehr unbezahlte Arbeit als Burschen und junge Männer. Diese Unterschiede verstärken sich mit zunehmendem Alter.
                </p>

                <p className='paragraph'>
                    In der Altersgruppe 21 bis 64 Jahre wird der Unterschied besonders deutlich: Frauen investieren täglich 3,75 Stunden in unbezahlte Arbeit, während Männer dafür im Schnitt nur 2 Stunden aufwenden. Dazu zählen Haushaltsaufgaben, Kinderbetreuung und die Pflege von Angehörigen – Tätigkeiten, die essenziell für die Gesellschaft sind, aber in klassischen Wirtschaftsstatistiken oft nicht sichtbar werden.
                </p>

                <p className='paragraph'>
                    Auch bei den über 65-Jährigen bleibt dieser Unterschied bestehen. Während Männer in dieser Altersgruppe ihre unbezahlte Arbeit leicht erhöhen, tragen Frauen weiterhin die Hauptlast der hauswirtschaftlichen und pflegerischen Tätigkeiten.
                </p>

                <p className='paragraph'>
                    Wie bereits erwähnt, zeigt sich bei der Erwerbsarbeit das umgekehrte Bild: Männer arbeiten im Durchschnitt länger und verdienen dadurch mehr. Das hat weitreichende Konsequenzen wie niedrigere Einkommen von Frauen, was ihr Residualeinkommen und ihre finanzielle Sicherheit langfristig beeinträchtigt. Langfristig wirken sich diese Unterschiede auf Pensionen und Altersarmut aus, da Frauen aufgrund ihrer Erwerbshistorie oft geringere Ansprüche haben.
                </p>

                <p className='paragraph'>
                    Diese Dynamik zeigt, dass die ungleiche Verteilung von Zeit für Erwerbs- und unbezahlte Arbeit ein zentraler Faktor für wirtschaftliche Ungleichheit ist. In den nächsten Analysen konzentrieren wir uns daher gezielt auf die Altersgruppe 21 bis 64 Jahre, um die Auswirkungen dieser Verteilung noch genauer zu untersuchen.
                </p>

                <h2 className="content-header">Zeitverwendung von Männern und Frauen (21-64 Jahre) für Erwerbsarbeit und unbezahlter Arbeit</h2>
                <h3 className="content-header">Bildung: Bildung verändert viel – aber nicht alles</h3>
                <p className='paragraph'>
                Unabhängig vom Bildungsgrad zeigt sich ein klares Muster: Frauen übernehmen mehr Care-Arbeit als Männer. Egal ob Pflichtschulabschluss, Lehre oder Universitätsabschluss – Frauen verbringen täglich mehr Zeit mit Haushaltsarbeit, Kinderbetreuung und der Pflege von Angehörigen als Männer.
                </p>
                <p className='paragraph'>
                Während sich die Aufteilung zwischen Erwerbsarbeit und Care-Arbeit bei Männern kaum verändert, wenn man verschiedene Bildungsgruppen betrachtet, zeigt sich bei Frauen eine leichte Verschiebung: Mit zunehmendem Bildungsgrad investieren Frauen etwas weniger Zeit in unbezahlte Arbeit und etwas mehr in Erwerbsarbeit.
                </p>
                <p className='paragraph'>
                Warum ist das so? Eine mögliche Erklärung liegt in den Arbeitsmarktchancen höher gebildeter Frauen. Frauen mit höherem Bildungsabschluss haben bessere Einkommensperspektiven, was dazu führen kann, dass sie sich stärker in den Arbeitsmarkt einbringen. Zudem besteht in höher gebildeten Haushalten oft eine größere finanzielle Möglichkeit, Dienstleistungen wie Kinderbetreuung oder Haushaltshilfe auszulagern.
                </p>
                <p className='paragraph'>
                Trotz dieser Unterschiede bleibt die Grundtendenz bestehen: Auch hochgebildete Frauen übernehmen mehr unbezahlte Arbeit als Männer mit gleichem Bildungsniveau. Dies zeigt, dass traditionelle Rollenverteilungen weiterhin Einfluss darauf haben, wie Erwerbs- und Care-Arbeit innerhalb von Haushalten verteilt wird – unabhängig vom Bildungsgrad.
                </p>

                <h3 className="content-header">Vollzeit-/Teilzeitarbeit: Teilzeit ist nicht gleich Teilzeit – die doppelte Belastung von Frauen</h3>
                <p className='paragraph'>
                Frauen, die Teilzeit arbeiten, übernehmen fast doppelt so viel Care-Arbeit wie Frauen, die Vollzeit arbeiten. Dies könnte darauf zurückzuführen sein, dass viele Frauen ihre Arbeitszeit bewusst reduzieren, um Haushalt, Kinderbetreuung oder die Pflege von Angehörigen zu übernehmen. Teilzeit ist in diesem Fall oft kein freiwilliges Modell für mehr Freizeit, sondern eine Notwendigkeit, um unbezahlte Arbeit im Haushalt zu bewältigen.
                </p>
                <p className='paragraph'>
                Besonders auffällig ist der Unterschied zwischen teilzeitbeschäftigten Frauen und Männern: Frauen in Teilzeit übernehmen mehr als doppelt so viel Care-Arbeit wie Männer in Teilzeit. Während Männer, die ihre Arbeitszeit reduzieren, oft mehr persönliche Freizeit oder Erholung gewinnen, nutzen Frauen die „gewonnene“ Zeit meist für unbezahlte Tätigkeiten.
                </p>
                <p className='paragraph'>
                Das hat weitreichende Folgen: Teilzeit verringert das Erwerbseinkommen, die Karrierechancen und langfristig auch die Pensionsansprüche. Gleichzeitig bleibt der Großteil der unbezahlten Arbeit an Frauen hängen, was die finanzielle Abhängigkeit innerhalb von Haushalten verstärken kann. Diese Verteilung zeigt, dass Teilzeitarbeit für Frauen oft nicht nur eine berufliche Entscheidung ist, sondern direkt mit ungleicher Care-Arbeit verknüpft ist – mit langfristigen Konsequenzen für Einkommen, soziale Absicherung und wirtschaftliche Unabhängigkeit.
                </p>



                <h3 className="content-header">Haushaltstyp: Wenn aus einem Haushalt eine Familie wird – wie sich Arbeitsteilung verändert</h3>
                <p className='paragraph'>
                Bei Single-Frauen und -Männern gibt es kaum Unterschiede in der Aufteilung zwischen Erwerbsarbeit und unbezahlter Care-Arbeit. Beide verbringen ähnlich viel Zeit mit Haushaltstätigkeiten und gehen einer Erwerbsarbeit nach. Doch sobald Menschen in Paarhaushalten leben, beginnt sich die Verteilung zu verändern: Frauen übernehmen im Durchschnitt 50 Minuten mehr unbezahlte Arbeit pro Tag als ihre männlichen Partner.
                </p>
                <p className='paragraph'>
                Besonders deutlich wird die Ungleichverteilung, sobald Kinder ins Spiel kommen. In Paarhaushalten mit einem Kind unter 15 Jahren verbringen Frauen täglich über 4 Stunden mit Care-Arbeit, während Männer weniger als 2 Stunden für Haushalt und Kinderbetreuung aufwenden. Dies geht mit einer gegenläufigen Entwicklung in der Erwerbsarbeit einher: Männer arbeiten in diesem Haushaltstyp fast 2 Stunden mehr pro Tag als Frauen.
                </p>
                <p className='paragraph'>
                Je mehr Kinder im Haushalt leben, desto stärker verstärkt sich dieses Muster. Frauen reduzieren ihre Erwerbsarbeitszeit weiter, um mehr Zeit für Haushalt und Kinder aufzuwenden, während Männer ihre Erwerbsarbeit sogar noch ausweiten. Diese Entwicklung zeigt, dass traditionelle Rollenmuster in Familien trotz gesellschaftlichem Wandel weiterhin tief verankert sind. Auch bei Alleinerziehenden bleibt dieser Unterschied bestehen: Alleinerziehende Männer arbeiten im Durchschnitt mehr, während alleinerziehende Frauen mehr Care-Arbeit leisten. 
                </p>
                <p className='paragraph'>
                Um diese Ungleichheiten zu reduzieren, sind gezielte Maßnahmen erforderlich: Der Ausbau von Kinderbetreuung, Pflegeangeboten und flexibleren Arbeitsmodellen kann Frauen und Männern mehr Spielraum bei der Vereinbarkeit von Beruf und Familie geben. Zudem sind gerechtere Verteilungen von Erwerbs- und Care-Arbeit nicht nur eine Frage individueller Entscheidungen, sondern auch von gesellschaftlichen Strukturen und politischen Rahmenbedingungen.
                </p>

                {/* Check if h2 or h3 */}
                <h3 className="content-header">Gemeindegrößeklasse: Stadt oder Land? Wie der Wohnort die Arbeitsteilung beeinflusst</h3>
                <p className='paragraph'>
                Schaut man sich die Zeitverwendung in unterschiedlichen Gemeindegrößen an, zeigt sich ein klares Muster: Frauen in den ländlichsten Gemeinden leisten täglich mehr als eine Stunde mehr Care-Arbeit als Frauen in Wien. Je größer die Gemeinde, desto geringer wird der Anteil an unbezahlter Arbeit, den Frauen übernehmen.
                </p>
                <p className='paragraph'>
                Bei Männern hingegen bleibt die Verteilung nahezu unverändert – egal, ob sie in einer kleinen Landgemeinde oder in einer Großstadt leben. Während Frauen auf dem Land also mehr Zeit für Haushalt, Kinderbetreuung und Pflege aufwenden, verändert sich der Anteil der männlichen Care-Arbeit kaum.
                </p>

                <p className='paragraph'>
                Dies zeigt, dass ländliche Regionen weniger Infrastruktur für unterstützende Dienstleistungen bieten, wodurch mehr Care-Arbeit privat organisiert werden muss. Weniger verfügbare Kinderbetreuungsplätze, längere Wege zu Ärzt:innen oder soziale Erwartungen in kleinen Gemeinden können dazu führen, dass Frauen auf dem Land mehr unbezahlte Arbeit übernehmen und dadurch oft weniger Erwerbsarbeit leisten können.
                </p>

                <div className='paragraph' style={{margin: '32px 0 0'}}>
                    <p>
                    Zusammenhang zwischen der Erreichbarkeit sozialer Infrastruktur (z. B. Kinderbetreuung, Gesundheitsversorgung) und Zeitverwendung.
                    </p>
                    <ul className="custom-list">
                        <li>Wie beeinflussen lange Pendelzeiten oder weite Wege zur Infrastruktur die tägliche Zeitaufteilung?</li>
                        <li>Haben Regionen mit besser ausgebauter Infrastruktur geringere Zeitbelastungen für Hausarbeit und Mobilität?</li>
                    </ul>
                </div>


            </section>

            <section id="what-now">
                <h1 className="content-header">Was nun?</h1>

                <p className='paragraph'>
                    Ungleichheit ist mehr als nur eine Frage des Einkommens. Wer wie viel verdient, bestimmt zwar den monetären Spielraum, doch erst im Zusammenspiel mit notwendigen Ausgaben, aufgewandter Zeit (vor allem für Erwerbsarbeit und unbezahlter Arbeit) und öffentlicher sozialer Infrastruktur entsteht ein breiteres Bild sozialer Ungleichheit. Unser Projekt zeigt: Diese Faktoren sind nicht isoliert zu betrachten. Sie verstärken sich gegenseitig und beeinflussen. Um nachhaltige Lösungen zu entwickeln, muss Politik diese Zusammenhänge anerkennen und gezielt eingreifen.
                </p>

                {/* <h2 className="content-header">Einkommen: Mehr als nur Lohn – es geht um echte Verfügbarkeit</h2>
                <p className='paragraph'>
                Nominale Einkommen sagen wenig darüber aus, was Menschen sich tatsächlich leisten können. Hohe Wohnkosten, steigende Energiepreise und andere Fixkosten schränken das verfügbare Einkommen vieler Haushalte drastisch ein. Besonders betroffen sind Alleinerziehende, Erwerbslose und prekär Beschäftigte.
                </p>
                <div className='paragraph'>
                    <p className="implications">Politische Implikationen:</p>
                    <ul className="custom-list">
                    <li>Mindestlohn & Sozialtransfers an realen Lebenshaltungskosten ausrichten</li>
                    <li>Steuerliche Entlastung für niedrige Einkommen verstärken</li>
                    <li>Bessere Absicherung für atypische Beschäftigte und Menschen außerhalb des Arbeitsmarkts</li>
                    </ul>
                </div>

                <h2 className="content-header">Notwendige Ausgaben: Wer mehr ausgeben muss, hat weniger Spielraum</h2>
                <p className='paragraph'>
                    Nicht alle Haushalte sind gleichermaßen von steigenden Preisen betroffen. Wer wenig verdient, gibt einen überproportional hohen Anteil seines Einkommens für Wohnen, Energie und Mobilität aus. Fehlende Alternativen – etwa leistbarer öffentlicher Wohnraum oder gut ausgebaute Öffis – verstärken diese finanzielle Belastung.
                </p>
                <div className='paragraph'>
                    <p className="implications">Politische Implikationen:</p>
                    <ul className="custom-list expenditure">
                    <li>Mietpreisbremse & leistbarer Wohnraum als zentrale Stellschrauben</li>
                    <li>Zielgerichtete Energie- und Mobilitätszuschüsse</li>
                    <li>Ausbau kostengünstiger Alternativen im öffentlichen Sektor</li>
                    </ul>
                </div>

                <h2 className="content-header">Soziale Infrastrukturen: Wer auf eigene Mittel angewiesen ist, bleibt zurück</h2>
                <p className='paragraph'>
                    Öffentliche Kinderbetreuung, Gesundheitsversorgung, Pflegeangebote oder Bildungszugang – <GlossaryTerm className="glossary-term si" sectionId="what-now">soziale Infrastruktur</GlossaryTerm> entscheidet darüber, wie stark Menschen auf ihr eigenes Einkommen angewiesen sind. Ist sie schlecht ausgebaut, verstärken sich Ungleichheiten, da Haushalte oftmals auf Infrastruktur in benachbarten Gemeinden angewiesen und private Lösungen teuer sind.
                </p>
                <div className='paragraph'>
                    <p className="implications">Politische Implikationen:</p>
                    <ul className="custom-list social-infrastructure">
                    <li>Kostenfreie und flächendeckende Kinderbetreuung als Grundpfeiler</li>
                    <li>Investitionen in den öffentlichen Gesundheits- und Pflegesektor</li>
                    <li>Stärkung ländlicher Infrastruktur, um Stadt-Land-Ungleichheiten zu reduzieren</li>
                    </ul>
                </div>

                <h2 className="content-header">Zeitverwendung: Armut ist oft auch Zeitmangel</h2>
                <p className='paragraph'>
                    Einkommensschwache Gruppen haben nicht nur weniger Geld, sondern oft auch weniger Zeit. Mehrfachbelastungen durch lange Arbeitszeiten, unbezahlte Sorgearbeit oder schlechte Arbeitsbedingungen lassen kaum Spielraum für Weiterbildung, politisches Engagement oder Erholung. Zeitarmut verstärkt soziale Ungleichheiten – und bleibt politisch oft unbeachtet.
                </p>
                <div className='paragraph'>
                    <p className="implications">Politische Implikationen:</p>
                    <ul className="custom-list time-usage">
                    <li>Arbeitszeitverkürzung bei vollem Lohnausgleich für untere Einkommensgruppen</li>
                    <li>Faire Verteilung unbezahlter Sorgearbeit durch bessere Anreize</li>
                    <li>Stärkung von Teilzeit- und Elternzeitmodellen ohne finanzielle Nachteile</li>
                    </ul>
                </div> */}

                <div className='outlook-chart'>
                    <OutlookChart/>
                </div>
            </section>

        </div>

        <div className="floatingButton-container"> 
            <FloatingButton show={showFloatingButton} />
        </div>

        <div className='progressBar'>
            <ScrollProgressBar/>
        </div>
        </>
    );
}
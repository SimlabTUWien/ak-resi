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
            <h2> Hintergrund / Einleitung</h2>
            <p className="paragraph">
                Die Ressourcen in unserer Gesellschaft sind ungleich verteilt. Traditionelle Indikatoren zur Messung von Ungleichheit, wie das Bruttoinlandsprodukt oder der <GlossaryTerm className="glossary-term gini">Gini-Index</GlossaryTerm>, konzentrieren sich vor allem auf Einkommensunterschiede. Aber das Einkommen allein erzählt nicht die ganze Geschichte.
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
                Genau dieses Ziel hatte das <strong>XX</strong> Projekt. Auf dieser Website findet ihr die Ergebnisse der Untersuchung dieser Ebenen in Österreich.
            </p>
            <p className='paragraph click-information'>
                Klicke auf die Elemente um mehr zu erfahren: 
            </p>

            {/* <BackgroundChart/> */}
            <div className='background-chart'>
                <BackgroundChart/>
            </div>
            </section>

            <section id="income">
            <h1>Verfügbares Einkommen in Österreich</h1>
            <p className='paragraph'>
                Wie man hier sehen kann, lässt sich das verfügbare Einkommen berechnen, indem man vom Einkommen der Haushalte, ihr notwendigen Ausgaben abzieht. Diese Ausgaben sind zur Deckung von Grundbedürfnissen wie Wohnen oder Ernährung. 
            </p>
            
            <Box 
                className="definition-chart-container"
                sx={{
                    // background: "#f4f4f4",
                    // boxShadow: 1,
                    padding: 0,
                    borderRadius: 1,
                    fontSize: '14px',
                    marginTop: 2
                }}
            >
                <ResiDefinitionChart/>
            </Box>


            <div>
                <Accordion sx={{background: "#f4f4f4"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography><strong>Wo kommen unsere Daten her und wie funktioniert die Berechnung genau?</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Zur Berechnung der verfügbaren Einkommen werden die Abgestimmte Lohn- und Einkommensteuerstatistik 2019 und 2020 und die <GlossaryTerm className="glossary-term consumption" theme="dark">Konsumerhebung</GlossaryTerm> (2019-2020) verwendet. Die Informationen zu Personen können über eine ID zwischen den beiden Erhebungen verknüpft und Personen eindeutig Haushalten zugeordnet werden. Das an die OECD-Skala angepasste Haushaltseinkommen wird berechnet. Die <GlossaryTerm className="glossary-term consumption" theme="dark">Konsumerhebung</GlossaryTerm> liefert detaillierte Informationen über die Ausgaben der Haushalte, wobei die unter <GlossaryTerm className="glossary-term expenditure" theme="dark">notwendige Ausgaben</GlossaryTerm> zusammengefassten Kategorien identifiziert werden können. Während für alle Personen in Österreich mit steuerrelevantem Einkommen Informationen vorliegen, handelt es sich bei der <GlossaryTerm className="glossary-term consumption" theme="dark">Konsumerhebung</GlossaryTerm> um eine repräsentative Stichprobenerhebung, die 6.873 Haushalte umfasst. Das verfügbare Einkommen kann daher nur für diese Haushalte berechnet werden, weshalb die Ergebnisse auf der Ebene von Personengruppen, Regionen und Haushaltstypen ausgewertet werden.</Typography>
                </AccordionDetails>
                </Accordion>
            </div>

            <h2>Wieviel Einkommen haben die Haushalte?</h2>

            <p>TODO: Histogramm mit Einkommen?</p>

            {/* Histogramm */}

            <p className='paragraph'>
                Das mittlere Haushaltseinkommen in Österreich ist XX 
            </p>
            

            <h2>Wofür geben Haushalte Geld aus?</h2>

            <p>TODO: Überblick über Ausgabenkategorien - evt Kreisdiagramm</p>

            <p className='paragraph'>
                Wieviel Haushalte einnehmen und ausgeben ist stark von der Haushaltsform abhängig. Mehr erwerbstätige Personen im Haushalt bringt ein höheres Einkommen, während weitere Haushaltsmitglieder auch höhere Konsumausgaben bedeuten. Hier sieht man die mittleren Einkommen, notwendigen Ausgaben und daraus ergebende verfügbare Einkommen für unterschiedliche Haushaltstypen: 
            </p>

            {/* Table mit/ohne Piktogramme */}
            <HouseholdTable/>

            <p className='paragraph'>
                Haushalte lassen sich auch nach ihrem Einkommen einteilen, zum Beispiel in <GlossaryTerm className="glossary-term quintil">Quintile</GlossaryTerm> oder Dezile, fünf bzw. zehn Gruppen in der die gleiche Anzahl an Haushalten enthalten ist.
            </p>
            
            <Box
                sx={{
                    background: "#f4f4f4",
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 1,
                    marginTop: 2,
                    marginBottom: '48px',
                }}
            >
                <div className="toggle-container">
                    <ToggleButtonGroup
                        className="expenditure-toggle"
                        value={expenditureMode}
                        exclusive
                        onChange={(_, newValue) => handleToggleModeChange("expenditure", newValue)}
                        aria-label="expenditure chart mode selection"
                    >
                    <ToggleButton value="quantils">Quintil</ToggleButton>
                    <ToggleButton value="decils">Dezil</ToggleButton>
                    </ToggleButtonGroup>
                </div>
        
                <div className="expenditure-charts-container">
                    <ExpenditureCharts mode={expenditureMode}/>
                </div>
            </Box>
            
            <p className='paragraph'>
                Die Grafik zeigt, dass die Arten und die Gesamthöhe der Ausgaben bei Haushalten unterschiedlicher Einkommensgruppen auf den ersten Blick recht ähnlich erscheinen (linke Seite). Deutliche Unterschiede zeigen sich jedoch im Verhältnis der Ausgaben zum Einkommen (rechte Seite).
            </p>

            <p className='paragraph'>
            Die ärmsten 20 % der Haushalte geben nahezu ihr gesamtes Einkommen für <GlossaryTerm className="glossary-term expenditure">notwendige Ausgaben</GlossaryTerm> wie Wohnen, Energie oder Lebensmittel aus. Dadurch bleibt ihnen kaum <GlossaryTerm className="glossary-term residualIncome">Residualeinkommen</GlossaryTerm> übrig, was bedeutet, dass sie kaum Spielraum für Notfälle – wie den Ausfall einer Waschmaschine – oder andere unvorhergesehene Ausgaben haben. Im Gegensatz dazu verwenden die reichsten 20 % der Haushalte nur etwa 30 % ihres Einkommens für <GlossaryTerm className="glossary-term expenditure">notwendige Ausgaben</GlossaryTerm>. Das resultiert in einem sehr hohen <GlossaryTerm className="glossary-term residualIncome">Residualeinkommen</GlossaryTerm>, das für Freizeit, Ersparnisse oder zusätzliche Investitionen genutzt werden kann. Bei Haushalten im mittleren Einkommensbereich verbleiben nach den notwendigen Ausgaben 40 bis 60 % ihres Einkommens, wodurch sie zwar mehr Spielraum als die ärmsten Haushalte, aber weniger finanzielle Freiheit als die reichsten haben.
            </p>

            <h2><GlossaryTerm className="glossary-term incomeInequality">Einkommensungleichheit</GlossaryTerm> nach Gesamteinkommen und verfügbaren Einkommen</h2>

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

            <div>
                <Accordion sx={{background: "#f4f4f4"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography><strong>Wie wird der Gini berechnet?</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>TODO: Erläuterungstext hier einfügen</Typography>
                </AccordionDetails>
                </Accordion>
            </div>

            <h2>Fokus auf RESI und EK</h2>

            <p>TODO: Punktwolke</p>

            <h2>Verfügbare Einkommen nach Bildungsabschlüssen und Beschäftigung</h2>
            <p className='paragraph'>
                Da die Einkommen stark vom Bildungsniveau, dem Beschäftigungsgrad und der Art der Erwerbstätigkeit abhängen, die notwendigen Ausgaben aber von allen getätigt werden müssen, spiegeln sich diese wirtschaftlichen Unterschiede noch stärker im verfügbaren Einkommen wider. In der Grafik kann zwischen den Kategorien gewechselt werden: 
            </p>

            {/* Barchart*/}
            <p>TODO: Barchart</p>


            {/* Barchart Bildung 1*/}
            {/* Barchart Bildung 2*/}
            <p>TODO: Barcharts - Bildungsabschlüsse</p>

            <p className='paragraph'>
                Höhere Bildungsabschlüsse und Vollzeiterwerbstätigkeit geben den Haushalten deutlich mehr finanziellen Spielraum. Besonders belastet sind hingegen Arbeitslose, Haushalte ohne Vollzeitbeschäftigte - häufig z.B. Alleinerziehende - und Pensionist:innen mit niedrigen Bildungsabschlüssen. In diesen Haushalten reicht das Einkommen nach Deckung der Grundausgaben oft nicht aus, um weitere Ausgaben zu tätigen oder Rücklagen zu bilden.
            </p>

            <h2>Regionale Unterschiede beim verfügbaren Einkommen</h2>

            {/* MeanMap */}
            <Box 
                className="mean-map-container"
                sx={{
                    background: "#f4f4f4",
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 1,
                    fontSize: '14px',
                    marginTop: 2,
                }}
            >
                <MeanMapChart/>
            </Box>

            {/* Infobox with CommunitySizeClass map */}
            <div>
                <Accordion sx={{background: "#f4f4f4"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography><strong>Wo wohnt Österreich: Gemeindegrößeklassenerklärung</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        In vielen regionalen Statistiken werden die österreichischen Gemeinden in <GlossaryTerm className="glossary-term communitySizeClass" theme="dark">Gemeindegrößeklassen</GlossaryTerm> eingeteilt. Sechs österreichische Landeshauptstädte haben über 100.000 Einwohner:innen (Wien, Graz, Linz, Salzburg, Klagenfurt und Innsbruck). Insgesamt leben etwas mehr als 20% aller Bewohner:innen Österreichs in diesen Städten, ähnlich viele wie in den 1.366 Gemeinden mit weniger als 2.500 Einwohner:innen. Mehr als 30% der Österreicher:innen leben in den 641 Gemeinden mit 2.500-10.000 Einwohner:innen und 27% in Klein- und Mittelstädten.
                    </Typography>

                    <img className="community-size-map" src={`${process.env.PUBLIC_URL}/images/Abb_KarteGemeindegroeßen_DE.png`} alt="Gemeindegrößeklassen" />
                </AccordionDetails>
                </Accordion>
            </div>

            </section>

            <section id="social-infrastructure">
            <h1>Soziale Infrastruktur in Österreich</h1>
            <p className='paragraph'>
            <GlossaryTerm className="glossary-term si">Soziale Infrastrukturen</GlossaryTerm> wie Kindergärten, Schulen, Gesundheits- und Pflegeeinrichtungen sind essenziell für eine funktionierende Gesellschaft. Sie ermöglichen Bildung, Gesundheit und soziale Teilhabe – unabhängig vom Einkommen. Doch ihr Zugang und ihre Qualität sind nicht überall gleich. Regionale Unterschiede und fehlende Angebote können Haushalte zusätzlich belasten und Ungleichheiten verstärken.
            </p>

            <p className='paragraph'>
                Die Karten zeigen die sozialen Infrastrukturen in Bezug auf den Bedarf in der Gemeinde. Während Ärzt:innen pro Einwohner:in berechnet werden, beziehen sich Kindergartengruppen auf Kinder im Alter von 3 bis 6 Jahren und Plätze in Pflegeheimen auf Menschen über 70. Neben der Verfügbarkeit von Infrastrukturen spielt auch ihre Zugänglichkeit eine Rolle: Kurze Öffnungszeiten oder hohe Kosten können die Nutzung einschränken. Da viele Menschen auch die Infrastrukturen in Nachbargemeinden nutzen, werden diese – mit geringerem Gewicht – in den Infrastrukturindikator einbezogen. In der Karte kann dieser Effekt ein- und ausgeblendet werden. Die obere Karte zeigt die Gesamtsumme aller Infrastrukturen, während in der unteren Karte die verschiedenen Infrastrukturarten einzeln betrachtet werden können. Genauere Informationen zu den einzelnen Infrastrukturen und der Berechnung der Indikatoren lassen sich unten ausklappen.
            </p>

            {/* SI map overall */}
            <Box
                sx={{
                    background: "#f4f4f4",
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 1,
                    fontSize: '14px',
                    marginTop: 2,
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
                    <ToggleButton value="no_so">No Spillover</ToggleButton>
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
                    marginTop: '48px',
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
                            <ToggleButton value="so_sub">Spillover</ToggleButton>
                            <ToggleButton value="no_so_sub">No Spillover</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                
                <div className="si-subindicator-container">
                    <SISubIndicatorMap/>
                </div>
            </Box>

            <h2>Wie werden die einzelnen Infrastrukturindikatoren berechnet?</h2>

            <p className='paragraph'>
                Der Gesamtindikator für <GlossaryTerm className="glossary-term si">soziale Infrastrukturen</GlossaryTerm> setzt sich aus sechs gleich gewichteten Teilindikatoren zusammen: Kindergärten, Schulen, Krankenhäuser, Allgemeinmediziner:innen, Pflegeeinrichtungen und andere soziale Einrichtungen. Innerhalb der Teilindikatoren wird die Verfügbarkeit mit 50 %, die Zugänglichkeit mit 30 % und die Einflüsse von Nachbargemeinden (Spillover-Effekte) mit 20 % gewichtet, um die unterschiedlichen Aspekte der Infrastruktur umfassend zu berücksichtigen.
            </p>

            {/* SI Table*/}
            <SocialInfrastructureTable/>

            </section>

            <section id="time-usage">
            <h1>Zeitverwendung in Österreich</h1>
            
            <p className='paragraph'>
                Fokus Tageszeitnutzung nach Geschlecht und Alter
            </p>

            <p>TODO: wie auflistungen darstellen? Kommen hier Absätze?</p>
            
            </section>

            <section id="what-now">
                <h1>Was nun?</h1>

                <p className='paragraph'>
                    Ungleichheit ist mehr als nur eine Frage des Einkommens. Wer wie viel verdient, bestimmt zwar den monetären Spielraum, doch erst im Zusammenspiel mit notwendigen Ausgaben, aufgewandter Zeit (vor allem für Erwerbsarbeit und unbezahlter Arbeit) und öffentlicher sozialer Infrastruktur entsteht ein breiteres Bild sozialer Ungleichheit. Unser Projekt zeigt: Diese Faktoren sind nicht isoliert zu betrachten. Sie verstärken sich gegenseitig und beeinflussen. Um nachhaltige Lösungen zu entwickeln, muss Politik diese Zusammenhänge anerkennen und gezielt eingreifen.
                </p>

                <h2>Einkommen: Mehr als nur Lohn – es geht um echte Verfügbarkeit</h2>
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

                <h2>Notwendige Ausgaben: Wer mehr ausgeben muss, hat weniger Spielraum</h2>
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

                <h2>Soziale Infrastrukturen: Wer auf eigene Mittel angewiesen ist, bleibt zurück</h2>
                <p className='paragraph'>
                    Öffentliche Kinderbetreuung, Gesundheitsversorgung, Pflegeangebote oder Bildungszugang – <GlossaryTerm className="glossary-term si">soziale Infrastruktur</GlossaryTerm> entscheidet darüber, wie stark Menschen auf ihr eigenes Einkommen angewiesen sind. Ist sie schlecht ausgebaut, verstärken sich Ungleichheiten, da Haushalte oftmals auf Infrastruktur in benachbarten Gemeinden angewiesen und private Lösungen teuer sind.
                </p>
                <div className='paragraph'>
                    <p className="implications">Politische Implikationen:</p>
                    <ul className="custom-list social-infrastructure">
                    <li>Kostenfreie und flächendeckende Kinderbetreuung als Grundpfeiler</li>
                    <li>Investitionen in den öffentlichen Gesundheits- und Pflegesektor</li>
                    <li>Stärkung ländlicher Infrastruktur, um Stadt-Land-Ungleichheiten zu reduzieren</li>
                    </ul>
                </div>

                <h2>Zeitverwendung: Armut ist oft auch Zeitmangel</h2>
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
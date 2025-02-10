import React, { useState, useEffect } from "react";
import './App.css';

import HeroSection from "./components/HeroSection/HeroSection";
import HeaderAppBar from "./components/HeaderAppBar/HeaderAppBar";
import BackgroundChart from './components/BackgroundChart/BackgroundChart';
import ScrollProgressBar from './components/ScrollProgressBar';
import ExpenditureCharts from './components/ExpenditureCharts';
import HouseholdTable from "./components/HouseholdTable";
import CounterAnimation from "./components/CounterAnimation";

import CommunitySizeChart from "./components/CommunitySizeClass";
import SocialInfrastructureTable from "./components/SocialInfrastructureTable";


// import ViolinChart from "./components/ViolinChart";
// import AustriaMapComponent from './components/AustriaMap';
// import LivabilityChart from './components/d3Chart';
// import NavBar from './components/NavigationBar';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import MeanMapChart from "./components/MeanMapChart";



function App() {
  const mapboxAccessToken = 'pk.eyJ1Ijoic2ltbGFidHV3aWVuIiwiYSI6ImNtNnl2OTB5MDAwOTUybHNlZ2FrenJkazUifQ.hZw0Uga4clOW7Ewz5NUrCg';

  const [mode, setMode] = useState("quantils");

  const handleModeChange = (event, newMode) => {
    if (newMode !== null) {
      setMode(newMode);
    }
  };

  const [showAppBar, setShowAppBar] = useState(false);
  
  useEffect(() => {
    setShowAppBar(window.scrollY > 50);
  
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowAppBar(true);
      } else {
        setShowAppBar(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      <HeaderAppBar show={showAppBar} /> {/* Show AppBar on scroll */}

      <HeroSection></HeroSection>

      <div className='title-wrapper'>
        <section className="title-section" id="intro">
          
          <h1 className="title">Perspektiven auf Ungleichheit in Österreich</h1>
          <h3>Verfügbares Einkommen, soziale Infrastruktur und Zeitverwendung</h3>
        </section>
      </div>


      {/* Scrollable Content */}
      <div className="content-wrapper">

        <section className='background' id="background">
          <h2> Hintergrund / Einleitung</h2>
          <p className="paragraph">
            Die Ressourcen in unserer Gesellschaft sind ungleich verteilt. Traditionelle Indikatoren zur Messung von Ungleichheit, wie das Bruttoinlandsprodukt oder der Gini-Index , konzentrieren sich vor allem auf Einkommensunterschiede. Aber das Einkommen allein erzählt nicht die ganze Geschichte.
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
          
          <div className='image-container definition-image'>
            <img src="/Abb2_ResiDefinition_DE.png" alt="illustration showing the definition of Resi project" />
          </div>
          
          <div>
            {/* accodring with additional info here */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography><strong>Wo kommen unsere Daten her und wie funktioniert die Berechnung genau?</strong></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Zur Berechnung der verfügbaren Einkommen werden die Abgestimmte Lohn- und Einkommensteuerstatistik 2019 und 2020 und die Konsumerhebung (2019-2020) verwendet. Die Informationen zu Personen können über eine ID zwischen den beiden Erhebungen verknüpft und Personen eindeutig Haushalten zugeordnet werden. Das an die OECD-Skala angepasste Haushaltseinkommen wird berechnet. Die Konsumerhebung liefert detaillierte Informationen über die Ausgaben der Haushalte, wobei die unter „notwendige Ausgaben“ zusammengefassten Kategorien identifiziert werden können. Während für alle Personen in Österreich mit steuerrelevantem Einkommen Informationen vorliegen, handelt es sich bei der Konsumerhebung um eine repräsentative Stichprobenerhebung, die 6.873 Haushalte umfasst. Das verfügbare Einkommen kann daher nur für diese Haushalte berechnet werden, weshalb die Ergebnisse auf der Ebene von Personengruppen, Regionen und Haushaltstypen ausgewertet werden.</Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <h2>Wieviel Einkommen haben die Haushalte?</h2>

          <p className='paragraph'>
            Das mittlere Haushaltseinkommen in Österreich ist XX 
          </p>
          

          {/* Histogramm */}

          <h2>Wofür geben Haushalte Geld aus?</h2>
          <p className='paragraph'>
            Wieviel Haushalte einnehmen und ausgeben ist stark von der Haushaltsform abhängig. Mehr erwerbstätige Personen im Haushalt bringt ein höheres Einkommen, während weitere Haushaltsmitglieder auch höhere Konsumausgaben bedeuten. Hier sieht man die mittleren Einkommen, notwendigen Ausgaben und daraus ergebende verfügbare Einkommen für unterschiedliche Haushaltstypen: 
          </p>

          {/* Table oder Piktogramme */}
          <HouseholdTable/>

          <p className='paragraph'>
            Haushalte lassen sich auch nach ihrem Einkommen einteilen, zum Beispiel in Quintile oder Dezile, fünf bzw. zehn Gruppen in der die gleiche Anzahl an Haushalten enthalten ist.
          </p>

          <div className="toggle-container">
            <ToggleButtonGroup
              className="expenditure-toggle"
              value={mode}
              exclusive
              onChange={handleModeChange}
              aria-label="mode selection"
            >
              <ToggleButton value="quantils">Quintil</ToggleButton>
              <ToggleButton value="decils">Dezil</ToggleButton>
            </ToggleButtonGroup>
          </div>
          

          <div className="expenditure-charts-container">
            <ExpenditureCharts mode={mode}/>
          </div>


          <p className='paragraph'>
            Die Grafik zeigt, dass die Arten und die Gesamthöhe der Ausgaben bei Haushalten unterschiedlicher Einkommensgruppen auf den ersten Blick recht ähnlich erscheinen (linke Seite). Deutliche Unterschiede zeigen sich jedoch im Verhältnis der Ausgaben zum Einkommen (rechte Seite).
          </p>

          <p className='paragraph'>
          Die ärmsten 20 % der Haushalte geben nahezu ihr gesamtes Einkommen für notwendige Ausgaben wie Wohnen, Energie oder Lebensmittel aus. Dadurch bleibt ihnen kaum Residualeinkommen übrig, was bedeutet, dass sie kaum Spielraum für Notfälle – wie den Ausfall einer Waschmaschine – oder andere unvorhergesehene Ausgaben haben. Im Gegensatz dazu verwenden die reichsten 20 % der Haushalte nur etwa 30 % ihres Einkommens für notwendige Ausgaben. Das resultiert in einem sehr hohen Residualeinkommen, das für Freizeit, Ersparnisse oder zusätzliche Investitionen genutzt werden kann. Bei Haushalten im mittleren Einkommensbereich verbleiben nach den notwendigen Ausgaben 40 bis 60 % ihres Einkommens, wodurch sie zwar mehr Spielraum als die ärmsten Haushalte, aber weniger finanzielle Freiheit als die reichsten haben.
          </p>

          <h2>Einkommensungleichheit nach Gesamteinkommen und verfügbaren Einkommen</h2>

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
            {/* accodring with additional info here */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography><strong>Wie wird der Gini berechnet?</strong></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>TODO: Erläuterungstext hier einfügen</Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <h2>Fokus auf RESI und EK</h2>

          <h2>Verfügbare Einkommen nach Bildungsabschlüssen und Beschäftigung</h2>
          <p className='paragraph'>
            Da die Einkommen stark vom Bildungsniveau, dem Beschäftigungsgrad und der Art der Erwerbstätigkeit abhängen, die notwendigen Ausgaben aber von allen getätigt werden müssen, spiegeln sich diese wirtschaftlichen Unterschiede noch stärker im verfügbaren Einkommen wider. In der Grafik kann zwischen den Kategorien gewechselt werden: 
          </p>

          {/* Violinchart*/}
          {/* <ViolinChart/> */}

          {/* Barchart 1*/}
          {/* Barchart 2*/}
          <p className='paragraph'>
            Höhere Bildungsabschlüsse und Vollzeiterwerbstätigkeit geben den Haushalten deutlich mehr finanziellen Spielraum. Besonders belastet sind hingegen Arbeitslose, Haushalte ohne Vollzeitbeschäftigte - häufig z.B. Alleinerziehende - und Pensionist:innen mit niedrigen Bildungsabschlüssen. In diesen Haushalten reicht das Einkommen nach Deckung der Grundausgaben oft nicht aus, um weitere Ausgaben zu tätigen oder Rücklagen zu bilden.
          </p>

          <h2>Regionale Unterschiede beim verfügbaren Einkommen</h2>

          {/* SVG Karte 1*/}
          <div className="mean-map-container">
            <MeanMapChart/>
          </div>
          
          {/* Infobox mit Karte 2*/}
          <CommunitySizeChart mapboxAccessToken={mapboxAccessToken}/>
        </section>

        <section id="social-infrastructure">
          <h1>Soziale Infrastruktur in Österreich</h1>
          <p className='paragraph'>
            Soziale Infrastrukturen wie Kindergärten, Schulen, Gesundheits- und Pflegeeinrichtungen sind essenziell für eine funktionierende Gesellschaft. Sie ermöglichen Bildung, Gesundheit und soziale Teilhabe – unabhängig vom Einkommen. Doch ihr Zugang und ihre Qualität sind nicht überall gleich. Regionale Unterschiede und fehlende Angebote können Haushalte zusätzlich belasten und Ungleichheiten verstärken.
          </p>

          <p className='paragraph'>
            Die Karten zeigen die sozialen Infrastrukturen in Bezug auf den Bedarf in der Gemeinde. Während Ärzt:innen pro Einwohner:in berechnet werden, beziehen sich Kindergartengruppen auf Kinder im Alter von 3 bis 6 Jahren und Plätze in Pflegeheimen auf Menschen über 70. Neben der Verfügbarkeit von Infrastrukturen spielt auch ihre Zugänglichkeit eine Rolle: Kurze Öffnungszeiten oder hohe Kosten können die Nutzung einschränken. Da viele Menschen auch die Infrastrukturen in Nachbargemeinden nutzen, werden diese – mit geringerem Gewicht – in den Infrastrukturindikator einbezogen. In der Karte kann dieser Effekt ein- und ausgeblendet werden. Die obere Karte zeigt die Gesamtsumme aller Infrastrukturen, während in der unteren Karte die verschiedenen Infrastrukturarten einzeln betrachtet werden können. Genauere Informationen zu den einzelnen Infrastrukturen und der Berechnung der Indikatoren lassen sich unten ausklappen.
          </p>

          {/* SI Karte 1*/}

          {/* SI Karte 2*/}

          <h2>Wie werden die einzelnen Infrastrukturindikatoren berechnet?</h2>

          <p className='paragraph'>
            Der Gesamtindikator für soziale Infrastrukturen setzt sich aus sechs gleich gewichteten Teilindikatoren zusammen: Kindergärten, Schulen, Krankenhäuser, Allgemeinmediziner:innen, Pflegeeinrichtungen und andere soziale Einrichtungen. Innerhalb der Teilindikatoren wird die Verfügbarkeit mit 50 %, die Zugänglichkeit mit 30 % und die Einflüsse von Nachbargemeinden (Spillover-Effekte) mit 20 % gewichtet, um die unterschiedlichen Aspekte der Infrastruktur umfassend zu berücksichtigen.
          </p>

          {/* SI Table*/}
          <SocialInfrastructureTable/>

        </section>

        <section id="time-usage">
          <h1>Zeitverwendung in Österreich</h1>
        
          <p className='paragraph'>
            Fokus Tageszeitnutzung nach Geschlecht und Alter
          </p>
        
        </section>

        {/* <section className="austria-map">
          <h1 className="title">Leaflet Map Section</h1>
          <AustriaMapComponent mapboxAccessToken={mapboxAccessToken} />
        </section>
        
        <section>
          <h1 className="title">Lebensqualität</h1>
          <LivabilityChart/>
        </section> */}

      </div>

      <div className='progressBar'>
        <ScrollProgressBar/>
      </div>
    </>
  );
}

export default App;
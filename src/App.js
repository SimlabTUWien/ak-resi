import React, { useState } from "react";
import './App.css';

import AustriaMapComponent from './components/AustriaMap';
import LivabilityChart from './components/d3Chart';
import BackgroundChart from './components/BackgroundChart';
import NavBar from './components/NavigationBar';
import ScrollProgressBar from './components/ScrollProgressBar';
import ExpenditureCharts from './components/ExpenditureCharts';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import ViolinChart from "./components/ViolinChart";
import CounterAnimation from "./components/CounterAnimation";

function App() {
  const mapboxAccessToken = 'your-mapbox-token-here';

  const [mode, setMode] = useState("quantils");

  const handleModeChange = (event, newMode) => {
    if (newMode !== null) {
      setMode(newMode);
    }
  };

  // const scrollContainerRef = useRef(null);

  // const adjustHeight = () => {
  //   const scrollContainer = scrollContainerRef.current;
  //   const largeImage = scrollContainer.querySelector('.large-image img');
  //   const smallImage = scrollContainer.querySelector('.small-image img');

  //   if (!scrollContainer.classList.contains('scrolled')) {
  //     scrollContainer.style.height = `${largeImage.clientHeight}px`;
  //   } else {
  //     scrollContainer.style.height = `${smallImage.clientHeight}px`;
  //   }
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollContainer = scrollContainerRef.current;
  //     const header = document.querySelector('.header');
  //     const scrollY = window.scrollY;

  //     if (scrollY > 100) {
  //       scrollContainer.classList.add('scrolled');
  //       scrollContainer.style.height = `${scrollContainer.querySelector('.small-image img').clientHeight}px`;
  //       if (scrollY > 300) {
  //         header.classList.add('header-only');
  //       } else {
  //         header.classList.remove('header-only');
  //       }
  //     } else {
  //       scrollContainer.classList.remove('scrolled');
  //       scrollContainer.style.height = `${scrollContainer.querySelector('.large-image img').clientHeight}px`;
  //       header.classList.remove('header-only');
  //     }
  //   };

  //   // Adjust height on load and attach scroll listener
  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup event listener
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>

      {/* <header className="header">
        <div className="header-logo">
          <img src="/Logo_Projekt_small.png" alt="Project logo" />
        </div>
        <h1>Re:sIZE</h1>
      </header>

      <div className="scroll-container" ref={scrollContainerRef}>
        <div className="large-image">
          <img
            src="/HaeuserzeileHeader_spiegel.png"
            alt="row of houses with reflections"
          />
        </div>
        <div className="small-image">
          <img src="/HaeuserzeileHeader.png" alt="row of houses" />
        </div>
      </div>


      <div className='title-wrapper'>
        <section className="title-section">

          <div className='text-container'>
            <h1 className="title">Perspektiven auf Ungleichhet in Österreich</h1>
            <h3>Verfügbares Einkommen, soziale Infrastruktur und Zeitverwendung</h3>
          </div>

          <div className='image-container logo-large'>
            <img src="/Logo_Projekt_icons.png" alt="showing the four core aspects of the project" />
          </div>
        </section>
      </div> */}





      <header className="header">


        
        <div className='header-logo'>
          <img src="/Logo_Projekt_small.png" alt="project's logo without icons" />
        </div>
        <h1>Re:sIZE</h1>
      </header>
      
      <div className="header-image">
        <img
          src="/HaeuserzeileHeader_spiegel.png"
          alt="showing houses in a row in cartoonish style"
        />
      </div>

      <NavBar/>

      <div className='title-wrapper'>
        <section className="title-section">
          <div className='text-container'>
            <h1 className="title">Perspektiven auf Ungleichheit in Österreich</h1>
            <h3>Verfügbares Einkommen, soziale Infrastruktur und Zeitverwendung</h3>
          </div>

          <div className='image-container logo-large'>
            <img src="/Logo_Projekt_icons.png" alt="showing the four core aspects of the project" />
          </div>
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
          <h2>Verfügbares Einkommen in Österreich</h2>
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

          {/* Histogramm */}

          <h2>Wofür geben Haushalte Geld aus?</h2>
          <p className='paragraph'>
            Wieviel Haushalte einnehmen und ausgeben ist stark von der Haushaltsform abhängig. Mehr erwerbstätige Personen im Haushalt bringt ein höheres Einkommen, während weitere Haushaltsmitglieder auch höhere Konsumausgaben bedeuten. Hier sieht man die mittleren Einkommen, notwendigen Ausgaben und daraus ergebende verfügbare Einkommen für unterschiedliche Haushaltstypen: 
          </p>

          {/* Table oder Piktogramme */}

          <p className='paragraph'>
            Haushalte lassen sich auch nach ihrem Einkommen einteilen, zum Beispiel in Quintile oder Dezile, fünf bzw. zehn Gruppen in der die gleiche Anzahl an Haushalten enthalten ist.
          </p>


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

          <div className="expenditure-charts">
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

          {/* Karte 1*/}
          {/* Inforbox*/}
          {/* Karte 2*/}
        </section>

        <section id="infrastructure">
          <h2>Soziale Infrastruktur in Österreich</h2>
          <p className='paragraph'>
          Soziale Infrastrukturen wie Kindergärten, Schulen, Gesundheits- und Pflegeeinrichtungen sind essenziell für eine funktionierende Gesellschaft. Sie ermöglichen Bildung, Gesundheit und soziale Teilhabe – unabhängig vom Einkommen. Doch ihr Zugang und ihre Qualität sind nicht überall gleich. Regionale Unterschiede und fehlende Angebote können Haushalte zusätzlich belasten und Ungleichheiten verstärken.
          </p>

          <p className='paragraph'>
            Soziale Infrastrukturen in Österreich wurden aus unterschiedlichen Datenquellen erhoben. 
          </p>

        </section>

        <section className="austria-map">
          <h1 className="title">Leaflet Map Section</h1>
          <AustriaMapComponent mapboxAccessToken={mapboxAccessToken} />
        </section>
        
        <section>
          <h1 className="title">Lebensqualität</h1>
          <LivabilityChart/>
        </section>

      </div>

      <div className='progressBar'>
        <ScrollProgressBar/>
      </div>
    </>
  );
}

export default App;





// const Header = styled.header`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   height: 60px;
//   background-color: #002366; /* Dark Blue */
//   display: flex;
//   justify-content: left;
//   padding-left: 10px;
//   align-items: center;
//   color: white;
//   z-index: 1000;
// `;

// const Section = styled.section`
//   height: 100vh; /* 100% of viewport height */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   font-size: 2rem;
//   scroll-snap-align: start; /* For scroll snapping */
//   background-color: ${(props) => props.bgColor || "#fff"};
// `;

// const Title = styled.h1`
//   color: #333;
//   font-size: 2.5rem;
//   margin-bottom: 20px;
// `;

// const Paragraph = styled.p`
//   font-size: 1.1rem;
//   color: #555;
// `;

// const ContentWrapper = styled.div`
//   scroll-snap-type: y mandatory; /* Enables scroll snapping for vertical scroll */
//   height: 100vh; /* 100% of viewport height */
//   overflow-y: scroll; /* Enables vertical scrolling */
//   scroll-behavior: smooth; /* Smooth scrolling */
// `;



// function App() {

//   const mapboxAccessToken = 'pk.eyJ1Ijoic2ltbGFidHV3aWVuIiwiYSI6ImNrbm5kM3MwejEwejEyc24wc3R4aGQ4amUifQ.M8BOCFCXVYi2bt0lINlIqw';

//   const [geojsonData, setGeojsonData] = useState(null);

//   useEffect(() => {
//         fetch('./urban_rural_wgs84_dissgem.geojson')
//           .then((response) => response.json())
//           .then((data) => setGeojsonData(data))
//           .catch((error) => console.error('Error loading GeoJSON data:', error));
//       }, []);
    
//       const onEachFeature = (feature, layer) => {
//         if (feature.properties) {
//           layer.on({
//             click: () => {
//               layer.bindPopup(
//                 `
//                   ID: <b>${feature.properties.id2}</b><br>
//                   Gemeinde: <b>${feature.properties._GEMNAME}</b><br>
//                   Bundesland: <b>${feature.properties.BL}</b>
//                 `
//               ).openPopup();
//             }
//           });
//         }
//       };
    
//       const chartOptions = {
//         tooltip: {
//           trigger: 'axis',
//           axisPointer: {
//             type: 'cross',
//             label: {
//               backgroundColor: '#6a7985'
//             }
//           }
//         },
//         legend: {
//           data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
//         },
//         toolbox: {
//           feature: {
//             saveAsImage: {}
//           }
//         },
//         grid: {
//           left: '3%',
//           right: '4%',
//           bottom: '3%',
//           containLabel: true
//         },
//         xAxis: [
//           {
//             type: 'category',
//             boundaryGap: false,
//             data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//           }
//         ],
//         yAxis: [
//           {
//             type: 'value'
//           }
//         ],
//         series: [
//           {
//             name: 'Email',
//             type: 'line',
//             stack: 'Total',
//             areaStyle: {},
//             emphasis: {
//               focus: 'series'
//             },
//             data: [120, 132, 101, 134, 90, 230, 210]
//           },
//           {
//             name: 'Union Ads',
//             type: 'line',
//             stack: 'Total',
//             areaStyle: {},
//             emphasis: {
//               focus: 'series'
//             },
//             data: [220, 182, 191, 234, 290, 330, 310]
//           },
//           {
//             name: 'Video Ads',
//             type: 'line',
//             stack: 'Total',
//             areaStyle: {},
//             emphasis: {
//               focus: 'series'
//             },
//             data: [150, 232, 201, 154, 190, 330, 410]
//           },
//           {
//             name: 'Direct',
//             type: 'line',
//             stack: 'Total',
//             areaStyle: {},
//             emphasis: {
//               focus: 'series'
//             },
//             data: [320, 332, 301, 334, 390, 330, 320]
//           },
//           {
//             name: 'Search Engine',
//             type: 'line',
//             stack: 'Total',
//             label: {
//               show: true,
//               position: 'top'
//             },
//             areaStyle: {},
//             emphasis: {
//               focus: 'series'
//             },
//             data: [820, 932, 901, 934, 1290, 1330, 1320]
//           }
//         ]
//       };

//   return (
//     <>
//       {/* Fixed Header */}
//       <Header>
//         <h1>AK-Resi</h1>
//       </Header>

//       {/* Scrollable Content */}
//       <ContentWrapper>
//         <Section>
//           <Title>Welcome!</Title>
//           <Paragraph>This is a demo of the AK-Resi one-pager with ECharts and Leaflet maps.</Paragraph>
//         </Section>

//         {/* ECharts Section */}
//         <Section>
//           <Title>ECharts Section</Title>
//           <EChartsReact option={chartOptions} style={{ height: 400 }} />
//           <Paragraph>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Paragraph>
//         </Section>

//         {/* Leaflet Map Section */}
//         <Section>
//           <Title>Leaflet Map Section</Title>
//           <MapContainer 
//             // bounds={[[46.372276, 9.530952], [49.021162, 17.160568]]}
//             // zoom={14} 
//             bounds={[[46.372276, 9.530952], [49.021162, 17.160568]]}  // Fits Austria
//             zoom={8}  
//             scrollWheelZoom={false}
//             doubleClickZoom={false}
//             touchZoom={false}             
//             keyboard={false}                                          // Disable keyboard controls
//             dragging={false}                                          // Disable dragging (panning)
//             zoomControl={false}                                       // Disable zoom control UI on the map
//             style={{ height: '800px', width: '100%' }}
//           >
//             <TileLayer
//               url={`https://api.mapbox.com/styles/v1/simlabtuwien/cm2bx9u9w00rs01peeqrrakfo/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`}
//               attribution='© <a href="https://www.mapbox.com/about/maps/" rel="noreferrer noopener nofollow" target="_blank">Mapbox</a>, <a href="http://www.openstreetmap.org/copyright" rel="noreferrer noopener nofollow" target="_blank">OpenStreetMap contributors</a>'
//             />

//             {geojsonData && (
//               <GeoJSON data={geojsonData} onEachFeature={onEachFeature} />
//             )}
//           </MapContainer>
//         </Section>

//         {/* Another text section */}
//         <Section>
//           <Title>More Content</Title>
//           <Paragraph>More Content TBA!</Paragraph>
//         </Section>
//       </ContentWrapper>
//     </>
//   );
// }

// export default App;

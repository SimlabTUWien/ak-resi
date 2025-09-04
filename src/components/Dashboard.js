import { useState } from "react";
import { Box, Grid2 } from '@mui/material';
import DashboardChart from './DashboardChart';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "../styles/Dashboard.css";

const residualUrl = `${process.env.PUBLIC_URL}/images/db-residual.svg`;
const siUrl = `${process.env.PUBLIC_URL}/images/db-si.svg`;
const zeitUrl = `${process.env.PUBLIC_URL}/images/db-zeit.svg`;

const Dashboard = () => {
  
  const [selectedKey, setSelectedKey] = useState("initial");

  const contentMap = {
    initial: [
      {
        key: 1,
        type: "d3",
        content: (
            <DashboardChart
              className="dashboard-chart" 
              altText="Grafik mit drei überlappenden Kreisen, welche die Themenbereiche dieser Webseite darstellen"
              onSelect={setSelectedKey} />
        ),
      },
      {
        key: 2,
        type: "text",
        content: (
          <>
            <h2 className="boldText" style={{color: "#f0ae9f", fontSize: "1.3rem", marginTop: "0", marginBottom: "2px"}}>Residualeinkommen</h2>
            <span>Nettoeinkommen abzüglich notwendingen Ausgaben zur Erfüllung der Grundbedürfnisse</span>
            <h2 className="boldText" style={{color: "#a5cdc8", fontSize: "1.3rem", marginBottom: "2px"}}>Soziale Infrastruktur</h2>
            <span>Unverzichtbare Einrichtungen. Gute Ausstattung mit sozialer Infrastruktur bringt Sicherheit und spart Wege, Zeit und Geld </span>
            <h2 className="boldText" style={{color: "#fcd799", fontSize: "1.3rem", marginBottom: "2px"}}>Zeitverwendung</h2>
            <span>Zeit ist eine wichtige Ressource und wird in Haushalten unterschiedlich eingesetzt und verteilt</span>
          </>
        ),
      },
      {
          key: 3,
          type: "text",
          contentHeader: "Hintergrund",
          content: (
              <span>Ungleichheit zeigt sich nicht nur beim Einkommen, sondern auch bei Ausgaben, Infrastruktur und Zeit. Das Projekt Re:sI:Ze untersucht diese Faktoren gemeinsam, um ein umfassenderes Bild der Lebensrealität in Österreich zu geben.</span>
          ),
      },

      {
          key: 4,
          type: "text",
          contentHeader: "Re:sI:Ze",
          content: (
              // <span>steht für Residualeinkommen, soziale <br/> Infrastruktur und Zeitverwendung. <br/> Die drei zentralen Themen des <br/> Projekts, die gemeinsam soziale <br/> Ungleichheit umfassend beleuchten.</span>
              <span>steht für Residualeinkommen, soziale Infrastruktur und Zeitverwendung. Die drei zentralen Themen des Projekts, die gemeinsam soziale Ungleichheit umfassend beleuchten.</span>
          ),
      },
    ],
    residual: [
      {
        key: 1,
        type: "d3",
        content: (
            <DashboardChart 
              altText="Grafik mit drei überlappenden Kreisen, welche die Themenbereiche dieser Webseite darstellen"
              onSelect={setSelectedKey} />
        ),
      },
      {
        key: 2,
        type: "image",
        content: (
          <img 
            src={residualUrl} 
            alt="Grafik mit wesentlichen Daten & Zahlen zum Residualeinkommen" 
            style={{ 
              display: "block",
              width: "300px",
              height: "auto",
              objectFit: "contain"
            }}   />
        ),
      },
      {
        key: 3,
        type: "text",
        contentHeader: <>Residual&shy;einkommen</>,
        content: (
              <span>Das Residualeinkommen beschreibt das Einkommen, das nach Abzug der notwendigen Ausgaben für Wohnen, Energie, Gesundheit etc. übrig bleibt. Dieses Geld steht dann für unregelmäßige Ausgaben, Freizeitgestaltung oder zum Sparen zur Verfügung und spielt eine wichtige Rolle für die finanzielle Freiheit eines Haushalts.</span>
          ),
      } 
    ],
    "soz-infra": [
      {
        key: 1,
        type: "d3",
        content: (
            <DashboardChart 
              altText="Grafik mit drei überlappenden Kreisen, welche die Themenbereiche dieser Webseite darstellen"
              onSelect={setSelectedKey} />
        ),
      },
      {
        key: 2,
        type: "image",
        content: (
          <img 
            src={siUrl} 
            alt="Grafik mit wesentlichen Daten & Zahlen zur sozialen Infrastruktur" 
            style={{ 
              display: "block",
              width: "300px",
              maxWidth: "100%", 
              height: "auto",
            }}  />
        ),
      },
      {
        key: 3,
        type: "text",
        contentHeader: "Soziale Infrastruktur",
        content: (
              <span>Soziale Infrastrukturen sind für das Funktionieren einer Gesellschaft genauso essenziell wie technische Infrastrukturen, also Straßen oder Telefonverbindungen. Zugang zu Kindergärten, Schulen, Ärzt:innen, Krankenhäusern, Pflegeeinrichtungen und ähnlichen sozialen Angeboten sind für große Teile der Bevölkerung unverzichtbar und dennoch sind diese Einrichtungen nicht überall in gleicher Qualität oder Dichte verfügbar, was regionale Unterschiede in der Lebensqualität verstärken kann.</span>
          ),
      } 
    ],
    zeit: [
      {
        key: 1,
        type: "d3",
        content: (
            <DashboardChart 
              altText="Grafik mit drei überlappenden Kreisen, welche die Themenbereiche dieser Webseite darstellen"
              onSelect={setSelectedKey} />
        ),
      },
      {
        key: 2,
        type: "image",
        content: (
          <img 
            src={zeitUrl} 
            alt="Grafik mit wesentlichen Daten & Zahlen zur Zeitverwendung" 
            style={{ 
              display: "block",
              width: "300px",
              maxWidth: "100%", 
              height: "auto",
            }}  />
        ),
      },
      {
        key: 3,
        type: "text",
        contentHeader:  <>Zeit&shy;verwendung</>,
        content: (
              <span>Jeder Mensch verfügt über 24 Stunden pro Tag – doch wie diese Stunden genutzt werden, unterscheidet sich stark. Die Zeit die täglich für bezahlte Arbeit, unbezahlte Tätigkeiten wie Haushalt oder Kinderbetreuung, Freizeit, Wegzeiten und Schlaf aufgewandt wird, ist individuell verschieden. Diese Unterschiede beeinflussen sowohl die Lebensqualität als auch die Möglichkeiten, Einkommen zu erzielen oder soziale Aktivitäten wahrzunehmen.</span>
          ),
      } 
    ]
  };

  const dashboardKeys = Object.keys(contentMap);

  const navigateDashboard = (direction) => {
    const currentIndex = dashboardKeys.indexOf(selectedKey);
    let newIndex = currentIndex + direction;

    // Wrap around if out of bounds
    if (newIndex < 0) newIndex = dashboardKeys.length - 1;
    if (newIndex >= dashboardKeys.length) newIndex = 0;

    setSelectedKey(dashboardKeys[newIndex]);
  };

  //TODO: add classes for css styling of single elements

  const gridContent = contentMap[selectedKey];

    // define box/items directly (so I can easly set flex 1 for some items (eg Chart)) so that it fills remaining space ?
    // furthermore define a height of the row which is the value of the bigger item (eg Chart) so that smaller will also set to same height

    // if additional boxes are added, then maybe use the split of inner Grid2 containers to control the rows better (eg 2 rows of 2 items each)

  return (
    <Box
      sx={{
        mx: 'auto',
        padding: { xs: '16px 0', sm: '32px 12px' }, // mobile: 24/4, desktop: 32/12
        bgcolor: '#f4f4f4',
        borderRadius: 1,
        boxShadow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: { xs: 1, sm: 2 },
      }}
    > 
      <button onClick={() => navigateDashboard(-1)} className="nav-button" aria-label="back">
        <ArrowBackIosNewIcon />
      </button>

      
      <Grid2 
        container 
        spacing={{ xs: 2, sm: 2, lg: 4 }}
        justifyContent="space-between" 
      >
        {gridContent.map((item) => {
          let boxStyles = {
            borderRadius: 2,
            padding: 2,
            fontSize: "1.125rem",
            // display: "flex",
            // flexDirection: "column",
          };

          if (item.type === "text" || item.type === "image") {
            boxStyles = {
              ...boxStyles,
              maxWidth: { lg: 512 },
              flexGrow: 1,
              bgcolor: '#fff',
              boxShadow: 3,

            };
          }

          if (item.type === "d3") {
            boxStyles = {
              ...boxStyles,
              flexGrow: 2,
              width: "100%",
              minWidth: 0,
              maxWidth: { xs: "100%", lg: "100%" },
              flex: 1,
              display: "flex",
            };
          }

          return (
            <Grid2 key={item.key} xs={12} sm={12} lg={6} display="flex">
              <Box sx={boxStyles}>
                {item.contentHeader && (
                  <h2
                    className="boldText"
                    style={{ fontSize: "1.4rem", marginTop: 0, marginBottom: "12px" }}
                  >
                    {item.contentHeader}
                  </h2>
                )}
                {item.content}
              </Box>
            </Grid2>
          );
        })}
      </Grid2>


      
      
      {/* <Grid2 
        container 
        spacing={{ xs: 2, sm: 2, lg: 4 }} 
      >
         {gridContent.map((item) => (
          <Grid2 key={item.key} xs={12} sm={12} lg={6}>
            <Box
              sx={{
                bgcolor: '#fff',
                borderRadius: 2,
                padding: 2,
                boxShadow: 3,
                // minHeight: { xs: 180, sm: 340 },
                // maxWidth: 600,
                fontSize: "1.125rem",
              }}
            >
                {item.contentHeader && (
                    <h2 className="boldText" style={{fontSize: "1.4rem", marginTop: "0", marginBottom: "12px"}}>{item.contentHeader}</h2>
                )}
              {item.content}
            </Box>
          </Grid2>
        ))}
      </Grid2> */}

      <button onClick={() => navigateDashboard(1)} className="nav-button" aria-label="forward">
        <ArrowForwardIosIcon />
      </button>
    </Box>
    );
}

export default Dashboard;

      {/* maybe use two inner Grid2 containers for better control of spacing / row controlling ? */}



    // const chartUrl = `${process.env.PUBLIC_URL}/images/1_DashboardChart_big.svg`;

    // const gridContent = [
    //     {
    //       key: 1,
    //       content: (
    //           <DashboardChart altText="Grafik mit drei überlappenden Kreisen, welche die Themenbereiche dieser Webseite darstellen " />
    //       ),
    //     },
    //     {
    //       key: 2,
    //       content: (
    //         <>
    //           <h2 className="boldText" style={{color: "#f0ae9f", fontSize: "1.4rem", marginTop: "0", marginBottom: "2px"}}>Residualeinkommen</h2>
    //           <span>Nettoeinkommen abzüglich notwendingen Ausgaben zur Erfüllung der Grundbedürfnisse</span>
    //           <h2 className="boldText" style={{color: "#a5cdc8", fontSize: "1.4rem", marginBottom: "2px"}}>Soziale Infrastruktur</h2>
    //           <span>Unverzichtbare Einrichtungen. Gute Ausstattung mit sozialer Infrastruktur bringt Sicherheit und spart Wege, Zeit und Geld </span>
    //           <h2 className="boldText" style={{color: "#fcd799", fontSize: "1.4rem", marginBottom: "2px"}}>Zeitverwendung</h2>
    //           <span>Zeit ist eine wichtige Ressource und wird in Haushalten unterschiedlich eingesetzt und verteilt</span>
    //         </>
    //       ),
    //     },
    //     {
    //         key: 3,
    //         contentHeader: "Hintergrund",
    //         content: (
    //             <span>Ungleichheit zeigt sich nicht nur beim Einkommen, sondern auch bei Ausgaben, Infrastruktur und Zeit. Das Projekt Re:sI:Ze untersucht diese Faktoren gemeinsam, um ein umfassenderes Bild der Lebensrealität in Österreich zu geben.</span>
    //         ),
    //     },

    //     {
    //         key: 4,
    //         contentHeader: "Re:sI:Ze",
    //         content: (
    //             <span>steht für Residualeinkommen, soziale <br/> Infrastruktur und Zeitverwendung. <br/> Die drei zentralen Themen des <br/> Projekts, die gemeinsam soziale <br/> Ungleichheit umfassend beleuchten.</span>
    //         ),
    //     },
    // ];
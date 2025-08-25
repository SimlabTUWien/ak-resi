import { Box, Grid2 } from '@mui/material';


const Dashboard = () => {

    const chartUrl = `${process.env.PUBLIC_URL}/images/1_DashboardChart_big.svg`;

    const gridContent = [
        {
          key: 1,
          content: (
              <img
                  src={chartUrl}
                  alt="Outlook Chart"
                  style={{ minWidth: 324, width: '100%', display: 'block' }}
              />
          ),
        },
        {
          key: 2,
          content: (
            <>
              <h2 className="boldText" style={{color: "#f0ae9f", fontSize: "1.4rem", marginTop: "0", marginBottom: "2px"}}>Residualeinkommen</h2>
              <span>Nettoeinkommen abzüglich notwendingen Ausgaben zur Erfüllung der Grundbedürfnisse</span>
              <h2 className="boldText" style={{color: "#a5cdc8", fontSize: "1.4rem", marginBottom: "2px"}}>Soziale Infrastruktur</h2>
              <span>Unverzichtbare Einrichtungen. Gute Ausstattung mit sozialer Infrasturktur bringt Sicherheit und spart Wege, Zeit und Geld </span>
              <h2 className="boldText" style={{color: "#fcd799", fontSize: "1.4rem", marginBottom: "2px"}}>Zeitverwendung</h2>
              <span>Zeit ist eine wichtige Ressource und wird in Haushalten unterschiedlich eingesetzt und verteilt</span>
            </>
          ),
        },
        {
            key: 3,
            contentHeader: "Hintergrund",
            content: (
                <span>Ungleichheit zeigt sich nicht nur beim Einkommen, sondern auch bei Ausgaben, Infrastruktur und Zeit. Das Projekt Re:sI:Ze untersucht diese Faktoren gemeinsam, um ein umfassenderes Bild der Lebensrealität in Österreich zu geben.</span>
            ),
        },

        {
            key: 4,
            contentHeader: "Re:sI:Ze",
            content: (
                <span>steht für Residualeinkommen, soziale <br/> Infrastruktur und Zeitverwendung. <br/> Die drei zentralen Themen des <br/> Projekts, die gemeinsam soziale <br/> Ungleichheit umfassend beleuchten.</span>
            ),
        },
    ];

    // TODO: define box/items directly (so I can easly set flex 1 for some items (eg Chart)) so that it fills remaining space!
    // furthermore define a height of the row which is the value of the bigger item (eg Chart) so that smaller will also set to same height

    // if additional boxes are added, then maybe use the split of inner Grid2 containers to control the rows better (eg 2 rows of 2 items each)

    return (
    <Box
      sx={{
        mx: 'auto',
        padding: 4,
        bgcolor: '#f4f4f4',
        borderRadius: 1,
        boxShadow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* TODO: use two inner Grid2 containers for better control of spacing / row controlling */}
      <Grid2 
        container 
        spacing={4} 
      >
         {gridContent.map((item) => (
          <Grid2 key={item.key} xs={12} sm={6} lg={6}>
            <Box
              sx={{
                bgcolor: '#fff',
                borderRadius: 2,
                padding: 2,
                boxShadow: 3,
                minHeight: 220,
                maxWidth: 600,
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
      </Grid2>
    </Box>
    );
}

export default Dashboard;


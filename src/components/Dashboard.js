import { Box, Grid2 } from '@mui/material';


const Dashboard = () => {

    const chartUrl = `${process.env.PUBLIC_URL}/images/Outlook.svg`;

    const gridContent = [
        {
            key: 1,
            content: (
                <img
                    src={chartUrl}
                    alt="Outlook Chart"
                    style={{ minWidth: 280, width: '100%', display: 'block' }}
                />
            ),
        },
        {
            key: 2,
            contentHeader: "Hintergrund",
            content: (
                <span>Ungleichheit zeigt sich nicht nur beim Einkommen, sondern auch bei Ausgaben, Infrastruktur und Zeit. Das Projekt Re:sI:Ze untersucht diese Faktoren gemeinsam, um ein umfassenderes Bild der Lebensrealität in Österreich zu geben.</span>
            ),
        },
        {
            key: 3,
            content: (
                <span>More text or another image for the third box</span>
            ),
        },
        {
            key: 4,
            content: (
                <span>Fourth box content</span>
            ),
        },
    ];

    return (
    <Box
      sx={{
        maxWidth: 1228,
        mx: 'auto',
        padding: 3,
        bgcolor: '#f4f4f4',
        borderRadius: 1,
        boxShadow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Grid2 container spacing={4} >
         {gridContent.map((item) => (
          <Grid2 key={item.key} xs={12} sm={6} lg={6}>
            <Box
              sx={{
                bgcolor: '#fff',
                borderRadius: 2,
                p: 2,
                boxShadow: 3,

                // height: 220,
                minHeight: 220,
                maxWidth: 600,
                
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
                {item.contentHeader && (
                    <div style={{ fontWeight: 'bold', fontSize: 22, marginBottom: 12 }}>
                    {item.contentHeader}
                    </div>
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
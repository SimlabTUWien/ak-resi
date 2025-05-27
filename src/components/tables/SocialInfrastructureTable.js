import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";


const data = [
    {
      category: <>Allgemein&shy;mediziner:innen</>,
      availability: "Anzahl der Allgemeinmediziner:innen mit Kassenvertrag im Verhältnis zur Wohnbevölkerung der Gemeinde (ohne Kassenvertrag 0,1)",
      accessibility: "Durchschnittliche Öffnungszeiten",
      source: "Docfinder, Handbuch für die medizinischen Berufe in Österreich"
    },
    {
      category: "Krankenhäuser",
      availability: "Anzahl der Krankenhausbetten im Verhältnis zur Bevölkerung von Gemeinden in 30 Minuten Fahrtzeit",
      accessibility: "/",
      source: "Bundesministerium für Soziales, Gesundheit, Pflege und Konsumenten-schutz"
    },
    {
      category: "Pflegeheime",
      availability: "Anzahl der Betten in Pflegeheimen und unterstützten Wohneinrichtungen im Verhältnis zur Bevölkerung über 70 Jahre",
      accessibility: "Anteil der rein öffentlichen Pflegeeinrichtungen",
      source: "Bundesministerium für Soziales, Gesundheit, Pflege und Konsumenten-schutz, Statistik Austria, OpenStreetMaps, data.gv"
    },
    {
      category: "Kindergärten",
      availability: "Anzahl der Kindergarten- und Kleinkindgruppen im Verhältnis zur Anzahl der Kinder in der jeweiligen Altersgruppe (3-6 Jahre bzw. unter 3 Jahre) in der Gemeinde vorhanden sind.",
      accessibility: "Anteil der Kindergärten mit Nachmittagsbetreuung und durchschnittliche Öffnungszeiten",
      source: "Statistik Austria"
    },
    {
      category: "Schulen",
      availability: "Anzahl der Klassen in Volksschulen, Unterstufen- und Oberstufen im Verhältnis zur (potentiellen) Schüler:innenzahl in der jeweiligen Altersgruppe (7-10 Jahre, 11-14 Jahre, 15-19 Jahre)",
      accessibility: "Anteil der Schulen mit Nachmittagsbetreuung",
      source: "Bundesministerium für Bildung, Wissenschaft und Forschung"
    },
    {
      category: <>Andere<br/>Sozialeinrichtungen</>,
      availability: "Anzahl der Einrichtungen im Verhältnis zur Wohnbevölkerung der Gemeinde",
      accessibility: "/",
      source: "Google"
    }
  ];

const SocialInfrastructureTable = () => {
  return (
    <TableContainer 
        component={Paper} 
        sx={{
            background: "#f4f4f4",
            overflowX: "auto",
            minWidth: 320,
            maxWidth: "100%", // Ensure it adapts within parent
            marginTop: 3
        }}
      >
       <Table sx={{ width: "100%", minWidth: 320 }}>
        {/* <TableHead sx={{ backgroundColor: "#d2d5cb" }}> */}
        <TableHead sx={{ backgroundColor: "#a5cdc8",  hyphens: 'none' }}>
          <TableRow>
          <TableCell align="center">Soziale Infrastrukturkategorie</TableCell>
            <TableCell align="center">Verfügbarkeit</TableCell>
            <TableCell align="center">Zugänglichkeit</TableCell>
            <TableCell align="center">Datenquelle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="center">{row.category}</TableCell>
              <TableCell align="center">{row.availability}</TableCell>
              <TableCell align="center">{row.accessibility !== "/" ? row.accessibility : "—"}</TableCell>
              <TableCell align="center">{row.source}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SocialInfrastructureTable;

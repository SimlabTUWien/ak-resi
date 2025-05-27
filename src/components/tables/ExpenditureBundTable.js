import { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, ToggleButton, ToggleButtonGroup, Box } from "@mui/material";

const allData = [
  { Bundesland: "Burgenland", Lebensmittel: 246, Wohnen: 216, Gesundheit: 33, Mobilität: 91, Bildung: 55, Einkommen: 2592, Residualeinkommen: 1777 },
  { Bundesland: "Kärnten", Lebensmittel: 282, Wohnen: 251, Gesundheit: 57, Mobilität: 74, Bildung: 67, Einkommen: 2502, Residualeinkommen: 1613 },
  { Bundesland: <>Ober&shy;österreich</>, Lebensmittel: 282, Wohnen: 214, Gesundheit: 52, Mobilität: 84, Bildung: 50, Einkommen: 2823, Residualeinkommen: 2010 },
  { Bundesland: <>Nieder&shy;österreich</>, Lebensmittel: 275, Wohnen: 195, Gesundheit: 45, Mobilität: 75, Bildung: 47, Einkommen: 2712, Residualeinkommen: 1953 },
  { Bundesland: "Salzburg", Lebensmittel: 259, Wohnen: 246, Gesundheit: 46, Mobilität: 72, Bildung: 71, Einkommen: 2691, Residualeinkommen: 1824 },
  { Bundesland: "Steiermark", Lebensmittel: 259, Wohnen: 228, Gesundheit: 41, Mobilität: 74, Bildung: 59, Einkommen: 2564, Residualeinkommen: 1764 },
  { Bundesland: "Tirol", Lebensmittel: 273, Wohnen: 210, Gesundheit: 50, Mobilität: 72, Bildung: 43, Einkommen: 2557, Residualeinkommen: 1802 },
  { Bundesland: "Vorarlberg", Lebensmittel: 286, Wohnen: 188, Gesundheit: 45, Mobilität: 60, Bildung: 41, Einkommen: 2699, Residualeinkommen: 1893 },
  { Bundesland: "Wien", Lebensmittel: 252, Wohnen: 465, Gesundheit: 42, Mobilität: 54, Bildung: 76, Einkommen: 2533, Residualeinkommen: 1545 }
];

const rentersData = [
  { Bundesland: "Burgenland", Lebensmittel: 218, Wohnen: 435, Gesundheit: 26, Mobilität: 71, Bildung: 70, Einkommen: 2161, Residualeinkommen: 1189 },
  { Bundesland: "Kärnten", Lebensmittel: 248, Wohnen: 458, Gesundheit: 40, Mobilität: 61, Bildung: 81, Einkommen: 2109, Residualeinkommen: 1110 },
  { Bundesland: "Oberösterreich", Lebensmittel: 232, Wohnen: 500, Gesundheit: 30, Mobilität: 73, Bildung: 51, Einkommen: 2190, Residualeinkommen: 1267 },
  { Bundesland: "Niederösterreich", Lebensmittel: 226, Wohnen: 512, Gesundheit: 22, Mobilität: 76, Bildung: 63, Einkommen: 2347, Residualeinkommen: 1321 },
  { Bundesland: "Salzburg", Lebensmittel: 247, Wohnen: 548, Gesundheit: 21, Mobilität: 58, Bildung: 77, Einkommen: 2318, Residualeinkommen: 1283 },
  { Bundesland: "Steiermark", Lebensmittel: 209, Wohnen: 466, Gesundheit: 25, Mobilität: 57, Bildung: 64, Einkommen: 2038, Residualeinkommen: 1216 },
  { Bundesland: "Tirol", Lebensmittel: 250, Wohnen: 516, Gesundheit: 38, Mobilität: 64, Bildung: 58, Einkommen: 2264, Residualeinkommen: 1287 },
  { Bundesland: "Vorarlberg", Lebensmittel: 274, Wohnen: 565, Gesundheit: 33, Mobilität: 54, Bildung: 38, Einkommen: 2211, Residualeinkommen: 1089 },
  { Bundesland: "Wien", Lebensmittel: 246, Wohnen: 533, Gesundheit: 34, Mobilität: 47, Bildung: 72, Einkommen: 2358, Residualeinkommen: 1336 }
];


const ExpenditureBundTable = () => {
  const [tableMode, setTableMode] = useState("all");

  const handleToggleModeChange = (_, newValue) => {
    if (newValue !== null) {
      setTableMode(newValue);
    }
  };

  const tableData = tableMode === "all" ? allData : rentersData;

  return (
    <Box sx={{ marginTop: 3, marginBottom: 4 }}>

      <div className="toggle-container">
        <ToggleButtonGroup
          className="residual-income-toggle househole-table-toggle"
          value={tableMode}
          exclusive
          onChange={handleToggleModeChange}
          aria-label="household table mode selection"
        >
          <ToggleButton value="all">
            <label>Alle</label>
          </ToggleButton>
          <ToggleButton value="renter">
            <label>Mieter:Innen</label>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      {/* Table*/}
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table sx={{ width: "100%", backgroundColor: "#f4f4f4" }}>
          <TableHead sx={{ backgroundColor: "#f0ae9f", hyphens: "none" }}>
            <TableRow>
              <TableCell align="center">Bundesland</TableCell>
              <TableCell align="center">Lebensmittel</TableCell>
              <TableCell align="center">Wohnen</TableCell>
              <TableCell align="center">Gesundheit</TableCell>
              <TableCell align="center">Mobilität</TableCell>
              <TableCell align="center">Bildung</TableCell>
              <TableCell align="center">Einkommen</TableCell>
              <TableCell align="center">Residualeinkommen</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {tableData.map((row, index) => (
                 <TableRow key={index}>
                 <TableCell align="center">{row.Bundesland}</TableCell>
                 <TableCell align="center">{row.Lebensmittel} €</TableCell>
                 <TableCell align="center">{row.Wohnen} €</TableCell>
                 <TableCell align="center">{row.Gesundheit} €</TableCell>
                 <TableCell align="center">{row.Mobilität} €</TableCell>
                 <TableCell align="center">{row.Bildung} €</TableCell>
                 <TableCell align="center">{row.Einkommen} €</TableCell>
                 <TableCell align="center">{row.Residualeinkommen} €</TableCell>
               </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ExpenditureBundTable;
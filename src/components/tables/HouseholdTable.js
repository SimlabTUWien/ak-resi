import { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, ToggleButton, ToggleButtonGroup, Box } from "@mui/material";


const allData = [
  { type: "Alleinlebend", income: 2070, expenses: 814, disposable: 1313 },
  { type: "Ein Erwachsener mit einem Kind", income: 1712, expenses: 1096, disposable: 1066 },
  { type: "Ein Erwachsener mit mehr als einem Kind", income: 1359, expenses: 1307, disposable: 697 },
  { type: "Zwei Erwachsene", income: 2942, expenses: 1089, disposable: 2201 },
  { type: "Zwei Erwachsene mit einem Kind", income: 2804, expenses: 1237, disposable: 2080 },
  { type: "Zwei Erwachsene mit mehr als einem Kind", income: 2813, expenses: 1256, disposable: 2028 },
  { type: "Drei Erwachsene", income: 3505, expenses: 1252, disposable: 2813 },
  { type: "Drei Erwachsene mit einem Kind", income: 2784, expenses: 1380, disposable: 2258 },
  { type: "Drei Erwachsene mit mehr als einem Kind", income: 2715, expenses: 1387, disposable: 1990 },
];

const rentersData = [
  { type: "Alleinlebend", income: 1958, expenses: 944, disposable: 1047 },
  { type: "Ein Erwachsener mit einem Kind", income: 1425, expenses: 1184, disposable: 697 },
  { type: "Ein Erwachsener mit mehr als einem Kind", income: 1215, expenses: 1420, disposable: 513 },
  { type: "Zwei Erwachsene", income: 2824, expenses: 1336, disposable: 1839 },
  { type: "Zwei Erwachsene mit einem Kind", income: 2438, expenses: 1546, disposable: 1467 },
  { type: "Zwei Erwachsene mit mehr als einem Kind", income: 2264, expenses: 1674, disposable: 1325 },
  { type: "Drei Erwachsene", income: 3114, expenses: 1696, disposable: 2030 },
  { type: "Drei Erwachsene mit einem Kind", income: 2568, expenses: 1693, disposable: 1664 },
  { type: "Drei Erwachsene mit mehr als einem Kind", income: 2004, expenses: 1574, disposable: 1375 },
];

const HouseholdTable = ({ ariaLabel }) => {
  const [tableMode, setTableMode] = useState("all");

  const handleToggleModeChange = (_, newValue) => {
    if (newValue !== null) {
      setTableMode(newValue);
    }
  };

  const tableData = tableMode === "all" ? allData : rentersData;

  return (
    <Box sx={{ marginTop: 3, marginBottom: 1 }}>

      <div className="toggle-container">
        <ToggleButtonGroup
          className="residual-income-toggle househole-table-toggle"
          value={tableMode}
          exclusive
          onChange={handleToggleModeChange}
          aria-label="Householdtype table mode selection"
        >
          <ToggleButton value="all">
            <label>Alle</label>
          </ToggleButton>
          <ToggleButton value="renter">
            <label>Mieter:Innen</label>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      {/* Table with Animation */}
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        {/* <Table sx={{ width: "100%", backgroundColor: "#f4f4f4" }}> */}
        <Table className="responsive-table" sx={{ width: "100%", backgroundColor: "#f4f4f4" }} aria-label={ariaLabel}>
          <TableHead sx={{ backgroundColor: "#f0ae9f", hyphens: "none" }}>
            <TableRow>
              <TableCell align="center">Haushaltstyp</TableCell>
              <TableCell align="center">Einkommen</TableCell>
              <TableCell align="center">notwendige Ausgaben</TableCell>
              <TableCell align="center">Residual&shy;einkommen</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center" data-label="Haushaltstyp">{row.type}</TableCell>
                <TableCell align="center" data-label="Medianeinkommen">{row.income} €</TableCell>
                <TableCell align="center" data-label="Medianausgaben">{row.expenses} €</TableCell>
                <TableCell align="center" data-label="Medianresidualeinkommen">{row.disposable} €</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default HouseholdTable;
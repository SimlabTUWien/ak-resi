import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const HouseholdTable = () => {
  return (
    <TableContainer 
        component={Paper} 
        sx={{
            overflowX: "auto",
            minWidth: 320,
            maxWidth: "100%", // Ensure it adapts within parent
        }}
      >
       <Table sx={{ width: "100%", minWidth: 320 }}>
        <TableHead sx={{ backgroundColor: "#d2d5cb" }}>
          <TableRow>
          <TableCell align="center" sx={{ fontWeight: "bold" }}>Haushaltstyp</TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>Mittleres Einkommen</TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>Notwendige Ausgaben</TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>Verfügbares Einkommen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[
            { type: "1-Personen", income: 1706, expenses: 1452, disposable: 254 },
            { type: "2-Personen", income: 3056, expenses: 2533, disposable: 523 },
            { type: "3-Personen", income: 3664, expenses: 3321, disposable: 343 },
            { type: "4-Personen", income: 4122, expenses: 3943, disposable: 179 },
          ].map((row, index) => (
            <TableRow key={index}>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.income} €</TableCell>
              <TableCell align="center">{row.expenses} €</TableCell>
              <TableCell align="center">{row.disposable} €</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HouseholdTable;

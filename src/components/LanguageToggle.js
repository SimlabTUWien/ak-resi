import React from "react";
import { Box, Typography } from "@mui/material";

const LanguageToggle = ({ currentLanguage, onChangeLanguage }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        // backgroundColor: "#566060",
        padding: "5px 10px",
        cursor: "pointer",
      }}
    >
      {/* DE Language */}
      <Typography
        component="span" 
        sx={{
          color: currentLanguage === "DE" ? "#fff" : "#d6d6d6",
          fontWeight: currentLanguage === "DE" ? "bold" : "normal",
          mr: 2,
          cursor: "pointer",
          position: "relative",
          transition: "all 0.3s ease-in-out",
          userSelect: "none",
          WebkitTapHighlightColor: "transparent"
        }}
        onClick={() => onChangeLanguage("DE")}
      >
        DE
        {currentLanguage === "DE" && (
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "2px",
              backgroundColor: "#fff",
              bottom: "-2px",
              left: 0,
            }}
          />
        )}
      </Typography>

      {/* EN Language */}
      <Typography
        component="span" 
        sx={{
          color: currentLanguage === "EN" ? "#fff" : "#d6d6d6",
          fontWeight: currentLanguage === "EN" ? "bold" : "normal",
          cursor: "pointer",
          position: "relative",
          transition: "all 0.3s ease-in-out",
          userSelect: "none",
          WebkitTapHighlightColor: "transparent"
        }}
        onClick={() => onChangeLanguage("EN")}
      >
        EN
        {currentLanguage === "EN" && (
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "2px",
              backgroundColor: "#fff",
              bottom: "-2px",
              left: 0,
            }}
          />
        )}
      </Typography>
    </Box>
  );
};

export default LanguageToggle;

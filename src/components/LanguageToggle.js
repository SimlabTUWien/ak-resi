import { Box, Typography } from "@mui/material";
import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {

  const { language, setLanguage } = useLanguage();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        // backgroundColor: "#566060",
        padding: "5px 10px",
        cursor: "pointer",
        WebkitTapHighlightColor: "transparent", // Removes blue highlight on mobile
        outline: "none", // Removes focus outline
        "&:focus, &:active": {
        backgroundColor: "transparent", // Prevents background color change on click
        }
      }}
    >
      {/* DE Language */}
      <Typography
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setLanguage("DE");
          }
        }}
        component="span"
        aria-label="German" 
        sx={{
          color: language === "DE" ? "#fff" : "#d6d6d6",
          fontWeight: language === "DE" ? "bold" : "normal",
          mr: 2,
          cursor: "pointer",
          position: "relative",
          transition: "all 0.3s ease-in-out",
          userSelect: "none",
          WebkitTapHighlightColor: "transparent"
        }}
        onClick={() => setLanguage("DE")}
      >
        DE
        {language  === "DE" && (
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
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setLanguage("EN");
          }
        }}
        component="span"
        aria-label="English" 
        sx={{
          color: language === "EN" ? "#fff" : "#d6d6d6",
          fontWeight: language === "EN" ? "bold" : "normal",
          cursor: "pointer",
          position: "relative",
          transition: "all 0.3s ease-in-out",
          userSelect: "none",
          WebkitTapHighlightColor: "transparent"
        }}
        onClick={() => setLanguage("EN")}
      >
        EN
        {language === "EN" && (
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

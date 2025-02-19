// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import HomePage from "./pages/HomePage";
import Glossar from "./pages/Glossar";
import Impressum from "./pages/Impressum";
import Team from "./pages/Team";
import Dataprivacy from "./pages/Dataprivacy";
import HeaderAppBar from "./components/HeaderAppBar";

import './styles/App.css';
import theme from "./styles/theme.js";


function App() {
  return (
    // <Router basename="/ak-resi">
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent MUI styling */}
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const [showAppBar, setShowAppBar] = useState(location.pathname !== "/");

  useEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowAppBar(window.scrollY > 50);

      const handleScroll = () => {
        setShowAppBar(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setShowAppBar(true);
    }
  }, [location.pathname]);

  return (
    <>
      <HeaderAppBar show={showAppBar} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/glossar" element={<Glossar />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/team" element={<Team />} />
        <Route path="/dataprivacy" element={<Dataprivacy />} />
      </Routes>
    </>
  );
}

export default App;
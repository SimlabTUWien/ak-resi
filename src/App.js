// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import CssBaseline from "@mui/material/CssBaseline";
import './styles/App.css';
import theme from "./styles/theme.js";

// import { LanguageProvider } from "./context/LanguageContext.js";
import HeaderAppBar from "./components/HeaderAppBar";
const HomePage = lazy(() => import("./pages/HomePage"));
const Glossar = lazy(() => import("./pages/Glossar"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Team = lazy(() => import("./pages/Team"));
const Dataprivacy = lazy(() => import("./pages/Dataprivacy"));


function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Ensures consistent MUI styling */}
      <CssBaseline />
        {/* Uncomment the LanguageProvider if you want to use language context */}
        {/* <LanguageProvider>  */}
          <Router>
            <AppContent />
          </Router>
        {/* </LanguageProvider> */}
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

  // useEffect(() => {
  //   window.history.scrollRestoration = "manual";
  // }, []);
  

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
      <Suspense fallback={
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}>
            <CircularProgress size={120} style={{ color: "#f0ae9f" }} />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/glossar" element={<Glossar />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/team" element={<Team />} />
          <Route path="/dataprivacy" element={<Dataprivacy />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
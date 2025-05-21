import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "../../styles/HeaderSection.css";

export default function HeaderSection() {

  const { language } = useLanguage();

  const translations = {
    DE: {
        title: "Perspektiven auf Ungleichheit in Österreich",
        subTitle: "Residualeinkommen, soziale Infrastruktur und Zeitverwendung",
    },
    EN: {
        title: "Perspectives on Inequality in Austria",
        subTitle: "Residual Income, Social Infrastructure and Time Usage",
    }
  };

  const t = translations[language];
  
  const [hideIndicator, setHideIndicator] = useState(false);

  useEffect(() => {
    const updateVH = () => {
      // Get the innerHeight and set it as --vh
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    updateVH(); // Call once on mount
    // window.addEventListener("resize", updateVH); // Update on resize

    return () => window.removeEventListener("resize", updateVH);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHideIndicator(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <Box  sx={{ height: "calc(var(--vh, 1vh) * 100)" }}>
    <Box sx={{ height: "calc(var(--vh) * 100)" }}>
      <section className="header-section">
        <div className="background-layer"></div>
        

        <motion.div
          className="header-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
           

          <div className="titles-container">
            <h1 className="header-acronym">Re:sI:Ze</h1>

            <h2 className="header-title"> {t.subTitle} </h2>
            
            {/* <h2 className="header-title"> {t.title} </h2> */}
            {/* <h3 className="header-subtitle"> {t.subTitle} </h3> */}
          </div>

         <div className="header-image-wrapper">
            <img src={`${process.env.PUBLIC_URL}/images/spherical_houses.png`} alt="" className="header-image" />
          </div>

          <motion.div
            className="scroll-indicator"
            animate={{ opacity: hideIndicator ? 0 : 1, y: hideIndicator ? -20 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <ExpandMoreIcon style={{ fontSize: "75px" }} />
          </motion.div>
        </motion.div>
      </section>
    </Box>
    
  );
}
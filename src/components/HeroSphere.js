import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "../styles/HeroSphere.css";

export default function HeroSphere() {
  
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
      <section className="hero-section-sphere">
        <div className="background-layer"></div>
        <div className="hero-image-wrapper-sphere">
          <img src={`${process.env.PUBLIC_URL}/images/spherical_houses2.png`} alt="" className="hero-image-sphere" />
        </div>

        <motion.div
          className="hero-content-sphere"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          {/* <div className="titles-container">
            <img src={`${process.env.PUBLIC_URL}/images/Logo_project_small.png`} alt="Logo" className="logo" />

            <h1 className="hero-title">Re:sI:Ze</h1>
            <p className="hero-subtitle">Perspektiven auf Ungleichheit in Österreich</p>
            
          </div> */}

          <motion.div
            className="scroll-indicator-sphere"
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
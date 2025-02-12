import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "../styles/HeroSection.css";

export default function HeroSection() {
  
  const [hideIndicator, setHideIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideIndicator(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-image-wrapper">
        {/* <img src="/hero_image.webp" alt="Perspectives on Inequality" className="hero-image" /> */}
        <img src="/hero_image.png" alt="Perspectives on Inequality" className="hero-image" />
        <div className="overlay"></div>
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="titles-container">
          {/* <img src="/Logo_minimal.svg" alt="Logo" className="logo" /> */}
          <img src="/Logo_project_small.png" alt="Logo" className="logo" />

          <h1 className="hero-title">Re:sI:Ze</h1>
          <p className="hero-subtitle">Perspektiven auf Ungleichheit in Österreich</p>
          
          {/* <h1 className="hero-title">Perspektiven auf Ungleichheit in Österreich</h1>
          <p className="hero-subtitle">Verfügbares Einkommen, soziale Infrastruktur und Zeitverwendung</p> */}
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
  );
  
  // return (
  //   <section className="hero-section">
  //     <div className="hero-image-wrapper">
  //       <img
  //         src="/hero_image.webp"
  //         alt="Perspectives on Inequality"
  //         className="hero-image"
  //       />
  //       <div className="overlay"></div>
  //     </div>
  //     <motion.div 
  //       className="hero-content"
  //       initial={{ opacity: 0, y: 50 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       transition={{ duration: 1 }}
  //     >
  //       <div className="titles-container">
  //         <h1 className="hero-title">
  //           {/* Perspectives on Inequality in Austria */}
  //           Re:sIZE
  //         </h1>
  //         <p className="hero-subtitle">
  //           {/* Disposable income, social infrastructure, and time use. */}
  //           Perspektiven auf Ungleichheit in Österreich
  //         </p>
  //       </div>
        
  //       <div className="scroll-indicator">
  //         {/* <span>Scroll to explore</span> */}
  //         {/* <p style={{ marginBottom: "0"}}>Scrolle um mehr zu erfahren</p> */}
  //         <ExpandMoreIcon style={{ fontSize: "75px"}}/>
  //       </div>
  //     </motion.div>
  //   </section>
  // );
}
import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { motion } from "framer-motion";

const FloatingButton = ({ show }) => {
  const [isVisible, setIsVisible] = useState(window.innerWidth > 1300);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 1300);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToIntro = () => {
    const section = document.getElementById("intro");
    if (section) {
        const yOffset = -40;
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.button className="floating-button" onClick={scrollToIntro}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
      transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth transition
      disabled={!show}
    >
      <ArrowUpwardIcon/>
    </motion.button>
  );
};

export default FloatingButton;

import { useState, useEffect } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { motion } from "framer-motion";

const sectionColors = {
  intro: '#bdbdbd',
  income: '#bdbdbd',
  residualIncome: '#f0ae9f',
  'social-infrastructure': '#a5cdc8',
  'time-usage': '#fcd799',
  'what-now': '#bdbdbd',
};

const FloatingButton = ({ show }) => {
  const [isVisible, setIsVisible] = useState(window.innerWidth > 1300);
  const [buttonColor, setButtonColor] = useState('#b3b3b3');

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 1300);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

   useEffect(() => {
    const handleScroll = () => {
      let currentColor = '#bdbdbd';
      Object.keys(sectionColors).forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 50 && rect.bottom >= 50) {
            currentColor = sectionColors[id];
          }
        }
      });
      setButtonColor(currentColor);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <motion.button 
      className="floating-button" 
      onClick={scrollToIntro}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      disabled={!show}
      style={{
        borderColor: buttonColor,
        color: buttonColor,
      }}
    >
      <ArrowUpwardIcon/>
    </motion.button>
  );
};

export default FloatingButton;

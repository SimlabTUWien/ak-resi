import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FloatingButton = () => {
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
    <button className="floating-button"
        onClick={scrollToIntro}
    >
      <ArrowUpwardIcon/>
    </button>
  );
};

export default FloatingButton;

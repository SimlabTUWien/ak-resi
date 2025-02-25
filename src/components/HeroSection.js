import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "../styles/HeroSection.css";

export default function HeroSection() {
  
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
      <section className="hero-section">
        <div className="hero-image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/images/hero_image.png`} alt="" className="hero-image" />
          <div className="overlay"></div>
        </div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="titles-container">
            <img src={`${process.env.PUBLIC_URL}/images/Logo_project_small.png`} alt="Logo" className="logo" />

            <h1 className="hero-title">Re:sI:Ze</h1>
            <p className="hero-subtitle">Perspektiven auf Ungleichheit in Österreich</p>
            
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







// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Box } from "@mui/material";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import "../styles/HeroSection.css";

// export default function HeroSection() {
  
//   const [hideIndicator, setHideIndicator] = useState(false);

//   useEffect(() => {
//     const updateVH = () => {
//       let vh = window.innerHeight * 0.01;
//       document.documentElement.style.setProperty("--vh", `${vh}px`);
//     };

//     updateVH();
//     return () => window.removeEventListener("resize", updateVH);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setHideIndicator(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Animation settings for expanding circles
  // const circleVariants = {
  //   animate: {
  //     scale: [1, 5], // Start at normal size, grow 4x
  //     opacity: [0.5, 0], // Fade out as they grow
  //     transition: {
  //       duration: 4,
  //       repeat: Infinity,
  //       ease: "easeOut",
  //       delay: 0.3
  //     }
  //   }
  // };

//   return (
//     <Box sx={{ height: "calc(var(--vh) * 100)" }}>
//       <section className="hero-section">
//         <div className="hero-image-wrapper">
//           <div className="overlay"></div>
//         </div>

//         <div className="hero-content">
//           <div className="titles-container">
//             <img src={`${process.env.PUBLIC_URL}/images/Logo_project_small.png`} alt="Logo" className="logo" />
//             <h1 className="hero-title">Re:sI:Ze</h1>
//             {/* <p className="hero-subtitle">Perspektiven auf Ungleichheit in Österreich</p> */}
//           </div>

//           {/* Animated Circles */}
          // <div className="circle-animation">
          //   <motion.div className="circle top-left" variants={circleVariants} animate="animate" />
          //   <motion.div className="circle top-right" variants={circleVariants} animate="animate" />
          //   <motion.div className="circle bottom-left" variants={circleVariants} animate="animate" />
          //   <motion.div className="circle bottom-right" variants={circleVariants} animate="animate" />
          // </div>

//           <motion.div
//             className="scroll-indicator"
//             animate={{ opacity: hideIndicator ? 0 : 1, y: hideIndicator ? -20 : 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <ExpandMoreIcon style={{ fontSize: "75px" }} />
//           </motion.div>
//         </div>
//       </section>
//     </Box>
//   );
// }

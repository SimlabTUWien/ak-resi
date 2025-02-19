import React, { useState, useEffect } from 'react';

const sectionColors = {
  intro: '#b3b3b3',
  income: '#f0ae9f',
  'social-infrastructure': '#a5cdc8',
  'time-usage': '#fcd799',
  'what-now': '#566060',
};

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [barColor, setBarColor] = useState('#b3b3b3'); // Default color

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);

    // Detect which section is currently at the top
    let currentColor = '#b3b3b3'; // Default fallback
    Object.keys(sectionColors).forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) { // Section at the top
          currentColor = sectionColors[id];
        }
      }
    });

    setBarColor(currentColor);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div
        style={{
          height: '5px',
          background: barColor,
          width: `${scrollProgress}%`,
          transition: 'width 0.2s, background 0.3s ease-in-out',
        }}
      />
    </div>
  );
}

export default ScrollProgressBar;

// function ScrollProgressBar() {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   const handleScroll = () => {
//     const scrollTop = window.scrollY; // How far the user has scrolled
//     const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
//     const progress = (scrollTop / docHeight) * 100; // Percentage scrolled
//     setScrollProgress(progress);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div>
//       <div
//         style={{
//           height: '5px',
//           background: '#F0A898',
//           width: `${scrollProgress}%`,
//           transition: 'width 0.2s',
//         }}
//       />
//     </div>
//   );
// }

// export default ScrollProgressBar;

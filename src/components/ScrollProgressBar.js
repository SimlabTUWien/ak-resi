import React, { useState, useEffect } from 'react';

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY; // How far the user has scrolled
    const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    const progress = (scrollTop / docHeight) * 100; // Percentage scrolled
    setScrollProgress(progress);
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
          background: '#F0A898',
          width: `${scrollProgress}%`,
          transition: 'width 0.2s',
        }}
      />
    </div>
  );
}

export default ScrollProgressBar;

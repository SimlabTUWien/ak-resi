import { useState, useEffect } from 'react';

const sectionColors = {
  intro: '#bdbdbd',
  income: '#bdbdbd',
  residualIncome: '#f0ae9f',
  'social-infrastructure': '#a5cdc8',
  'time-usage': '#fcd799',
  'what-now': '#bdbdbd',
};

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [barColor, setBarColor] = useState('#bdbdbd');

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);

    // Detect which section is currently at the top
    let currentColor = '#bdbdbd';
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

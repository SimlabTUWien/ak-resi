import React, { useState, useEffect, useRef } from "react";

const CounterAnimation = ({ targetValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observer = useRef(null);
  const started = useRef(false);

  const getColor = (value) => {
    switch (value) {
      case 32:
        // return "#a4a4a4";
        // return "#d1d1d1";
        return "#9c9c9c";
      case 39:
        return "#F0A898";
      default:
        return "black"; // Default color
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const stepTime = Math.abs(Math.floor(duration / targetValue));
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= targetValue) clearInterval(timer);
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );
    
    const element = ref.current;

    if (element) observer.current.observe(element);

    return () => {
      if (element) observer.current.unobserve(element);
    };
  }, [targetValue, duration]);

  return (
    <span ref={ref} style={{ fontSize: "5rem", fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 500', color: getColor(targetValue) }}>
      {count}
    </span>
  );
};

export default CounterAnimation;



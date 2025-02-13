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
        return "#d1d1d1";
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

    if (ref.current) observer.current.observe(ref.current);

    return () => {
      if (ref.current) observer.current.unobserve(ref.current);
    };
  }, [targetValue, duration]);

  return (
    <span ref={ref} style={{ fontSize: "5rem", fontWeight: "bold", color: getColor(targetValue) }}>
      {count}
    </span>
  );
};

export default CounterAnimation;



import React, { useState, useEffect, useRef } from "react";

const CounterAnimation = ({ targetValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observer = useRef(null);
  const started = useRef(false);

  const [fontSize, setFontSize] = useState(window.innerWidth < 450 ? "4.5rem" : "5rem");

  const getColor = (value) => {
    switch (value) {
      case 0.27:
        // return "#a4a4a4";
        // return "#d1d1d1";
        return "#9c9c9c";
      case 0.38:
        return "#F0A898";
      default:
        return "black";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 450 ? "4.5rem" : "5rem");
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   observer.current = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting && !started.current) {
  //         started.current = true;
  //         let start = 0;
  //         const stepTime = Math.abs(Math.floor(duration / targetValue));
  //         const timer = setInterval(() => {
  //           start += 1;
  //           setCount(start);
  //           if (start >= targetValue) clearInterval(timer);
  //         }, stepTime);
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );
    
  //   const element = ref.current;

  //   if (element) observer.current.observe(element);

  //   return () => {
  //     if (element) observer.current.unobserve(element);
  //   };
  // }, [targetValue, duration]);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const stepSize = targetValue / (duration / 30);
          
          const timer = setInterval(() => {
            start += stepSize;
            if (start >= targetValue) {
              start = targetValue;
              clearInterval(timer);
            }
            setCount(start);
          }, 30);
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
    // <span ref={ref} style={{ fontSize, fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 500', color: getColor(targetValue) }}>
    <span ref={ref} style={{ fontSize, fontWeight: 500 , color: getColor(targetValue) }}>

      {/* {count} */}
      {/* {count.toFixed(2)} */}
      {count.toFixed(2).replace('.', ',')}
    </span>
  );
};

export default CounterAnimation;



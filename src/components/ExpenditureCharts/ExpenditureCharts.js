import React, { useState, useEffect, useRef } from "react";
import QuantilChart from "./QuantilChart";
import DecilChart from "./DecilChart";
// import DecilChart from "./DecilChart";

const ExpenditureCharts = ({ mode }) => {
  const containerRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateParentWidth = () => {
      if (containerRef.current) {
        setParentWidth(containerRef.current.clientWidth);
      }
    };

    updateParentWidth();
    window.addEventListener("resize", updateParentWidth);

    return () => window.removeEventListener("resize", updateParentWidth);
  }, []);

  return (
    <div className="expenditure-charts" ref={containerRef}>
      {mode === "quantils" ? (
        <>
          <QuantilChart index={1} parentWidth={parentWidth} />
          <QuantilChart index={2} parentWidth={parentWidth} />
        </>
      ) : (
        <>
          <DecilChart index={1} parentWidth={parentWidth} />
          <DecilChart index={2} parentWidth={parentWidth} />
        </>
      )}
    </div>
  );
};

export default ExpenditureCharts;

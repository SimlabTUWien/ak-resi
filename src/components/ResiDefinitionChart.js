import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const svgUrl = `${process.env.PUBLIC_URL}/images/Abb2_ResiDefinition_DE.svg`;


const ResiDefinitionChart = () => {
  const svgRef = useRef(null);


  useEffect(() => {
      d3.xml(svgUrl).then((data) => {
        if (svgRef.current) {
          svgRef.current.innerHTML = "";
          svgRef.current.appendChild(data.documentElement);
    
          const svg = d3.select(svgRef.current).select("svg");
    
          svg.attr("width", "100%").attr("height", "auto");
          svg.style("display", "block").style("margin", "auto");

        }
    });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div ref={svgRef} style={{ maxWidth: "100%", overflow: "hidden" }}></div>
    </div>
  );
};

export default ResiDefinitionChart;
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

// const svgUrl = `${process.env.PUBLIC_URL}/images/Abb2_ResiDefinition_DE_v3.svg`;
const svgUrl = `${process.env.PUBLIC_URL}/images/Abb2_ResiDefinition_DE_V4.svg`;

const ResiDefinitionChart = () => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    d3.xml(svgUrl).then((data) => {
      if (svgRef.current) {
        svgRef.current.innerHTML = "";
        svgRef.current.appendChild(data.documentElement);

        const svg = d3.select(svgRef.current).select("svg");
        svg.attr("width", "100%").attr("height", "100%");
        svg.style("display", "block").style("margin", "auto");

        // Initially hide all sub elements
        svg.selectAll(".income-info, .expenditure-info").style("opacity", 0);
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!svgRef.current) return;

      const elements = d3.select(svgRef.current).selectAll(".income-info, .expenditure-info");

      elements.each(function () {
        const el = this.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const lowerBound = windowHeight * 0.4;
        const upperBound = windowHeight * 0.8;
        
        if (el.top >= lowerBound && el.bottom <= upperBound) {
          d3.selectAll(".income-info, .expenditure-info")
          // d3.select(this)
            .transition()
            .duration(800)
            .style("opacity", 1);
        }
        // } else {
        //   d3.select(this)
        //     .transition()
        //     .duration(800)
        //     .style("opacity", 0);
        // }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <div ref={containerRef} className="definition-chart">
        <div ref={svgRef} style={{ maxWidth: "100%", overflow: "hidden" }}></div>
      </div>
    </div>
  );
};

export default ResiDefinitionChart;

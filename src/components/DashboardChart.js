import { useEffect, useRef } from "react";
import * as d3 from "d3";

const svgUrl = `${process.env.PUBLIC_URL}/images/3kreise_gross.svg`;

const contentMap = {
    "residual": {
        title: "Residualeinkommen",
        color: "#f0ae9f"
    },
    "soz-infra": {
        title: "Soziale Infrastrukturen",
        color: "#a5cdc8"
    },
    "zeit": {
        title: "Zeitverwendung",
        color: "#fcd799"
    },
};

const DashboardChart = ({ altText, onSelect }) => {

    const svgRef = useRef(null);

    useEffect(() => {
        d3.xml(svgUrl).then((data) => {
          if (svgRef.current) {
            svgRef.current.innerHTML = "";
            svgRef.current.appendChild(data.documentElement);
      
            const svg = d3.select(svgRef.current).select("svg");
    
            svg.attr("width", "100%").attr("height", "100%").attr("alt", altText);
            svg.style("display", "block").style("margin", "auto");
    
            svg.selectAll("g")
                .filter(function () {
                const id = d3.select(this).attr("id");
                return Object.keys(contentMap).includes(id);
                })
                .style("cursor", "pointer")
                .on("mouseover", function () {
                    d3.select(this).selectAll("*").each(function () {
                    const currentColor = d3.select(this).style("fill");
                    const darker = d3.color(currentColor)?.darker(0.25); // Darken
                    d3.select(this).attr("data-original-fill", currentColor); // Save original
                    d3.select(this).style("fill", darker);
                    });
                })
                .on("mouseout", function () {
                    d3.select(this).selectAll("*").each(function () {
                    const original = d3.select(this).attr("data-original-fill");
                    if (original) d3.select(this).style("fill", original);
                    });
                })
                .on("click", function () {
                    const id = d3.select(this).attr("id");
                    if (onSelect && id) {
                    onSelect(id); // update dashboard view
                    }
                });
          }
        });
      }, [altText, svgUrl]);
      
    
      return (
        <div ref={svgRef} style={{ maxWidth: "100%", overflow: "hidden" }} />
      );
};

export default DashboardChart;
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const LivabilityChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Clear previous chart content
    d3.select(chartRef.current).selectAll("*").remove();

    // Dimensions
    const width = 800;
    const height = 600;

    // Center position
    const centerX = width / 2;
    const centerY = height / 2;

    const greyCircleRadius = 210;

    // Distance between circles
    const offset = 60; 

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);


    // Tooltip div
    const tooltip = d3
    .select(chartRef.current)
    .append("div")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background", "#f8f8f8")
    .style("padding", "8px")
    .style("border", "1px solid #ccc")
    .style("border-radius", "4px")
    .style("font-size", "14px")
    .style("pointer-events", "none") // Prevents interfering with mouse events
    .attr("class", "tooltip"); 

    // Background circle
    svg.append("circle")
    .attr("cx", centerX) // Centered horizontally
    .attr("cy", centerY - offset/2) // Centered vertically
    .attr("r", greyCircleRadius) // radius
    .attr("fill", "#D3E0E6") // Light grey color
    .attr("opacity", 1);

    // Circle data
    const circles = [
      { name: "SI accessibility", cx: centerX - offset, cy: centerY - offset, r: 90, className: "circle-social", index: 2 },
      { name: "Income", cx: centerX + offset, cy: centerY - offset, r: 90, className: "circle-income", index: 1 },
      { name: "Consumption", cx: centerX, cy: centerY + offset, r: 90, className: "circle-consumption", index: 0 },
    ];

    // Draw circles and labels within a group
    const groups = svg
    .selectAll("g.circle-group")
    .data(circles)
    .enter()
    .append("g")
    .attr("class", "circle-group");
    
    // Add circles
    groups
    .append("circle")
    .attr("class", "main")
    .attr("cx", (d) => d.cx)
    .attr("cy", (d) => d.cy)
    .attr("r", (d) => d.r)
    .attr("fill", "#98CAC3")
    .attr("stroke", "#333")
    .attr("stroke-width", 1)
    .attr("opacity", 0.98)
    .on("mouseover", function (event, d) {
      // Raise the group to bring circle and text to the front
      d3.select(this.parentNode).raise();

      // Change circle color
      d3.select(this).transition().duration(200).attr("fill", "#FBD394");

       // Show tooltip
       tooltip
       .style("visibility", "visible")
       .html(`<strong>${d.name}</strong>`); // Tooltip content
    })
    .on("mousemove", function (event) {
      // Move tooltip with the mouse
      tooltip
        .style("top", `${event.pageY + 10}px`)
        .style("left", `${event.pageX + 10}px`);
    })
    .on("mouseout", function () {
      // Restore original color
      d3.select(this).transition().duration(200).attr("fill", "#98CAC3");

      // Hide tooltip
      tooltip.style("visibility", "hidden");
    });

    // Add text labels
    groups.each(function (d) {
    const group = d3.select(this);
    if (d.name === "SI accessibility") {
      // Split text into multiple lines
      const words = d.name.split(" ");
      words.forEach((word, i) => {
        group.append("text")
          .attr("x", d.cx - 25)
          .attr("y", d.cy - 8 + i * 20)
          .attr("text-anchor", "middle")
          .attr("fill", "#333")
          .style("font-size", "18px")
          .text(word);
      });
    } else if (d.name === "Income") {
      group.append("text")
        .attr("x", d.cx + 25)
        .attr("y", d.cy)
        .attr("text-anchor", "middle")
        .attr("fill", "#333")
        .style("font-size", "18px")
        .text(d.name);
    } else if (d.name === "Consumption") {
      group.append("text")
        .attr("x", d.cx)
        .attr("y", d.cy + 15)
        .attr("text-anchor", "middle")
        .attr("fill", "#333")
        .style("font-size", "18px")
        .text(d.name);
    }
    });

    // Labels with arrows
    const labels = [
      { text: "Household composition", x: centerX - 240, y: centerY - 200, arrowToX: centerX - 150, arrowToY: centerY - 80 },
      { text: "Space", x: centerX + 240, y: centerY - 200, arrowToX: centerX + 150, arrowToY: centerY - 80 },
      { text: "Socioeconomic factors", x: centerX - 240, y: centerY + 150, arrowToX: centerX - 90, arrowToY: centerY - 40},
      // { text: "Residual income", x: centerX + 300, y: centerY + 100, arrowToX: centerX + 90, arrowToY: centerY + 50 },
    ];

    const arrowOffset = 150;

    // Draw arrows and labels
    labels.forEach((label) => {

      const yOffset = label.text === "Socioeconomic factors" ? -20 : 10;

      // Calculate the direction of the arrow vector
      const dx = label.arrowToX - label.x;
      const dy = label.arrowToY - label.y;

      // Calculate the total length of the line
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Adjust the ending point of the arrow to stop before the grey circle
      const newX2 = label.x + (dx * (greyCircleRadius - arrowOffset)) / distance;
      const newY2 = label.y + (dy * (greyCircleRadius - arrowOffset)) / distance;
      

      // Line (arrow)
      svg.append("line")
        .attr("x1", label.x)
        .attr("y1", label.y + yOffset)
        .attr("x2", newX2)
        .attr("y2", newY2)
        .attr("stroke", "#98CAC3")
        .attr("stroke-width", 2)
        .attr("marker-end", "url(#arrowhead)");

      // Label text
      svg.append("text")
        .attr("x", label.x)
        .attr("y", label.y)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("fill", "#333")
        .text(label.text);
    });

        //   // Add multi-line label text
        //   const words = label.text.split(" "); // Split text into words
        //   words.forEach((word, i) => {
        //     svg.append("text")
        //       .attr("x", label.x)
        //       .attr("y", (label.y -10) + i * 18) // Offset each line
        //       .attr("text-anchor", "middle")
        //       .style("font-size", "16px")
        //       .style("fill", "#333")
        //       .text(word);
        //   });
        // });


     // Add a straight line
    //  svg.append("line")
    //    .attr("x1", 550)
    //    .attr("y1", 275)
    //    .attr("x2", 483)
    //    .attr("y2", 410)
    //    .attr("stroke", "red")
    //    .attr("stroke-width", 2);
  
    // // Add a curved bracket
    // svg.append("path")
    // .attr("d", `M 550,275 
    //             C 540,350 540,350 500,410 
    //             L 483,410`)
    // .attr("fill", "none")
    // .attr("stroke", "red")
    // .attr("stroke-width", 2);



    // Define arrowhead marker
    svg.append("defs")
      .append("marker")
      .attr("id", "arrowhead")
      .attr("markerWidth", 6) // 8
      .attr("markerHeight", 5) // 7
      .attr("refX", 6) // 9
      .attr("refY", 2.5) // 3.5
      .attr("orient", "auto")
      .append("polygon")
      .attr("points", "0 0, 6 2.5, 0 5")
      // .attr("points", "0 0, 10 3.5, 0 7")
      .attr("fill", "#98CAC3");



    // Legend
    const legendData = [
      { label: "Dimensions", color: "#98CAC3", type: "circle" },
      { label: "Influencing factors", color: "#98CAC3", type: "arrow" },
    ];

    const legend = svg.append("g").attr("transform", `translate(${width - 200}, ${height - 150})`);

    legendData.forEach((item, index) => {
      const legendRow = legend.append("g").attr("transform", `translate(0, ${index * 30})`);

      if (item.type === "circle") {
        // Color indicator for circles
        legendRow.append("circle")
          .attr("r", 10)
          .attr("fill", item.color)
          .attr("stroke", "#333")
          .attr("cx", 10);
      } else if (item.type === "arrow") {
        // Arrow indicator for "Influencing factors"
        legendRow.append("line")
          .attr("x1", -5)
          .attr("y1", 1)
          .attr("x2", 20)
          .attr("y2", 1)
          .attr("stroke", item.color)
          .attr("stroke-width", 2)
          .attr("marker-end", "url(#arrowhead)");
      }
    

      // Label
      legendRow
        .append("text")
        .attr("x", 30)
        .attr("y", 5)
        .attr("fill", "#333")
        .style("font-size", "14px")
        .text(item.label);
    });



    // Title
    svg
      .append("text")
      .attr("x", centerX)
      .attr("y", centerY - 180)
      .attr("text-anchor", "middle")
      .style("font-size", "24px")
      .style("fill", "#333")
      .text("Livability");
  }, []);

  return <div ref={chartRef}></div>;
};

export default LivabilityChart;

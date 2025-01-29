import React, { useState, useEffect, useRef } from "react";
import ReactECharts from "echarts-for-react";

const QuantilChart = () => {
  const chartContainerRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const updateWidth = () => {
      if (chartContainerRef.current) {
        setChartWidth(chartContainerRef.current.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const option = {
    grid: chartWidth < 360 
    ? { left: "15%", right: "2%" }
    : chartWidth < 430 
      ? { left: "12%", right: "2%" }
      : chartWidth < 600
        ? { left: "10%", right: "4%" }
        : { left: "10%", right: "10%" },
    title: {
      text: chartWidth < 450 
      ? "Mean monthly nethousehold \nincome in EUR"  // Add line break for small screens
      : "Mean monthly net household income in EUR",
      top: 0,
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      confine: true,
      axisPointer: { type: "shadow" },
    },
    xAxis: {
      type: "category",
      data: ["Q1", "Q2", "Q3", "Q4", "Q5"],
      name: "Income quantile",
      nameLocation: "middle",
      nameGap: 30,
      nameTextStyle: { fontSize: 18},
      axisLabel: { fontSize: 14 },
    },
    yAxis: {
      type: "value",
      axisLabel: { fontSize: 14 },
    },
    series: [
      { name: "Residual Income", type: "bar", stack: "total", data: [200, 900, 1500, 2100, 3800], itemStyle: { color: "#76c7c0" } },
      { name: "Mobility", type: "bar", stack: "total", data: [150, 200, 250, 250, 300], itemStyle: { color: "#7f8c8d" } },
      { name: "Education", type: "bar", stack: "total", data: [150, 200, 250, 250, 300], itemStyle: { color: "#d8a6a1" } },
      { name: "Food", type: "bar", stack: "total", data: [300, 400, 400, 450, 500], itemStyle: { color: "#e74c3c" } },
      { name: "Health", type: "bar", stack: "total", data: [200, 250, 300, 350, 350], itemStyle: { color: "#c0392b" } },
      { name: "Housing", type: "bar", stack: "total", data: [400, 450, 500, 600, 600], itemStyle: { color: "#b22222" } },
    ],
  };

  return (
    <div ref={chartContainerRef} style={{ width: "100%", maxWidth: "600px", height: "400px", justifyContent: "center", margin: "auto" }}>
      <ReactECharts option={option} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default QuantilChart;
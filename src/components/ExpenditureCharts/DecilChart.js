import React, { useState, useEffect, useRef } from "react";
import ReactECharts from "echarts-for-react";

const DecilChart = ({ index, parentWidth }) => {
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

  const maxWidth = parentWidth < 1200 && parentWidth > 1000 ? "500px" : "600px";

  const setOptionsMonthlyNetHouseholdIncome = {
    grid: chartWidth < 360 
    ? { left: "15%", right: "2%", top: "25%" }
    : chartWidth < 430 
      ? { left: "12%", right: "2%", top: "25%" }
      : chartWidth < 500
        ? { left: "10%", right: "4%", top: "23%" }
        : { left: "10%", right: "10%", top: "20%" },
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
      legend: {
        show: true,
        top: chartWidth < 450 ? "10%" : "8%"
      },
    xAxis: {
      type: "category",
      data: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"],
      name: "Income decile",
      nameLocation: "middle",
      nameGap: 30,
      nameTextStyle: { fontSize: 18 },
      axisLabel: { fontSize: 14 },
    },
    yAxis: {
      type: "value",
      axisLabel: { fontSize: 14 },
    },
    series: [
      { name: "Residual Income", type: "bar", stack: "total", data: [100, 300, 600, 900, 1300, 1700, 2200, 2800, 3500, 4500], itemStyle: { color: "#76c7c0" } },
      { name: "Mobility", type: "bar", stack: "total", data: [50, 100, 150, 180, 200, 220, 240, 250, 270, 300], itemStyle: { color: "#7f8c8d" } },
      { name: "Education", type: "bar", stack: "total", data: [80, 120, 150, 180, 200, 220, 250, 280, 300, 320], itemStyle: { color: "#d8a6a1" } },
      { name: "Food", type: "bar", stack: "total", data: [150, 200, 250, 300, 350, 400, 450, 500, 550, 600], itemStyle: { color: "#e74c3c" } },
      { name: "Health", type: "bar", stack: "total", data: [90, 110, 130, 160, 180, 200, 220, 250, 270, 300], itemStyle: { color: "#c0392b" } },
      { name: "Housing", type: "bar", stack: "total", data: [250, 300, 350, 400, 450, 500, 550, 600, 650, 700], itemStyle: { color: "#b22222" } },
    ],
  };

  const setOptionsShareOfHouseholdIncome = {
    grid: chartWidth < 360 
    ? { left: "15%", right: "2%", top: "25%" }
    : chartWidth < 430 
      ? { left: "12%", right: "2%", top: "25%" }
      : chartWidth < 500
        ? { left: "10%", right: "4%", top: "23%" }
        : { left: "10%", right: "10%", top: "20%" },
    title: {
      text: "Share of household income",
      top: 0,
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      confine: true,
      axisPointer: { type: "shadow" },
    },
    legend: {
      show: true,
      top: "8%",
    },
    xAxis: {
      type: "category",
      data: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"],
      name: "Income decile",
      nameLocation: "middle",
      nameGap: 30,
      nameTextStyle: { fontSize: 18 },
      axisLabel: { fontSize: 14 },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 1,
      axisLabel: { fontSize: 14 },
    },
    series: [
      { name: "Residual Income", type: "bar", stack: "total", data: [0.10, 0.20, 0.30, 0.35, 0.40, 0.45, 0.50, 0.55, 0.60, 0.65], itemStyle: { color: "#76c7c0" } },
      { name: "Mobility", type: "bar", stack: "total", data: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05], itemStyle: { color: "#7f8c8d" } },
      { name: "Education", type: "bar", stack: "total", data: [0.10, 0.09, 0.08, 0.08, 0.07, 0.07, 0.06, 0.06, 0.06, 0.05], itemStyle: { color: "#d8a6a1" } },
      { name: "Food", type: "bar", stack: "total", data: [0.20, 0.18, 0.16, 0.15, 0.14, 0.13, 0.12, 0.11, 0.10, 0.09], itemStyle: { color: "#e74c3c" } },
      { name: "Health", type: "bar", stack: "total", data: [0.15, 0.14, 0.12, 0.11, 0.10, 0.09, 0.08, 0.08, 0.07, 0.07], itemStyle: { color: "#c0392b" } },
      { name: "Housing", type: "bar", stack: "total", data: [0.40, 0.34, 0.29, 0.26, 0.24, 0.21, 0.19, 0.15, 0.12, 0.09], itemStyle: { color: "#b22222" } },
    ],
  };

  const option = index === 1 ? setOptionsMonthlyNetHouseholdIncome : setOptionsShareOfHouseholdIncome;


  return (
    <div ref={chartContainerRef} style={{ width: "100%", maxWidth: maxWidth, height: "440px", justifyContent: "center", margin: "auto" }}>
      <ReactECharts option={option} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default DecilChart;
import React from "react";
import ReactECharts from "echarts-for-react";

const ViolinChart = () => {
  const option = {
    title: {
      text: "Violin Chart Example",
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "line",
        data: [
          [0, 0],
          [1, 2],
          [2, 4],
          [3, 6],
          [4, 7],
          [5, 6],
          [6, 4],
          [7, 2],
          [8, 0],
        ],
        smooth: true,
        areaStyle: {}, // Fill area for violin effect
        lineStyle: { color: "#7B68EE" },
      },
      {
        type: "scatter",
        data: [
          [4, 5],
          [4.5, 6],
          [3.8, 5.5],
          [4.2, 4],
        ], // Sample scattered points
        symbolSize: 8,
        itemStyle: { color: "#FF4500" },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 400 }} />;
};

export default ViolinChart;

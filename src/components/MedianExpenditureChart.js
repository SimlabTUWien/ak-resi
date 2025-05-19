import React, { useEffect, useRef, useMemo, useState } from "react";
import * as echarts from "echarts";

const MedianExpenditureChart = ({ mode }) => {
    const chartRef = useRef(null);

    const [parentWidth, setParentWidth] = useState(window.innerWidth);

    const dataAll = useMemo (() => [
        { name: "Residualeinkommen", value: 71.8 },
        { name: "Mobilität", value: 2.9 },
        { name: "Wohnen", value: 10.3 },
        { name: "Gesundheit", value: 1.8 },
        { name: "Lebensmittel", value: 10.7 },
        { name: "Bildung", value: 2.4 }
    ], []);

    const dataRenter = useMemo (() => [
        { name: "Residualeinkommen", value: 58.6 },
        { name: "Mobilität", value: 2.6 },
        { name: "Wohnen", value: 23.3 },
        { name: "Gesundheit", value: 1.4 },
        { name: "Lebensmittel", value: 10.9 },
        { name: "Bildung", value: 3.0 }
    ], []);

    useEffect(() => {
        const chartInstance = echarts.init(chartRef.current);

        const colors = ["#595e5e", "#aa8a91", "#e2674f","#bc3a26", "#eda293", "#f6d5ce"]; // RI, Mobility, Housing, Health, Food, Education

        const option = {
            tooltip: {
                trigger: "item",
                formatter: (params) => {
                    return `${params.marker} ${params.name}: <b>${params.value}%</b>`;
                },
                confine: true,
                textStyle: {
                    fontSize: 15
                },
            },
            legend: {
                orient: parentWidth > 520 ? "vertical" : "horizontal",
                top: "bottom",
                left: parentWidth > 520 ? "left" : "center",
                selectedMode: false,
                textStyle: {
                    rich: {
                        customStyle: {
                            fontSize: 14,
                            fontWeight: "normal",
                            padding: [3, 0, 0, 2], // Top, Right, Bottom, Left padding
                        }
                    }
                },
                formatter: (name) => `{customStyle|${name}}`,
                data: (mode === "renter" ? dataRenter : dataAll).map(item => item.name).reverse(),
            },
            series: [
                {
                    name: "(Ausgaben)Kategorie",
                    type: "pie",
                    radius: "70%",
                    center: parentWidth > 620 ? ["50%", "50%"] : parentWidth > 520 ? ["50%", "46%"] : ["50%", "42%"],
                    data: (mode === "renter" ? dataRenter : dataAll).map((item, index) => ({
                        ...item,
                        itemStyle: { color: colors[index] }
                    })),
                    label: {
                        show: parentWidth > 600,
                        fontSize: 15
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)",
                        },
                    },
                },
            ],
        };

        chartInstance.setOption(option);

        const handleResize = () => {
            setParentWidth(chartRef.current.clientWidth);
            chartInstance.resize();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            chartInstance.dispose();
        };
    }, [mode, dataAll, dataRenter, parentWidth]);

    return <div ref={chartRef} style={{width: "100%", height: "400px"}}></div>;
};

export default MedianExpenditureChart;

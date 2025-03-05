import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import * as echarts from "echarts";

const QuintilExpenditureCharts = ({ mode }) => {
    const chartRef1 = useRef(null);
    const chartRef2 = useRef(null);
    const [parentWidth, setParentWidth] = useState(window.innerWidth);

    const parentRef = useRef(null);
    const [isWrapped, setIsWrapped] = useState(false);
    

    const dataAllAbsolute = useMemo (() => [
        [482, 33, 351, 21, 208, 63],
        [1199, 65, 295, 42, 253, 62],
        [1740, 76, 247, 45, 270, 52],
        [2414, 80, 220, 51, 287, 58],
        [3662, 94, 216, 65, 310, 67],
    ], []);
    
    const dataAllRelative = useMemo (() => [
        [41.6, 2.9, 30.3, 1.8, 18.0, 5.5],
        [62.6, 3.4, 15.4, 2.2, 13.2, 3.2],
        [71.6, 3.1, 10.2, 1.9, 11.1, 2.1],
        [77.6, 2.6, 7.1, 1.6, 9.2, 1.9],
        [83.0, 2.1, 4.9, 1.5, 7.0, 1.5],
    ], []);

    const dataRenterAbsolute = useMemo (() => [
        [350, 31, 465, 14, 206, 64],
        [1048, 60, 489, 30, 238, 71],
        [1528, 73, 523, 32, 245, 64],
        [2137, 81, 550, 50, 268, 64],
        [3298, 79, 620, 60, 282, 74],
    ], []);

    const dataRenterRelative = useMemo (() => [
        [31.0, 2.8, 41.1, 1.3, 18.2, 5.7],
        [54.1, 3.1, 25.3, 1.6, 12.3, 3.7],
        [62.0, 3.0, 21.2, 1.3, 9.9, 2.6],
        [67.8, 2.6, 17.5, 1.6, 8.5, 2.0],
        [74.7, 1.8, 14.0, 1.4, 6.4, 1.7],
    ], []);


    const quintiles = useMemo (() => ["Q1", "Q2", "Q3", "Q4", "Q5"], []);
    const categories = useMemo (() => ["Residualeinkommen","Mobilität", "Wohnen", "Gesundheit", "Lebensmittel", "Bildung"], []);
    const colors = useMemo (() => ["#d175c6", "#619dfe", "#4DB6AC", "#81C784", "#b79f01", "#f8756c"], []);


    const selectedDataAbsolute = mode === "all" ? dataAllAbsolute : dataRenterAbsolute;
    const selectedDataRelative = mode === "all" ? dataAllRelative : dataRenterRelative;

    // const maxWidth = parentWidth < 1300 && parentWidth > 1000 ? "500px" : "600px";
    const maxWidth = "500px";

    const setQuintilAbsoluteChartOptions = useCallback((title, data) => ({
        title: { text: title, left: "center" },
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, confine: true, textStyle: {fontSize: 15 } },
        legend: { 
            top: "bottom",
            textStyle: {
                rich: {
                    customStyle: {
                        fontSize: 14,
                        fontWeight: "normal",
                        padding: [3, 0, 0, 2],
                    }
                }
            },
            formatter: (name) => `{customStyle|${name}}`, 
        },
        grid: parentWidth >= 535 ? { left: "14%", bottom: "22%", right: "5%" } : parentWidth >= 490 ? { left: "16%", bottom: "23%", right: "5%" } : parentWidth >= 450 ? { left: "15%", bottom: "23%", right: "5%" } : { left: "16%", bottom: "27%", right: "5%" },
        xAxis: { type: "category", data: quintiles, name: "Einkommensquintile", nameLocation: "middle", nameGap: 30, nameTextStyle: { fontSize: 15, fontWeight: "bold" }, axisLabel: { fontSize: 14 } },
        yAxis: parentWidth >= 500 ? 
            { type: "value", name: "Euro", nameLocation: "center", nameGap: 50,  nameTextStyle: { fontSize: 16, fontWeight: "bold" }, axisLabel: { fontSize: 14 } } : 
            { type: "value", name: "Euro", nameTextStyle: { fontSize: 16, fontWeight: "bold", padding: [0, 50, 0, 0] }, axisLabel: { fontSize: 14 } }, 
        series: categories.map((name, index) => ({
            name,
            type: "bar",
            stack: "total",
            data: data.map(row => row[index]),
            itemStyle: { color: colors[index] },
        })),
    }), [parentWidth, colors, quintiles, categories]);

    const setQuintilRelativeChartOptions = useCallback((title, data) => ({
        title: { text: title, left: "center" },
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, confine: true, textStyle: {fontSize: 15 } },
        legend: { 
            top: "bottom",
            textStyle: {
                rich: {
                    customStyle: {
                        fontSize: 14,
                        fontWeight: "normal",
                        padding: [3, 0, 0, 2],
                    }
                }
            },
            formatter: (name) => `{customStyle|${name}}`, 
        },
        grid: parentWidth >= 535 ? { left: "14%", bottom: "22%", right: "5%" } : parentWidth >= 490 ? { left: "16%", bottom: "23%", right: "5%" } : parentWidth >= 450 ? { left: "15%", bottom: "23%", right: "5%" } : { left: "16%", bottom: "27%", right: "5%" },
        xAxis: { type: "category", data: quintiles, name: "Einkommensquintile", nameLocation: "middle", nameGap: 30, nameTextStyle: { fontSize: 15, fontWeight: "bold" }, axisLabel: { fontSize: 14 } },
        yAxis: parentWidth >= 500 ? {
            type: "value",
            min: 0,
            max: 100,
            name: "Prozent",
            nameLocation: "center", 
            nameGap: 50, 
            nameTextStyle: { fontSize: 16, fontWeight: "bold" },
            axisLabel: { fontSize: 14 },
          } :
          {
            type: "value",
            min: 0,
            max: 100,
            name: "Prozent",
            nameTextStyle: { fontSize: 16, fontWeight: "bold", padding: [0, 30, 0, 0] },
            axisLabel: { fontSize: 14 },
          },
        series: categories.map((name, index) => ({
            name,
            type: "bar",
            stack: "total",
            data: data.map(row => row[index]),
            itemStyle: { color: colors[index] },
        })),
    }), [parentWidth, colors, quintiles, categories]);

    useEffect(() => {
        const chartInstance1 = echarts.init(chartRef1.current);
        const chartInstance2 = echarts.init(chartRef2.current);

        chartInstance1.setOption(setQuintilAbsoluteChartOptions("Absolut", selectedDataAbsolute));
        chartInstance2.setOption(setQuintilRelativeChartOptions("Relativ", selectedDataRelative));

        const checkFlexWrap = () => {
            if (parentRef.current) {
                const firstChild = parentRef.current.children[0];
                const secondChild = parentRef.current.children[1];

                if (firstChild && secondChild) {
                    const wrapped = secondChild.offsetTop > firstChild.offsetTop;
                    setIsWrapped(wrapped);
                }
            }
        };

        const handleResize = () => {
            setParentWidth(window.innerWidth);
            chartInstance1.resize();
            chartInstance2.resize();
            checkFlexWrap();
        };

        checkFlexWrap();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            chartInstance1.dispose();
            chartInstance2.dispose();
        };
    }, [mode, parentWidth, selectedDataAbsolute, selectedDataRelative, setQuintilAbsoluteChartOptions, setQuintilRelativeChartOptions]);

    return (
        <div ref={parentRef} className="quintil-exp-charts">
            <div ref={chartRef1} style={{ width: "100%", maxWidth: maxWidth, height: "500px", justifyContent: "center", margin: "auto", paddingTop: "24px" }}></div>
            <div ref={chartRef2} style={{ width: "100%", maxWidth: maxWidth, height: "500px", justifyContent: "center", margin: "auto", paddingTop: isWrapped ? "40px" : "24px" }}></div>
        </div>
    );
};

export default QuintilExpenditureCharts;

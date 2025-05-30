import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import * as echarts from "echarts";

const QuintilExpenditureCharts = ({ mode, isWrapped, setIsWrapped }) => {
    const chartRef1 = useRef(null);
    const chartRef2 = useRef(null);
    const legendChartRef = useRef(null);
    const [parentWidth, setParentWidth] = useState(window.innerWidth);
    const parentRef = useRef(null);

    const dataAllAbsolute = useMemo(() => [
        [482, 33, 351, 21, 208, 63],
        [1199, 65, 295, 42, 253, 62],
        [1740, 76, 247, 45, 270, 52],
        [2414, 80, 220, 51, 287, 58],
        [3662, 94, 216, 65, 310, 67],
    ], []);
    const dataAllRelative = useMemo(() => [
        [41.6, 2.9, 30.3, 1.8, 18.0, 5.5],
        [62.6, 3.4, 15.4, 2.2, 13.2, 3.2],
        [71.6, 3.1, 10.2, 1.9, 11.1, 2.1],
        [77.6, 2.6, 7.1, 1.6, 9.2, 1.9],
        [83.0, 2.1, 4.9, 1.5, 7.0, 1.5],
    ], []);
    const dataRenterAbsolute = useMemo(() => [
        [350, 31, 465, 14, 206, 64],
        [1048, 60, 489, 30, 238, 71],
        [1528, 73, 523, 32, 245, 64],
        [2137, 81, 550, 50, 268, 64],
        [3298, 79, 620, 60, 282, 74],
    ], []);
    const dataRenterRelative = useMemo(() => [
        [31.0, 2.8, 41.1, 1.3, 18.2, 5.7],
        [54.1, 3.1, 25.3, 1.6, 12.3, 3.7],
        [62.0, 3.0, 21.2, 1.3, 9.9, 2.6],
        [67.8, 2.6, 17.5, 1.6, 8.5, 2.0],
        [74.7, 1.8, 14.0, 1.4, 6.4, 1.7],
    ], []);

    const quintiles = useMemo(() => ["Q1", "Q2", "Q3", "Q4", "Q5"], []);
    const categories = useMemo(() => ["Residualeinkommen", "Mobilität", "Wohnen", "Gesundheit", "Lebensmittel", "Bildung"], []);
    const colors = useMemo(() => ["#595e5e", "#e2674f","#bc3a26", "#eda293", "#f6d5ce", "#aa8a91"], []); // Residual Income, Mobility, Housing, Health, Food, Education



    const selectedDataAll = mode === "absolute" ? dataAllAbsolute : dataAllRelative;
    const selectedDataRenter = mode === "absolute" ? dataRenterAbsolute : dataRenterRelative;
    const maxWidth = "500px";

    const getChartOptions = useCallback((title, data, visibleCategories) => ({
        title: { text: title, left: "center", top: parentWidth >= 500 ? 0 : -5 },
        tooltip: {
            trigger: "axis",
            axisPointer: { type: "shadow" },
            formatter: (params) => {
                const title = `<b>${params[0].name}</b><br/>`;
                const unit = mode === "absolute" ? "€" : "%";
                const details = params
                    .filter(p => visibleCategories.has(p.seriesName))
                    .map(p => `${p.marker} ${p.seriesName}: <b>${p.value}${unit}</b>`)
                    .join('<br/>');
                return title + details;
            },
            confine: true,
            textStyle: { fontSize: 15 }
        },
        legend: { show: false },
        grid: parentWidth >= 535 ? { left: "14%", bottom: "15%", right: "5%" } : parentWidth >= 490 ? { left: "16%", bottom: "15%", right: "5%" } : parentWidth >= 450 ? { left: "15%", bottom: "15%", right: "5%" } : { left: "16%", bottom: "15%", right: "5%" },
        xAxis: { type: "category", data: quintiles, name: "Einkommensquintile", nameLocation: "middle", nameGap: 30, nameTextStyle: { fontSize: 15, fontWeight: "bold" }, axisLabel: { fontSize: 14 } },
        yAxis: {
            type: "value",
            name: mode === "absolute" ? "Euro" : "Prozent",
            nameLocation: parentWidth >= 490 ? "center" : "end",
            nameGap: parentWidth >= 490 ? 50 : 22,
            nameTextStyle: { fontSize: 16, fontWeight: "bold", padding: parentWidth >= 490 ? 0 : mode === "absolute" ? [0, 50, 0, 0] : [0, 30, 0, 0]},
            axisLabel: { fontSize: 14 },
            min: 0,
            max: mode === "relative" ? 100 : null,
        },
        series: categories.map((name, index) => ({
            name,
            type: "bar",
            stack: "total",
            data: visibleCategories.has(name) ? data.map(row => row[index]) : data.map(() => 0),
            itemStyle: { color: colors[index] },
        })),
    }), [categories, colors, quintiles, mode, parentWidth]);

    useEffect(() => {
        const chartInstance1 = echarts.init(chartRef1.current);
        const chartInstance2 = echarts.init(chartRef2.current);
        const legendInstance = echarts.init(legendChartRef.current);

        const visibleCategories = new Set(categories);

        const updateCharts = () => {
            chartInstance1.setOption(getChartOptions("Alle Haushalte", selectedDataAll, visibleCategories));
            chartInstance2.setOption(getChartOptions("Nur Mieter:innen", selectedDataRenter, visibleCategories));
        };

        updateCharts();

        const isFirefox = /firefox/i.test(navigator.userAgent);

        // Legend chart setup
        legendInstance.setOption({
            legend: {
                data: categories,
                type: "plain",
                orient: "vertical",
                top: 0,
                textStyle: {
                    rich: {
                        customStyle: {
                            fontSize: parentWidth > 400 ? 16 : 14,
                            fontWeight: "normal",
                            ...(isFirefox ? { padding: [3, 0, 0, 0] } : { padding: [1, 0, 0, 0] })
                        }
                    }
                },
                formatter: function (name) {
                    return `{customStyle|${name}}`;
                },
                selected: categories.reduce((acc, name) => {
                    acc[name] = true;
                    return acc;
                }, {})
            },
            tooltip: { show: false },
            xAxis: { show: false },
            yAxis: { show: false },
            series: categories.map((name, i) => ({
                name,
                type: "bar",
                data: [],
                itemStyle: { color: colors[i] }
            }))
        });

        legendInstance.on("legendselectchanged", (event) => {
            const category = event.name;
            if (event.selected[category]) {
                visibleCategories.add(category);
            } else {
                visibleCategories.delete(category);
            }
            updateCharts();
        });

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
            legendInstance.resize();
            checkFlexWrap();
        };

        checkFlexWrap();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            chartInstance1.dispose();
            chartInstance2.dispose();
            legendInstance.dispose();
        };
    }, [mode, parentWidth, colors, selectedDataAll, selectedDataRenter, categories, getChartOptions, setIsWrapped]);

    return (
        <div ref={parentRef} className="bar-charts">
            <div ref={chartRef1} style={{ width: "100%", maxWidth: maxWidth, height: "500px", justifyContent: "center", margin: "auto", paddingTop: "24px" }} />
            <div ref={chartRef2} style={{ width: "100%", maxWidth: maxWidth, height: "500px", justifyContent: "center", margin: "auto", paddingTop: isWrapped ? "12px" : "24px" }} />
            
            <div ref={legendChartRef} style={{ width: "100%", height: parentWidth > 1261 ? 32 : parentWidth > 490 ? 64 : 160, marginBottom: parentWidth > 490 ? "6px" : "0" }} />
        </div>
    );
};

export default QuintilExpenditureCharts;

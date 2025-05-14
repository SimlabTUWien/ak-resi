import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import * as echarts from "echarts";

const EducationCharts = ({ mode, isWrapped, setIsWrapped }) => {
    const chartRef1 = useRef(null);
    const chartRef2 = useRef(null);
    const legendChartRef = useRef(null);
    const [parentWidth, setParentWidth] = useState(window.innerWidth);
    const parentRef = useRef(null);

    const educationLevels = useMemo(() => [
        "Pflichtschule",
        "Sekundarstufe I (ohne Matura)",
        "Sekundarstufe II (mit Matura)",
        "Postsekundäre oder tertiäre Ausbildung"
    ], []);

    const educationData = useMemo(() => [
        { education: "Pflichtschule", income: 927 },
        { education: "Sekundarstufe I (ohne Matura)", income: 1623 },
        { education: "Sekundarstufe II (mit Matura)", income: 2056 },
        { education: "Postsekundäre oder tertiäre Ausbildung", income: 2453 }
    ], []);

    const employmentExtentData = useMemo(() => [
        { education: "Pflichtschule", employment: "Voll- und Teilzeit", income: 1219 },
        { education: "Pflichtschule", employment: "Nur Vollzeit", income: 1101 },
        { education: "Pflichtschule", employment: "Nur Teilzeit", income: 784 },
        { education: "Sekundarstufe I (ohne Matura)", employment: "Voll- und Teilzeit", income: 2253 },
        { education: "Sekundarstufe I (ohne Matura)", employment: "Nur Vollzeit", income: 1962 },
        { education: "Sekundarstufe I (ohne Matura)", employment: "Nur Teilzeit", income: 887 },
        { education: "Sekundarstufe II (mit Matura)", employment: "Voll- und Teilzeit", income: 2412 },
        { education: "Sekundarstufe II (mit Matura)", employment: "Nur Vollzeit", income: 2291 },
        { education: "Sekundarstufe II (mit Matura)", employment: "Nur Teilzeit", income: 753 },
        { education: "Postsekundäre oder tertiäre Ausbildung", employment: "Voll- und Teilzeit", income: 2914 },
        { education: "Postsekundäre oder tertiäre Ausbildung", employment: "Nur Vollzeit", income: 2800 },
        { education: "Postsekundäre oder tertiäre Ausbildung", employment: "Nur Teilzeit", income: 1125 }
    ], []);

    const incomeSourceData = useMemo(() => [
        { education: "Pflichtschule", source: "Erwerbsarbeit (Angestellt)", income: 1190 },
        { education: "Pflichtschule", source: "Pension", income: 966 },
        { education: "Pflichtschule", source: "Selbstständigkeit", income: 1853 },
        { education: "Pflichtschule", source: "Transferleistungen", income: 238 },
        { education: "Sekundarstufe I (ohne Matura)", source: "Erwerbsarbeit (Angestellt)", income: 1913 },
        { education: "Sekundarstufe I (ohne Matura)", source: "Pension", income: 1442 },
        { education: "Sekundarstufe I (ohne Matura)", source: "Selbstständigkeit", income: 2391 },
        { education: "Sekundarstufe I (ohne Matura)", source: "Transferleistungen", income: 276 },
        { education: "Sekundarstufe II (mit Matura)", source: "Erwerbsarbeit (Angestellt)", income: 2203 },
        { education: "Sekundarstufe II (mit Matura)", source: "Pension", income: 1954 },
        { education: "Sekundarstufe II (mit Matura)", source: "Selbstständigkeit", income: 2400 },
        { education: "Sekundarstufe II (mit Matura)", source: "Transferleistungen", income: 358 },
        { education: "Postsekundäre oder tertiäre Ausbildung", source: "Erwerbsarbeit (Angestellt)", income: 2638 },
        { education: "Postsekundäre oder tertiäre Ausbildung", source: "Pension", income: 2302 },
        { education: "Postsekundäre oder tertiäre Ausbildung", source: "Selbstständigkeit", income: 2224 },
        { education: "Postsekundäre oder tertiäre Ausbildung", source: "Transferleistungen", income: 442 }
    ], []);


    const colors = useMemo(() => ['#FF7F7F', "#66B35A", '#00BCD4', "#C855B9"], []);
    const maxWidth = "500px";

    const getEducationChartOptions = useCallback((visibleEducationLevels) => {
        const filteredEducationData = educationData.filter(item => visibleEducationLevels.has(item.education));

        return {
            responsive: true,
            title: { 
                text: parentWidth >= 350 
                    ? "Höchste abgeschlossene Bildung" 
                    : "Höchste\nabgeschlossene Bildung",
                left: "center", 
                top: parentWidth >= 500 ? 0 : -5 
            },
            tooltip: {
                trigger: "item",
                formatter: (params) => {
                    return `${params.marker} ${params.name}: <b>${params.value}€</b>`;
                },
                confine: true,
                extraCssText: "max-width: 100vw; text-align: left; white-space: normal; word-wrap: break-word; overflow-wrap: break-word;",
                textStyle: {
                    fontSize: 15
                },
            },
            legend: { show: false },
            grid: parentWidth >= 535
                ? { left: "14%", bottom: "15%", right: "5%" }
                : parentWidth >= 490
                ? { left: "16%", bottom: "15%", right: "5%" }
                : parentWidth >= 450
                ? { left: "15%", bottom: "15%", right: "5%" }
                : parentWidth >= 350
                ? { left: "16%", bottom: "15%", right: "5%" }
                : { top: "20%", left: "16%", bottom: "15%", right: "5%" },
             xAxis: {
                type: 'category',
                data: filteredEducationData.map(item => item.education),
                name: "Bildungsniveau",
                nameLocation: "middle",
                nameGap: parentWidth >= 500 ? 30 : 20,
                nameTextStyle: {
                    fontSize: parentWidth >= 500 ? 16 : 15,
                    fontWeight: "bold"
                },
                axisLabel: { show: false },
                axisTick: {show: false }
            },    
            yAxis: parentWidth >= 500 ? {
                type: "value",
                name: "Residualeinkommen (Median)",
                nameLocation: "center", 
                nameGap: 50, 
                nameTextStyle: { fontSize: 16, fontWeight: "bold" },
                axisLabel: { fontSize: 14 },
            } : {
                type: "value",
                name: parentWidth >= 350 ? "Residualeinkommen (Median)" : "Residualeinkommen\n(Median)",
                nameTextStyle: { fontSize: 15, fontWeight: "bold", padding: parentWidth >= 350 ? [0, 0, 0, 130] : [0, 0, 0, 60] },
                axisLabel: { fontSize: 14 },
            },
            series: [{
                type: "bar",
                data: filteredEducationData.map(item => item.income),
                itemStyle: {
                    color: (params) => {
                        const index = educationLevels.indexOf(filteredEducationData[params.dataIndex].education);
                        return colors[index];
                    }
                }
            }]
        };
    }, [parentWidth, educationLevels, educationData, colors]);


    
    const getGroupedBarChartOptions = useCallback(
        ({ titleText, groupKey, groupName, rawData }, visibleEducationLevels) => {
            const groups = [...new Set(rawData.map(d => d[groupKey]))];

            const educationIndexMap = Object.fromEntries(educationLevels.map((edu, i) => [edu, i]));
            
            const groupData = groups.map(group => {
                const entries = rawData.filter(d => d[groupKey] === group);
                const row = Array(educationLevels.length).fill(0);
                entries.forEach(entry => {
                    const eduIdx = educationIndexMap[entry.education];
                    if (eduIdx !== undefined) row[eduIdx] = entry.income;
                });
                return row;
            });

            return {
            title: { text: titleText, left: "center" },
            xAxis: {
                type: "category",
                data: groups,
                name: groupName,
                nameLocation: "middle",
                nameGap: parentWidth >= 450 ? 42 : 20,
                nameTextStyle: { fontSize: 16, fontWeight: "bold" },
                axisLabel: {
                    fontSize: 13,
                    interval: 0,
                    show: parentWidth >= 450,
                    formatter: function (value) {
                        if (mode === "extent_empl") return value;

                        if (value === "Erwerbsarbeit (Angestellt)") {
                            return "Erwerbsarbeit\n(Angestellt)";
                        } else if (value === "Selbstständigkeit") {
                            return "Selbst-\nständigkeit";
                        } else if (value === "Transferleistungen") {
                            return "Transfer-\nleistungen";
                        } else {
                            return value;
                        }
                    }
                }
            },
            yAxis: parentWidth >= 500 ? {
                type: "value",
                name: "Residualeinkommen (Median)",
                nameLocation: "center", 
                nameGap: 50, 
                nameTextStyle: { fontSize: 16, fontWeight: "bold" },
                axisLabel: { fontSize: 14 },
            } : {
                type: "value",
                name: parentWidth >= 350 ? "Residualeinkommen (Median)" : "Residualeinkommen\n(Median)",
                nameTextStyle: { fontSize: 15, fontWeight: "bold", padding: parentWidth >= 350 ? [0, 0, 0, 130] : [0, 0, 0, 60] },
                axisLabel: { fontSize: 14 },
            },
            grid: parentWidth >= 535
                ? { left: "14%", bottom: "15%", right: "5%" }
                : parentWidth >= 490
                ? { left: "16%", bottom: "15%", right: "5%" }
                : parentWidth >= 450
                ? { left: "15%", bottom: "15%", right: "5%" }
                : { top: "15%", left: "16%", bottom: "15%", right: "5%" },
            tooltip: {
                trigger: "axis",
                axisPointer: { type: "shadow" },
                formatter: (params) => {
                const title = `<b>${params[0].name}</b><br/>`;
                const details = params
                    .filter(p => visibleEducationLevels.has(p.seriesName))
                    .map(p => `${p.marker} ${p.seriesName}: <b>${p.value}€</b>`)
                    .join('<br/>');
                return title + details;
                },
                confine: true,
                extraCssText: "max-width: 100vw; text-align: left; white-space: normal; word-wrap: break-word; overflow-wrap: break-word;",
                textStyle: { fontSize: 15 }
            },
            legend: { show: false },
            series: educationLevels.map((edu, index) => ({
                name: edu,
                type: "bar",
                data: visibleEducationLevels.has(edu)
                ? groupData.map(row => row[index])
                : groupData.map(() => 0),
                itemStyle: { color: colors[index] }
            }))
            };
        },
        [parentWidth, mode, educationLevels, colors]
    );

    useEffect(() => {
        const chartInstance1 = echarts.init(chartRef1.current);
        const chartInstance2 = echarts.init(chartRef2.current);
        const legendInstance = echarts.init(legendChartRef.current);

        const visibleEducationLevels = new Set(educationLevels);

        const updateCharts = () => {
            chartInstance1.setOption(getEducationChartOptions(visibleEducationLevels));
            
            if (mode === "extent_empl") {
                chartInstance2.setOption(
                    getGroupedBarChartOptions(
                    {
                        titleText: "Beschäftigungsart",
                        groupKey: "employment",
                        groupName: "Beschäftigungsgrad",
                        rawData: employmentExtentData
                    },
                    visibleEducationLevels
                    )
                );
                } else if (mode === "income_source") {
                chartInstance2.setOption(
                    getGroupedBarChartOptions(
                    {
                        titleText: "Einkommensquelle",
                        groupKey: "source",
                        groupName: "Art der Erwerbstätigkeit",
                        rawData: incomeSourceData
                    },
                    visibleEducationLevels
                    )
                );
            }
        };

        updateCharts();

        legendInstance.setOption({
            legend: {
                data: educationLevels,
                type: "plain",
                orient: "vertical",
                top: 0,
                textStyle: {
                    fontSize: 14,
                    rich: {
                        customStyle: {
                            fontSize: 14,
                            fontWeight: "normal",
                            padding: [3, 0, 0, 2],
                        }
                    }
                },
                formatter: function (name) {
                    const maxLength = parentWidth < 330 ? 33 : parentWidth < 350 ? 35 : 999;
                    const truncatedName = name.length > maxLength
                        ? name.slice(0, maxLength - 1) + '…'
                        : name;
                    return `{customStyle|${truncatedName}}`;
                },
                selected: educationLevels.reduce((acc, name) => {
                    acc[name] = visibleEducationLevels.has(name);
                    return acc;
                }, {})
            },
            tooltip: { show: false },
            xAxis: { show: false },
            yAxis: { show: false },
            series: educationLevels.map((name, i) => ({
                name,
                type: "bar",
                data: [],
                itemStyle: { color: colors[i] }
            }))
        });


        legendInstance.on("legendselectchanged", (event) => {
            const educationLevel = event.name;
            if (event.selected[educationLevel]) {
                visibleEducationLevels.add(educationLevel);
            } else {
                visibleEducationLevels.delete(educationLevel);
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
    }, [mode, parentWidth, educationLevels, educationData, employmentExtentData, incomeSourceData, colors, getEducationChartOptions, getGroupedBarChartOptions, setIsWrapped]);

    return (
        <div ref={parentRef} className="bar-charts">
            <div ref={chartRef1} style={{ width: "100%", maxWidth: maxWidth, height: "500px", margin: "auto", paddingTop: "24px" }} />
            <div ref={chartRef2} style={{ width: "100%", maxWidth: maxWidth, height: "500px", margin: "auto", paddingTop: isWrapped ? "12px" : "24px" }} />

            <div ref={legendChartRef} style={{ width: "100%", height: parentWidth > 1261 ? 32 : parentWidth > 640 ? 64 : 106, marginBottom: "6px" }} />
        </div>
    );
};  

export default EducationCharts;
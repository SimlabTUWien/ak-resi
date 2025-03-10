import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { ToggleButton, ToggleButtonGroup, Box } from "@mui/material";
import * as echarts from "echarts";


const EducationCharts = () => {
    const [educationChartMode, setChartMode] = useState("default");

    const [isWrapped, setIsWrapped] = useState(false);

    const chartRef1 = useRef(null);
    const chartRef2 = useRef(null);
    const parentRef = useRef(null);

    const [parentWidth, setParentWidth] = useState(window.innerWidth);

    const handleToggleModeChange = (_, newValue) => {
        if (newValue !== null) {
            setChartMode(newValue);
        }
    };

    const defaultData = useMemo(() => [
        { education: "Pflichtschule", shortLabel: "Pflichtschule", income: 927 },
        { education: "Sekundarstufe I (ohne Matura)", shortLabel: "Sekundarstufe I", income: 1623 },
        { education: "Sekundarstufe II (mit Matura)", shortLabel: "Sekundarstufe II", income: 2056 },
        { education: "Postsekundäre oder tertiäre Ausbildung", shortLabel: "Postsekundäre/Tertiär", income: 2453 }
    ], []);

    const extentEmploymentData = useMemo(() => [
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
        { education: "Pflichtschule", source: "Arbeitslos", income: 238 },
        { education: "Sekundarstufe I (ohne Matura)", source: "Erwerbsarbeit (Angestellt)", income: 1913 },
        { education: "Sekundarstufe I (ohne Matura)", source: "Pension", income: 1442 },
        { education: "Sekundarstufe I (ohne Matura)", source: "Selbstständigkeit", income: 2391 },
        { education: "Sekundarstufe I (ohne Matura)", source: "Arbeitslos", income: 276 },
        { education: "Sekundarstufe II (mit Matura)", source: "Erwerbsarbeit (Angestellt)", income: 2203 },
        { education: "Sekundarstufe II (mit Matura)", source: "Pension", income: 1954 },
        { education: "Sekundarstufe II (mit Matura)", source: "Selbstständigkeit", income: 2400 },
        { education: "Sekundarstufe II (mit Matura)", source: "Arbeitslos", income: 358 },
        { education: "Postsekundäre oder tertiäre Ausbildung", source: "Erwerbsarbeit (Angestellt)", income: 2638 },
        { education: "Postsekundäre oder tertiäre Ausbildung", source: "Pension", income: 2302 },
        { education: "Postsekundäre oder tertiäre Ausbildung", source: "Selbstständigkeit", income: 2224 },
        { education: "Postsekundäre oder tertiäre Ausbildung", source: "Arbeitslos", income: 442 }
    ], []);

    const maxWidth = "500px";

    const setDefaultChartOptions = useCallback(() => ({
        // title: { text: "Höchste abgeschlossene Bildung", left: "center" },
        tooltip: {
            trigger: "item",
            formatter: (params) => {
                return `${params.marker} ${params.name}: <b>${params.value}€</b>`;
            },
            confine: true,
            textStyle: {
                fontSize: 15
            },
        },
        legend: {
            show: true,
            top: "top",
            left: "center",
        },
        xAxis: {
            type: "category",
            data: defaultData.map(d => d.shortLabel),
            name: "Ausbildung",
            nameLocation: "middle",
            nameGap: 70,
            nameTextStyle: { fontSize: 15, fontWeight: "bold" },
            axisLabel: { 
                fontSize: 12,
                rotate: 24,  // Rotate labels for better spacing
                interval: 0  // Show all labels
            }
        },
        grid: parentWidth >= 535 ? { left: "14%", bottom: "20%", right: "5%" } : parentWidth >= 490 ? { left: "16%", bottom: "20%", right: "5%" } : parentWidth >= 450 ? { left: "15%", bottom: "20%", right: "5%" } : { left: "16%", bottom: "20%", right: "5%" },
        yAxis: parentWidth >= 500 ? {
            type: "value",
            name: "Einkommen",
            nameLocation: "center", 
            nameGap: 50, 
            nameTextStyle: { fontSize: 16, fontWeight: "bold" },
            axisLabel: { fontSize: 14 },
          } :
          {
            type: "value",
            name: "Einkommen",
            nameTextStyle: { fontSize: 16, fontWeight: "bold", padding: [0, 0, 0, 0] },
            axisLabel: { fontSize: 14 },
          },
          series: [{
            type: "bar",
            data: defaultData.map(d => ({
                value: d.income,
                name: d.education,
                itemStyle: {
                    color: d.education === "Pflichtschule" ? "#FF7F7F" :
                           d.education === "Sekundarstufe I (ohne Matura)" ? "#4CAF50" :
                           d.education === "Sekundarstufe II (mit Matura)" ? "#00BCD4" :
                           "#BA68C8"
                }
            }))
        }]
    }), [defaultData]);
    

    const setExtentEmploymentChartOptions = useCallback(() => ({
        title: { text: "Beschäftigungsausmaß", left: "center" },
        xAxis: { type: "category", data: extentEmploymentData.map(d => `${d.education} - ${d.employment}`) },
        yAxis: { type: "value" },
        series: [{ type: "bar", data: extentEmploymentData.map(d => d.income), color: "#4DB6AC" }]
    }), [extentEmploymentData]);

    const setIncomeSourceChartOptions = useCallback(() => ({
        title: { text: "Haupteinnahmensquelle", left: "center" },
        xAxis: { type: "category", data: incomeSourceData.map(d => `${d.education} - ${d.source}`) },
        yAxis: { type: "value" },
        series: [{ type: "bar", data: incomeSourceData.map(d => d.income), color: "#f8756c" }]
    }), [incomeSourceData]);

    useEffect(() => {
        const chartInstance1 = echarts.init(chartRef1.current);
        const chartInstance2 = educationChartMode !== "default" ? echarts.init(chartRef2.current) : null;

        chartInstance1.setOption(setDefaultChartOptions());
        if (chartInstance2) {
            const options = educationChartMode === "extent_empl" ? setExtentEmploymentChartOptions() : setIncomeSourceChartOptions();
            chartInstance2.setOption(options);
        }

        return () => {
            chartInstance1.dispose();
            if (chartInstance2) chartInstance2.dispose();
        };
    }, [educationChartMode, setDefaultChartOptions, setExtentEmploymentChartOptions, setIncomeSourceChartOptions]);


  return (
    <Box
        sx={{
            background: "#f4f4f4",
            padding: 2,
            borderRadius: 1,
            boxShadow: 1,
            marginTop: 3,
            marginBottom: 3,
        }}
    >

        <div className="toggle-container">
            <ToggleButtonGroup
            className="residual-income-toggle eductaion-chart-toggle"
            value={educationChartMode}
            exclusive
            onChange={handleToggleModeChange}
            aria-label="education charts mode selection"
            >
            <ToggleButton value="default">
                <label>Option 1</label>
            </ToggleButton>
            <ToggleButton value="extent_empl">
                <label>Option 2</label>
            </ToggleButton>
            <ToggleButton value="income_source">
                <label>Option 3</label>
            </ToggleButton>
            </ToggleButtonGroup>
        </div>
    
        <div ref={parentRef} className="education-charts" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <div ref={chartRef1} style={{ width: "100%", maxWidth: maxWidth, height: "500px", justifyContent: "center", margin: "auto", paddingTop: "24px" }}></div>
            {educationChartMode !== "default" && 
                <div ref={chartRef2} style={{ width: "100%", maxWidth: maxWidth, height: "500px", justifyContent: "center", margin: "auto", paddingTop: isWrapped ? "40px" : "24px" }}></div>
            }
        </div>
    </Box>
  );
};



export default EducationCharts;
"use client";
import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function AmChartLeft() {
    const chartRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const root = am5.Root.new(chartRef.current!);
        const myTheme = am5.Theme.new(root);
        myTheme.rule("Label").set("fontSize", "0.8em");
        root.setThemes([am5themes_Animated.new(root), myTheme]);
        const chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                innerRadius: am5.p50,
                tooltip: am5.Tooltip.new(root, {})
            })
        );
        const series = chart.series.push(
            am5percent.PieSeries.new(root, {
                valueField: "value",
                categoryField: "category",
                alignLabels: false
            })
        );

        let tooltip = am5.Tooltip.new(root, {
            labelText: "{value}",
            autoTextColor: false,
            background: am5.Rectangle.new(root, {
                fill: am5.color(0xffffff),
                fillOpacity: 1,
                stroke: am5.color(0xffffff),
                strokeWidth: 2
            })
        });

        series.set("tooltip", tooltip);



        series.labels.template.setAll({
            text: "{valuePercentTotal.formatNumber('0.0')}%",
            inside: true,
            textAlign: "center",
            fill: am5.color(0xffffff),
            radius: 50,
            centerX: am5.percent(50),
            centerY: am5.percent(60)
        });

        series.ticks.template.set("forceHidden", true);
        const sliceTemplate = series.slices.template;
        sliceTemplate.setAll({
            cornerRadius: 20,
            stroke: am5.color(0xffffff),
            strokeWidth: 10,
            strokeOpacity: 1,
            fill: am5.color(0x404040)
        });
        const data = [
            { category: "Lithuania", value: 501.9 },
            { category: "Estonia", value: 301.9 },
            { category: "Ireland", value: 201.1 },
            { category: "Germany", value: 165.8 },
            { category: "Australia", value: 139.9 },
            { category: "Austria", value: 128.3 }
        ];

        series.data.setAll(data);
        chart.appear(1000, 100);
        return () => {
            root.dispose();
        };
    }, []);

    return <div id="chartdiv" ref={chartRef} style={{ width: "100%", height: "500px" }} />;
}

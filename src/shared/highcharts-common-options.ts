import { AgrTheme } from "./agr-theme-model";

/**
 * Highcharts options
 * Common options for all charts
 *
 * Usage example:
 * const options = Highcharts.merge(highchartsCommonOptions, chartOptions);
 */
export const highchartsCommonOptions: Highcharts.Options = {
  accessibility: { enabled: false },
  chart: {
    animation: false,
    type: "column",
    panning: { enabled: true },
    zooming: { type: "x" },
    panKey: "shift",
    style: {
      fontFamily: '"Inter", Helvetica, Arial, sans-serif',
    },
  },
  colors: new AgrTheme("dynamic").getColorsFlat(),
  credits: { enabled: false },
  exporting: { enabled: false },
  legend: {
    itemMarginBottom: 2,
    itemStyle: { fontWeight: "500" },
    itemHiddenStyle: { color: "#ccc", "text-decoration": "none" },
  },
  plotOptions: {
    series: {
      animation: false,
      turboThreshold: 4000,
      states: { inactive: { opacity: 1 } },
    },
  },
  title: { text: undefined },
  tooltip: {
    shared: true,
  },
  xAxis: {
    crosshair: true,
    gridLineWidth: 1,
    lineColor: "#555",
    tickColor: "#555",
    tickLength: 6,
  },
  yAxis: {
    title: { text: undefined },
  },
};

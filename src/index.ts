import * as Highcharts from "highcharts";
import { highchartsCommonOptions } from "./shared/highcharts-common-options";

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container1", {
    ...highchartsCommonOptions,
    title: {
      text: "My First Highcharts Chart",
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    series: [
      {
        type: "line",
        name: "Observation",
        data: [1, 3, 2, 4, 5, 4, 6, 2, 3, 5, 6, 4],
      },
    ],
  });
});

import * as Highcharts from 'highcharts';
import { highchartsCommonOptions } from './shared/highcharts-common-options';

// Issue about the Highchart types. Using @ts-ignore for this project
// https://github.com/highcharts/highcharts/issues/12242

document.addEventListener('DOMContentLoaded', () => {
  /**
   * Data
   */

  const categories = [
    'Jan, `24',
    'Feb, `24',
    'Mar, `24',
    'Apr, `24',
    'May, `24',
    'Jun, `24',
    'Jul, `24',
    'Aug, `24',
    'Sep, `24',
    'Oct, `24',
    'Nov, `24',
    'Dec, `24',
  ];
  const data1 = [120, 140, 170, 145, 180, 210, 220, 189, 130, 22, 0, 0];
  const data2 = [90, 95, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155];
  const data3 = [200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420];
  const data4 = [150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260];

  // Aggregated for pie
  const data1Aggregated = data1.reduce((acc, curr) => acc + curr, 0);
  const data2Aggregated = data2.reduce((acc, curr) => acc + curr, 0);
  const data3Aggregated = data3.reduce((acc, curr) => acc + curr, 0);
  const data4Aggregated = data4.reduce((acc, curr) => acc + curr, 0);

  /**
   * Pie chart
   */

  // @ts-ignore
  const pieChart = Highcharts.chart('demand-from-other-locations-pie', {
    ...highchartsCommonOptions,
    chart: {
      type: 'pie',
    },
    legend: { enabled: false },
    xAxis: {
      categories,
    },
    series: [
      {
        name: 'Demand from other locations',
        data: [
          { id: 'store1', name: 'Store 1', y: data1Aggregated },
          { id: 'store2', name: 'Store 2', y: data2Aggregated },
          { id: 'store3', name: 'Store 3', y: data3Aggregated },
          { id: 'store4', name: 'Store 4', y: data4Aggregated },
        ],
      },
    ],
  });

  /**
   * Column chart
   */

  // @ts-ignore
  Highcharts.chart('demand-from-other-locations-column', {
    ...highchartsCommonOptions,
    chart: {
      type: 'column',
      stacked: true,
    },
    legend: { enabled: true, layout: 'vertical', align: 'right', verticalAlign: 'top' },
    xAxis: {
      categories,
    },
    series: [
      { id: 'store1', name: 'Store 1', data: data1, stacking: 'normal' },
      { id: 'store2', name: 'Store 2', data: data2, stacking: 'normal' },
      { id: 'store3', name: 'Store 3', data: data3, stacking: 'normal' },
      { id: 'store4', name: 'Store 4', data: data4, stacking: 'normal' },
    ],
    plotOptions: {
      series: {
        events: {
          legendItemClick: function (event) {
            console.log('event: ', event);
            var XYZ = pieChart;
            // @ts-ignore
            var series = XYZ.get(this.options.id); //get corresponding series
            console.log(this.options.id);
            if (series) {
              if (this.visible) {
                // @ts-ignore
                series.setVisible(false);
              } else {
                // @ts-ignore
                series.setVisible(true);
              }
            }
          },
        },
      },
    },
  });

  /**
   * Line chart
   */

  // @ts-ignore
  Highcharts.chart('demand-from-other-locations-line', {
    ...highchartsCommonOptions,
    chart: {
      type: 'line',
    },
    legend: { enabled: true, layout: 'vertical', align: 'right', verticalAlign: 'top' },
    xAxis: {
      categories,
    },
    series: [
      { name: 'Store 1', data: data1 },
      { name: 'Store 2', data: data2 },
      { name: 'Store 3', data: data3 },
      { name: 'Store 4', data: data4 },
    ],
  });
});

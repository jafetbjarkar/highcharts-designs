import * as Highcharts from 'highcharts';
import { highchartsCommonOptions } from './shared/highcharts-common-options';

// Issue about the Highchart types. Using @ts-ignore for this project
// https://github.com/highcharts/highcharts/issues/12242

document.addEventListener('DOMContentLoaded', () => {
  /**
   * Data
   */

  const categories = ['Jan, `24', 'Feb, `24', 'Mar, `24', 'Apr, `24', 'May, `24', 'Jun, `24', 'Jul, `24', 'Aug, `24'];
  const data1 = [120, 140, 170, 145, 150, 160, 170, 180].map((value) => value * 2);
  const data2 = [90, 95, 110, 115, 120, 125, 130, 135].map((value) => value * 6);
  const data3 = [200, 220, 240, 260, 280, 300, 320, 340];
  const data4 = [150, 160, 170, 180, 190, 200, 210, 220];
  const data5 = [200, 220, 240, 260, 280, 300, 320, 340];
  const data6 = [150, 160, 170, 180, 190, 200, 210, 220];

  // Aggregated for pie
  const data1Aggregated = data1.reduce((acc, curr) => acc + curr, 0);
  const data2Aggregated = data2.reduce((acc, curr) => acc + curr, 0);
  const data3Aggregated = data3.reduce((acc, curr) => acc + curr, 0);
  const data4Aggregated = data4.reduce((acc, curr) => acc + curr, 0);
  const data5Aggregated = data5.reduce((acc, curr) => acc + curr, 0);
  const data6Aggregated = data6.reduce((acc, curr) => acc + curr, 0);

  /**
   * Column chart
   */

  // @ts-ignore
  const colChart = Highcharts.chart('breakdown-column', {
    ...highchartsCommonOptions,
    chart: {
      type: 'column',
      stacked: true,
    },
    legend: { enabled: false },
    xAxis: {
      categories,
    },
    series: [
      { id: 'wh1', name: 'Warehouse - West US', data: data1, stacking: 'normal' },
      { id: 'wh2', name: 'Warehouse - East US', data: data2, stacking: 'normal' },
      { id: 'store1', name: 'Store 1', data: data3, stacking: 'normal' },
      { id: 'store2', name: 'Store 2', data: data4, stacking: 'normal' },
      { id: 'store3', name: 'Store 3', data: data5, stacking: 'normal' },
      { id: 'store4', name: 'Store 4', data: data6, stacking: 'normal' },
    ],
    plotOptions: {},
  });

  /**
   * Pie chart
   */

  // @ts-ignore
  const pieChart = Highcharts.chart('breakdown-pie', {
    ...highchartsCommonOptions,
    chart: {
      type: 'pie',
    },
    legend: { enabled: true, layout: 'vertical', align: 'right', verticalAlign: 'top', width: 220 },
    xAxis: {
      categories,
    },
    series: [
      {
        name: 'Demand from other locations',
        data: [
          { id: 'wh1', name: 'Warehouse - West US', y: data1Aggregated },
          { id: 'wh2', name: 'Warehouse - East US', y: data2Aggregated },
          { id: 'store1', name: 'Store 1', y: data3Aggregated },
          { id: 'store2', name: 'Store 2', y: data4Aggregated },
          { id: 'store3', name: 'Store 3', y: data5Aggregated },
          { id: 'store4', name: 'Store 4', y: data6Aggregated },
        ],
      },
    ],
    plotOptions: {
      pie: {
        showInLegend: true,
        dataLabels: {
          enabled: true,
          distance: -30,
          style: { fontWeight: '600' },
          formatter: function (this: Highcharts.PointLabelObject): string {
            if (!this?.point?.percentage) {
              return '';
            }
            return `${Math.round(this.point.percentage * 10) / 10}%`;
          },
        },
      },
      series: {
        events: {
          legendItemClick: function (event) {
            console.log('event: ', event);
            // @ts-ignore
            var series = colChart.get(this.options.id); //get corresponding series
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
});

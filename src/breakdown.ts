import * as Highcharts from 'highcharts';
import { highchartsCommonOptions } from './shared/highcharts-common-options';

// Issue about the Highchart types. Using @ts-ignore for this project
// https://github.com/highcharts/highcharts/issues/12242

document.addEventListener('DOMContentLoaded', () => {
  /**
   * Data
   */

  const categories = ['Jan, `24', 'Feb, `24', 'Mar, `24', 'Apr, `24', 'May, `24', 'Jun, `24', 'Jul, `24', 'Aug, `24'];
  const wh1 = [120, 140, 170, 200, 220, 250, 300, 350];
  const wh2 = [90, 150, 210, 270, 330, 420, 510, 615];
  const store1 = [50, 70, 90, 110, 130, 150, 180, 200];
  const store2 = [30, 50, 70, 90, 110, 130, 160, 190];
  const store3 = [5, 10, 15, 20, 25, 27, 29, 30];
  const store4 = [2, 3, 4, 5, 5.5, 5.7, 5.9, 6];

  // Aggregated for pie
  const wh1Aggregated = wh1.reduce((acc, curr) => acc + curr, 0);
  const wh22Aggregated = wh2.reduce((acc, curr) => acc + curr, 0);
  const store1Aggregated = store1.reduce((acc, curr) => acc + curr, 0);
  const store2Aggregated = store2.reduce((acc, curr) => acc + curr, 0);
  const store3Aggregated = store3.reduce((acc, curr) => acc + curr, 0);
  const store4Aggregated = store4.reduce((acc, curr) => acc + curr, 0);

  /**
   * Column chart
   */

  // @ts-ignore
  const colChart = Highcharts.chart(
    'breakdown-column',
    Highcharts.merge(highchartsCommonOptions, {
      chart: {
        type: 'column',
        stacked: true,
      },
      legend: { enabled: false },
      xAxis: {
        categories,
      },
      series: [
        { id: 'wh1', name: 'Warehouse - West US', data: wh1, stacking: 'normal' },
        { id: 'wh2', name: 'Warehouse - East US', data: wh2, stacking: 'normal' },
        { id: 'store1', name: 'Store 1', data: store1, stacking: 'normal' },
        { id: 'store2', name: 'Store 2', data: store2, stacking: 'normal' },
        { id: 'store3', name: 'Store 3', data: store3, stacking: 'normal' },
        { id: 'store4', name: 'Store 4', data: store4, stacking: 'normal' },
      ],
      plotOptions: {},
    })
  );

  /**
   * Pie chart
   */

  // @ts-ignore
  Highcharts.chart(
    'breakdown-pie',
    Highcharts.merge(highchartsCommonOptions, {
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
            { id: 'wh1', name: 'Warehouse - West US', y: wh1Aggregated },
            { id: 'wh2', name: 'Warehouse - East US', y: wh22Aggregated },
            { id: 'store1', name: 'Store 1', y: store1Aggregated },
            { id: 'store2', name: 'Store 2', y: store2Aggregated },
            { id: 'store3', name: 'Store 3', y: store3Aggregated },
            { id: 'store4', name: 'Store 4', y: store4Aggregated },
          ],
        },
      ],
      plotOptions: {
        pie: {
          point: {
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
      },
    })
  );
});

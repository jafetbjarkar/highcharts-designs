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
  const data1 = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]; // Gradually increasing
  const data2 = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]; // Increased early values
  const data3 = [45, 43, 41, 39, 37, 35, 33, 31, 29, 27, 25, 23]; // Adjusted to ensure total is 100
  /**
   * Column chart
   */

  // @ts-ignore
  const colChart = Highcharts.chart(
    'lta-total-history',
    Highcharts.merge(highchartsCommonOptions, {
      chart: {
        type: 'column',
        stacked: true,
      },
      xAxis: {
        categories,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Percent',
        },
      },
      series: [
        { id: 'onTime', name: 'On time', data: data1, dataLabels: { enabled: true }, color: '#5CCA7B' },
        { id: 'early', name: 'Early', data: data2, dataLabels: { enabled: true }, color: '#F5D347' },
        { id: 'late', name: 'Late', data: data3, dataLabels: { enabled: true }, color: '#EA334A' },
      ],
      plotOptions: {
        column: {
          stacking: 'percent',
          dataLabels: {
            enabled: true,
            format: '{point.percentage:.0f}%',
          },
        },
      },
    })
  );

  /**
   * Area chart
   */

  // @ts-ignore
  const areaChart = Highcharts.chart(
    'lta-total-history-area',
    Highcharts.merge(highchartsCommonOptions, {
      chart: {
        type: 'line',
        stacked: true,
      },
      xAxis: {
        categories,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Percent',
        },
      },
      series: [
        { id: 'onTime', name: 'On time', data: data1, dataLabels: { enabled: true }, color: '#5CCA7B' },
        { id: 'early', name: 'Early', data: data2, dataLabels: { enabled: true }, color: '#F5D347' },
        { id: 'late', name: 'Late', data: data3, dataLabels: { enabled: true }, color: '#EA334A' },
      ],
      plotOptions: {
        column: {
          stacking: 'percent',
          dataLabels: {
            enabled: true,
            format: '{point.percentage:.0f}%',
          },
        },
      },
    })
  );
});

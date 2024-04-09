import * as Highcharts from 'highcharts';
import Sankey from 'highcharts/modules/sankey';
import Organization from 'highcharts/modules/organization';
import Treemap from 'highcharts/modules/treemap';
import Treegraph from 'highcharts/modules/treegraph';
Sankey(Highcharts);
Organization(Highcharts);
Treemap(Highcharts);
Treegraph(Highcharts);

import { highchartsCommonOptions } from './shared/highcharts-common-options';

document.addEventListener('DOMContentLoaded', () => {
  /**
   * Data
   */

  const categories = ['Jan, `24', 'Feb, `24', 'Mar, `24', 'Apr, `24'];
  const data1 = [120, 140, 170, 10];
  const data3 = [200, 220, 5, 10];

  // Aggregated for pie
  const data1Aggregated = data1.reduce((acc, curr) => acc + curr, 0);
  const data3Aggregated = data3.reduce((acc, curr) => acc + curr, 0);

  /**
   * Column chart
   */

  // @ts-ignore
  const colChart = Highcharts.chart(
    'bom-col',
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
        { id: 'Sofa', name: 'Sofa Frame', data: data1, stacking: 'normal', dataLabels: { enabled: true } },
        { id: 'Cushions', name: 'Sofa Leg', data: data3, stacking: 'normal', dataLabels: { enabled: true } },
      ],
      plotOptions: {},
    })
  );

  /**
   * Pie chart
   */

  // @ts-ignore
  Highcharts.chart(
    'bom-pie',
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
            { id: 'Sofa', name: 'Sofa Frame', y: data1Aggregated },
            { id: 'Cushions', name: 'Sofa Leg', y: data3Aggregated },
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

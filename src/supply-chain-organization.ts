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
   * Organization chart V2
   */
  // @ts-ignore
  Highcharts.chart(
    'org2',
    Highcharts.merge(
      {},
      {
        chart: { width: 1200 },
        series: [
          {
            type: 'organization',
            data: [
              { name: 'Vendor' },
              { from: 'Vendor', to: 'Warehouse - WestUS' },
              { from: 'Vendor', to: 'Warehouse - East US' },
              { from: 'Warehouse - WestUS', to: 'Store 1' },
              { from: 'Warehouse - WestUS', to: 'Store 2' },
              { from: 'Warehouse - WestUS', to: 'Store 3' },
              { from: 'Warehouse - East US', to: 'Store 3' },
              { from: 'Warehouse - East US', to: 'Store 4' },
              { from: 'Warehouse - East US', to: 'Store 5' },
              { from: 'Warehouse - East US', to: 'Store 6' },
              { from: 'Warehouse - East US', to: 'Store 7' },
            ],
            nodes: [
              { id: 'Vendor', title: 'Vendor 1', name: 'Name here (Replaces Id)' },
              //   { id: 'Store 4', title: 'Store 4', selected: true },
            ],
            borderWidth: 1,
            colorByPoint: false,
            // color: 'transparent',
            dataLabels: {
              crop: false,
              overflow: 'allow',
              padding: 4,
              inside: false,
              position: 'left',
            },
            levels: [{ level: 0 }, { level: 1, colorByPoint: true }, { level: 2 }],
            link: { type: 'curved' },
            nodePadding: 5,
            nodeWidth: 150,
          },
        ],
        tooltip: { outside: true, format: '{point.id}' },
      }
    )
  );

  /**
   * Organization chart V2
   */
  // @ts-ignore
  Highcharts.chart(
    'org2',
    Highcharts.merge(highchartsCommonOptions, {
      chart: { width: 1200 },
      series: [
        {
          type: 'organization',
          data: [
            { name: 'Vendor' },
            { from: 'Vendor', to: 'Warehouse - WestUS' },
            { from: 'Vendor', to: 'Warehouse - East US' },
            { from: 'Warehouse - WestUS', to: 'Store 1' },
            { from: 'Warehouse - WestUS', to: 'Store 2' },
            { from: 'Warehouse - WestUS', to: 'Store 3' },
            { from: 'Warehouse - East US', to: 'Store 3' },
            { from: 'Warehouse - East US', to: 'Store 4' },
            { from: 'Warehouse - East US', to: 'Store 5' },
            { from: 'Warehouse - East US', to: 'Store 6' },
            { from: 'Warehouse - East US', to: 'Store 7' },
          ],
          nodes: [
            { id: 'Vendor', title: 'Vendor 1', name: 'Name here (Replaces Id)' },
            //   { id: 'Store 4', title: 'Store 4', selected: true },
          ],
          borderWidth: 1,
          colorByPoint: false,
          levels: [{ level: 0 }, { level: 1, colorByPoint: true }, { level: 2 }],
          link: { type: 'curved' },
          nodePadding: 5,
          nodeWidth: 150,
        },
      ],
      tooltip: { outside: true, format: '{point.id}' },
    })
  );

  /**
   * Organization chart v1
   */

  const data = [
    ['Vendor', 'Warehouse - West US'],
    ['Vendor', 'Warehouse - East US'],
    ['Warehouse - West US', 'Store 1'],
    ['Warehouse - West US', 'Store 2'],
    ['Warehouse - East US', 'Store 3'],
    ['Warehouse - East US', 'Store 4'],
    ['Warehouse - East US', 'Store 5'],
    ['Warehouse - East US', 'Store 6'],
    ['Warehouse - East US', 'Store 7'],
    ['Warehouse - East US', 'Store 8'],
    ['Warehouse - East US', 'Store 9'],
    ['Warehouse - East US', 'Store 10'],
    ['Warehouse - East US', 'Store 11'],
    ['Warehouse - East US', 'Store 12'],
  ];

  // @ts-ignore
  Highcharts.chart(
    'org1',
    Highcharts.merge(highchartsCommonOptions, {
      chart: { height: 300, inverted: true },
      series: [
        {
          data: data,
          type: 'organization',
          keys: ['from', 'to'],
          levels: [
            { level: 0, color: '#E8253F' },
            { level: 1, color: '#29CC80', width: 300 },
            { level: 2, color: '#F4D42F' },
          ],
          nodes: [
            { id: 'Vendor', title: 'Vendor 1' },
            { id: 'Store 4', title: 'Store 4', selected: true },
          ],
          colorByPoint: false,
          color: '#007ad0',
          dataLabels: {
            color: '#111111',
            style: { fontWeight: 500, fontSize: '14px' },
          },
          borderWidth: 0,
          linkRadius: 30,
          height: 40,
          link: { type: 'curved' },
        },
      ],
      tooltip: { outside: true, format: '{point.id}' },
    })
  );
});

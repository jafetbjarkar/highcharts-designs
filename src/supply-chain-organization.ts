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
   * Organization chart V3
   */

  const data2 = [
    { name: 'V' },
    { from: 'V', to: 'WW' },
    { from: 'V', to: 'WE' },
    { from: 'WW', to: 'S1' },
    { from: 'WW', to: 'S2' },
    { from: 'WW', to: 'S3' },
    { from: 'WW', to: 'S6' },
    { from: 'WE', to: 'S3' },
    { from: 'WE', to: 'S4' },
    { from: 'WE', to: 'S5' },
    { from: 'WE', to: 'S6' },
    { from: 'WE', to: 'S7' },
    { from: 'WE', to: 'S8' },
  ];

  const nodes2 = [
    { id: 'V', title: '345', name: 'Vendor' },
    { id: 'WW', title: '678', name: 'Warehouse - WestUS' },
    { id: 'WE', title: '123', name: 'Warehouse - East US' },
    { id: 'S1', title: '456', name: 'Store 1' },
    { id: 'S2', title: '789', name: 'Store 2' },
    { id: 'S3', title: '234', name: 'Store 3' },
    { id: 'S4', title: '567', name: 'Store 4' },
    { id: 'S5', title: '890', name: 'Store 5' },
    { id: 'S6', title: '345', name: 'Store 6' },
    { id: 'S7', title: '678', name: 'Store 7' },
    { id: 'S8', title: '700', name: 'Store 8', selected: true },
  ];

  // @ts-ignore
  Highcharts.chart(
    'org3',
    Highcharts.merge(highchartsCommonOptions, {
      chart: { width: 1200, height: 500 }, // We have to calculate the height based on the number of nodes
      series: [
        {
          type: 'organization',
          data: data2,
          nodes: nodes2,
          borderColor: '#e2e2e3',
          borderWidth: 1,
          cursor: 'pointer',
          dataLabels: {
            format: '{point.name}<br><div style="font-size: 12px; opacity: .7">Stock: {point.title}</div>',
          },
          colorByPoint: false,
          color: '#fafafa',
          levels: [{ level: 0 }, { level: 1 }, { level: 2 }],
          link: { type: 'curved' },
          nodePadding: 4,
          nodeWidth: 200,
          height: 44,
          states: {
            hover: { color: '#efefef', borderWidth: 1 },
            select: { color: '#E3DDFA', borderColor: '#A7A4F6' },
          },
        },
      ],
      tooltip: { enabled: false, outside: true, format: '{point.name}<br>{point.title}' },
    })
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
          nodes: [{ id: 'Vendor', title: 'Vendor 1', name: 'Name here (Replaces Id)' }],
          borderWidth: 1,
          dataLabels: {
            crop: false,
            overflow: 'allow',
            inside: false,
            allowOverlap: true,
            style: {
              textOutline: '3px #ffffff',
              whiteSpace: 'nowrap',
              fontWeight: 500,
            },
          },
          levels: [{ level: 0 }, { level: 1, colorByPoint: true }, { level: 2 }],
          link: { type: 'curved' },
          nodePadding: 5,
          nodeWidth: 10,
          height: 10,
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

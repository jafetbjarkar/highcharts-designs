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
   * Tree Graph - v5 Inverted
   */

  // @ts-ignore
  Highcharts.chart(
    'containerV5',
    Highcharts.merge(highchartsCommonOptions, {
      chart: { marginTop: 25, marginRight: 30, marginBottom: 20, marginLeft: 30, height: 440, width: 1220, inverted: true },
      series: [
        {
          type: 'treegraph',
          clip: false,
          color: '#b7b6b9',
          // keys: ['parent', 'id', 'level'],
          data: [
            {
              parent: undefined,
              id: 'Vendor',
              dataLabels: { color: '#555' },
            },
            { parent: 'Vendor', id: 'Warehouse - West US' },
            {
              parent: 'Vendor',
              id: 'Warehouse - East US',
              dataLabels: { color: '#555' },
              link: { color: '#000' },
            },
            { parent: 'Warehouse - West US', id: 'Store 1' },
            { parent: 'Warehouse - West US', id: 'Store 2' },
            { parent: 'Warehouse - West US', id: 'Store 3' },
            { parent: 'Warehouse - East US', id: 'Store 3' },
            {
              parent: 'Warehouse - East US',
              id: 'Store 4',
              dataLabels: { color: '#0a0a0a', borderWidth: 2, style: { fontWeight: 600 } },
              link: { color: '#000' },
              marker: { borderColor: '#000', borderWidth: 2, fillColor: '#111' },
            },
            { parent: 'Warehouse - East US', id: 'Store 5' },
            { parent: 'Warehouse - East US', id: 'Store 6' },
            { parent: 'Warehouse - East US', id: 'Store 7' },
            { parent: 'Warehouse - East US', id: 'Store 8' },
            { parent: 'Warehouse - East US', id: 'Store 9' },
            { parent: 'Warehouse - East US', id: 'Store 10' },
            { parent: 'Warehouse - East US', id: 'Store 11' },
            { parent: 'Warehouse - East US', id: 'Store 12' },
          ],
          marker: {
            radius: 6,
            lineWidth: 2,
            lineColor: 'white',
          },
          link: {
            color: '#ddd',
          },
          dataLabels: {
            // align: 'left',
            y: -18,
            pointFormat: '{point.id}',
            style: {
              color: '#999',
              textOutline: '3px #ffffff',
              whiteSpace: 'nowrap',
              fontWeight: 500,
            },
            // x: 16,
            crop: false,
            overflow: 'none',
          },
          levels: [{ level: 1 }, { level: 2, colorByPoint: true }, { level: 3, dataLabels: { y: 18 } }],
        },
      ],
    })
  );

  /**
   * Tree Graph - v4 Point by color
   */

  // @ts-ignore
  Highcharts.chart(
    'containerV4',
    Highcharts.merge(highchartsCommonOptions, {
      chart: { marginRight: 140, height: 440, width: 1220 },
      series: [
        {
          type: 'treegraph',
          clip: false,
          color: '#b7b6b9',
          // keys: ['parent', 'id', 'level'],
          data: [
            {
              parent: undefined,
              id: 'Vendor',
              dataLabels: { color: '#555' },
            },
            { parent: 'Vendor', id: 'Warehouse - West US' },
            {
              parent: 'Vendor',
              id: 'Warehouse - East US',
              dataLabels: { color: '#555' },
              link: { color: '#000' },
            },
            { parent: 'Warehouse - West US', id: 'Store 1' },
            { parent: 'Warehouse - West US', id: 'Store 2' },
            { parent: 'Warehouse - West US', id: 'Store 3' },
            { parent: 'Warehouse - East US', id: 'Store 3' },
            {
              parent: 'Warehouse - East US',
              id: 'Store 4',
            },
            { parent: 'Warehouse - East US', id: 'Store 5' },
            { parent: 'Warehouse - East US', id: 'Store 6' },
            { parent: 'Warehouse - East US', id: 'Store 7' },
            {
              parent: 'Warehouse - East US',
              id: 'Store 8',
              dataLabels: { color: '#0a0a0a', borderWidth: 2, style: { fontWeight: 600 } },
              link: { color: '#000' },
              marker: { borderColor: '#000', borderWidth: 2, fillColor: '#111' },
            },
            { parent: 'Warehouse - East US', id: 'Store 9' },
            { parent: 'Warehouse - East US', id: 'Store 10' },
            { parent: 'Warehouse - East US', id: 'Store 11' },
            { parent: 'Warehouse - East US', id: 'Store 12' },
          ],
          marker: {
            radius: 6,
            lineWidth: 2,
            lineColor: 'white',
          },
          link: {
            color: '#ddd',
          },
          dataLabels: {
            align: 'left',
            pointFormat: '{point.id}',
            style: {
              color: '#999',
              textOutline: '3px #ffffff',
              whiteSpace: 'nowrap',
              fontWeight: 500,
            },
            x: 16,
            crop: false,
            overflow: 'none',
          },
          levels: [{ level: 1 }, { level: 2, colorByPoint: true }, { level: 3 }],
        },
      ],
    })
  );

  /**
   * Tree Graph - v3 Gray except selected
   */

  // @ts-ignore
  Highcharts.chart(
    'containerV3',
    Highcharts.merge(highchartsCommonOptions, {
      chart: { marginRight: 140, height: 300 },
      series: [
        {
          type: 'treegraph',
          clip: false,
          color: '#b7b6b9',
          // keys: ['parent', 'id', 'level'],
          data: [
            {
              parent: undefined,
              id: 'Vendor',
              dataLabels: { color: '#555' },
              marker: { fillColor: '#888' },
            },
            { parent: 'Vendor', id: 'Warehouse - West US' },
            {
              parent: 'Vendor',
              id: 'Warehouse - East US',
              dataLabels: { color: '#555' },
              marker: { fillColor: '#888' },
              link: { color: '#000' },
            },
            { parent: 'Warehouse - West US', id: 'Store 1' },
            { parent: 'Warehouse - West US', id: 'Store 2' },
            { parent: 'Warehouse - East US', id: 'Store 3' },
            {
              parent: 'Warehouse - East US',
              id: 'Store 4',
              dataLabels: { color: '#0a0a0a' },
              marker: { fillColor: '#5A25EB' },
              link: { color: '#000' },
            },
            { parent: 'Warehouse - East US', id: 'Store 5' },
            { parent: 'Warehouse - East US', id: 'Store 6' },
            { parent: 'Warehouse - East US', id: 'Store 7' },
            { parent: 'Warehouse - East US', id: 'Store 8' },
            { parent: 'Warehouse - East US', id: 'Store 9' },
            { parent: 'Warehouse - East US', id: 'Store 10' },
            { parent: 'Warehouse - East US', id: 'Store 11' },
            { parent: 'Warehouse - East US', id: 'Store 12' },
          ],
          marker: {
            radius: 6,
            lineWidth: 2,
            lineColor: 'white',
          },
          link: {
            color: '#ddd',
          },
          dataLabels: {
            align: 'left',
            pointFormat: '{point.id}',
            style: {
              color: '#999',
              textOutline: '3px #ffffff',
              whiteSpace: 'nowrap',
              fontWeight: 600,
            },
            x: 16,
            crop: false,
            overflow: 'none',
          },
          levels: [{ level: 1 }, { level: 2 }, { level: 3 }],
        },
      ],
    })
  );

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

  /**
   * Tree Graph
   */
  // @ts-ignore
  Highcharts.chart(
    'containerV1',
    Highcharts.merge(highchartsCommonOptions, {
      chart: { spacingBottom: 30, marginRight: 120, height: 200 },
      series: [
        {
          type: 'treegraph',
          clip: false,
          keys: ['parent', 'id', 'level'],
          data: [
            [undefined, 'Vendor'],
            ...data,
            // Leaves ( Useful when skipping a level. From Vendor to store for example)
            // ['Vendor 1', 'Store 1', 3],
          ],
          marker: {
            symbol: 'circle',
            radius: 6,
            fillColor: '#ffffff',
            lineWidth: 3,
          },
          dataLabels: {
            align: 'left',
            pointFormat: '{point.id}',
            style: {
              color: '#000000',
              textOutline: '3px #ffffff',
              whiteSpace: 'nowrap',
              fontWeight: 600,
            },
            x: 24,
            crop: false,
            overflow: 'none',
          },

          levels: [
            { level: 1, color: '#5A25EB' },
            { level: 2, color: '#29CC80' },
            { level: 3, color: '#F4D42F' },
          ],
          nodes: [
            { id: 'Vendor 1', color: '#007ad0' },
            { id: 'Warehouse - West US', color: '#f15c80' },
            { id: 'Warehouse - East US', color: '#f15c80' },
            { id: 'Store 1', color: '#f7a35c' },
            { id: 'Store 2', color: '#f7a35c' },
            { id: 'Store 3' },
            { id: 'Store 4' },
          ],
        },
      ],
    })
  );
});

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

/**
 * Tree Graph
 */

document.addEventListener('DOMContentLoaded', () => {
  // @ts-ignore
  Highcharts.chart('container2', {
    ...highchartsCommonOptions,
    chart: { spacingBottom: 30, marginRight: 120, height: 140 },
    series: [
      {
        type: 'treegraph',
        clip: false,
        keys: ['parent', 'id', 'level'],
        data: [
          [undefined, 'Vendor 1'],

          ['Vendor 1', 'Warehouse - West US'],
          ['Vendor 1', 'Warehouse - East US'],

          ['Warehouse - West US', 'Store 1'],
          ['Warehouse - West US', 'Store 2'],
          ['Warehouse - East US', 'Store 3'],
          ['Warehouse - East US', 'Store 4'],

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
  });

  /**
   * Organization chart
   */

  // @ts-ignore
  const colChart = Highcharts.chart('container', {
    ...highchartsCommonOptions,
    chart: {
      height: 300,
      inverted: true,
    },

    accessibility: {
      point: {
        descriptionFormat:
          '{add index 1}. {toNode.name}' + '{#if (ne toNode.name toNode.id)}, {toNode.id}{/if}, ' + 'reports to {fromNode.id}',
      },
    },

    series: [
      {
        type: 'organization',
        name: 'Highsoft',

        keys: ['from', 'to'],
        data: [
          ['Vendor', 'Warehouse - West US'],
          ['Vendor', 'Warehouse - West US'],
          ['Vendor', 'Warehouse - East US'],
          ['Vendor', 'Warehouse - East US'],
          ['Warehouse - West US', 'Store 1'],
          ['Warehouse - West US', 'Store 2'],
          ['Warehouse - East US', 'Store 3'],
          ['Warehouse - East US', 'Store 4'],
        ],
        // { label: 'indigo', hex: '#5A25EB', lighter: '#9F81F3', light: '#7C52EF', darker: '#340E9A', dark: '#4313C9' },
        // { label: 'teal', hex: '#29CC80', lighter: '#77E4B1', light: '#4CDB99', darker: '#18774B', dark: '#20A165' },
        // { label: 'yellow', hex: '#F4D42F', lighter: '#F9E890', light: '#F7DE5F', darker: '#B39809', dark: '#E4C00C' },
        levels: [
          { level: 0, color: '#d1d0d2' },
          { level: 1, color: '#29CC80' },
          { level: 2, color: '#F4D42F' },
        ],
        nodes: [
          { id: 'Vendor', color: 'red' },
          // { id: 'HR', title: 'CFO', name: 'Anne Jorunn Fjærestad', color: '#007ad0' },
        ],
        colorByPoint: false,
        color: '#007ad0',
        dataLabels: { color: '#111111', fontWeight: 'normal' },
        borderColor: 'white',
        height: 30,
      },
    ],
    tooltip: { outside: true },
    exporting: {
      allowHTML: true,
      sourceWidth: 800,
      sourceHeight: 600,
    },
  });
});
import * as Highcharts from 'highcharts';
import Networkgraph from 'highcharts/modules/networkgraph';

Networkgraph(Highcharts);

import { highchartsCommonOptions } from './shared/highcharts-common-options';

document.addEventListener('DOMContentLoaded', () => {
  Highcharts.addEvent(Highcharts.Series, 'afterSetOptions', function (e) {
    const colors = Highcharts.getOptions().colors,
      nodes = {};

    let i = 0;

    // @ts-ignore

    if (this instanceof Highcharts.Series.types.networkgraph && e.options.id === 'lang-tree') {
      // @ts-ignore
      e.options.data.forEach(function (link) {
        if (link[0] === 'Vendor') {
          nodes['Vendor'] = {
            id: 'Vendor',
            marker: {
              radius: 20,
            },
          };
          nodes[link[1]] = {
            id: link[1],
            marker: {
              radius: 10,
            },
            color: colors[i++],
          };
        } else if (nodes[link[0]] && nodes[link[0]].color) {
          nodes[link[1]] = {
            id: link[1],
            color: nodes[link[0]].color,
          };
        }
      });

      // @ts-ignore
      e.options.nodes = Object.keys(nodes).map(function (id) {
        return nodes[id];
      });
    }
  });

  const data = [
    ['Vendor', 'Warehouse - West US'],
    ['Vendor', 'Warehouse - East US'],
    ['Warehouse - West US', 'Store 1'],
    ['Warehouse - West US', 'Store 2'],
    ['Warehouse - East US', 'Store 3'],
    ['Warehouse - West US', 'Store 3'],
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
    'graph1',
    Highcharts.merge(highchartsCommonOptions, {
      chart: {
        type: 'networkgraph',
        height: '100%',
      },

      plotOptions: {
        networkgraph: {
          layout: 'none',
          keys: ['from', 'to'],
          layoutAlgorithm: {
            enableSimulation: true,
            friction: -0.9,
          },
        },
      },
      series: [
        {
          data,
          accessibility: { enabled: false },
          dataLabels: {
            enabled: true,
            linkFormat: '',
            style: {
              fontSize: '0.8em',
              fontWeight: 'normal',
            },
          },
          id: 'lang-tree',
        },
      ],
    })
  );
});

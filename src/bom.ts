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
   * Tree Graph - v4 Point by color
   */

  const data: any = [
    { parent: undefined, id: 'Car Engine', name: 'BA-000123-C' },
    { parent: 'Car Engine', id: 'Cylinder Block', name: 'DA-000456-E' },
    { parent: 'Car Engine', id: 'Cylinder Head', name: 'FA-000789-G' },
    { parent: 'Car Engine', id: 'Crankshaft', name: 'HA-000321-I' },
    { parent: 'Cylinder Block', id: 'Pistons', name: 'JA-000654-K' },
    { parent: 'Cylinder Block', id: 'Connecting Rod', name: 'LA-000987-M' },
    { parent: 'Cylinder Block', id: 'Engine Block', name: 'NA-000135-O' },
    { parent: 'Cylinder Block', id: 'Cylinder Liner', name: 'PA-000246-Q' },
    { parent: 'Cylinder Block', id: 'Cylinder Head Gasket', name: 'RA-000357-S' },
    { parent: 'Cylinder Head', id: 'Valves', name: 'TA-000468-U' },
    { parent: 'Cylinder Head', id: 'Camshaft', name: 'VA-000579-W' },
    { parent: 'Cylinder Head', id: 'Rocker Arm', name: 'XA-000681-Y' },
    { parent: 'Cylinder Head', id: 'Valve Spring', name: 'ZA-000792-Z' },
    { parent: 'Cylinder Head', id: 'Valve Guide', name: 'AA-000813-B' },
    { parent: 'Cylinder Head', id: 'Valve Seat', name: 'CA-000924-D' },
    { parent: 'Crankshaft', id: 'Flywheel', name: 'EA-000036-F' },
    { parent: 'Crankshaft', id: 'Main Bearings', name: 'GA-000147-H' },
    { parent: 'Crankshaft', id: 'Crankpin', name: 'IA-000258-J' },
    { parent: 'Crankshaft', id: 'Counterweight', name: 'KA-000369-L' },
    { parent: 'Crankshaft', id: 'Crankshaft Pulley', name: 'MA-000470-N' },
    { parent: 'Crankshaft', id: 'Crankshaft Seal', name: 'OA-000581-P' },
  ];

  // Create nodes2 array from data
  const nodes2 = data.map((item) => ({
    id: item.id,
    title: item.name,
  }));

  // Adjust the data array to match the format expected by Highcharts
  const data2 = data.map((item) => ({
    from: item.parent,
    to: item.id,
  }));

  // Calculate the maximum depth of your data
  let maxDepth = 0;
  data2.forEach((item) => {
    const depth = item.from ? item.from.split(' ').length : 0;
    if (depth > maxDepth) {
      maxDepth = depth;
    }
  });

  // Set the height of the chart based on the maximum depth
  const chartHeight = maxDepth * 100; // Adjust the multiplier as needed

  // Create the chart
  Highcharts.chart(
    'ddd',
    Highcharts.merge(highchartsCommonOptions, {
      chart: {
        width: 1200,
        height: chartHeight, // Set the overall height of the chart here
      },
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

  // Data additions
  data[0].dataLabels = { color: '#555' };
  data[2].dataLabels = { color: '#555' };
  data[2].link = { color: '#000' };
  data[9].dataLabels = { color: '#0a0a0a', borderWidth: 2, style: { fontWeight: 600 } };
  data[9].link = { color: '#000' };
  data[9].marker = { borderColor: '#000', borderWidth: 2, fillColor: '#111' };

  // @ts-ignore
  Highcharts.chart(
    'bomV1',
    Highcharts.merge(highchartsCommonOptions, {
      chart: { marginRight: 140, marginLeft: 0, height: 800, width: 1220 },
      series: [
        {
          data,
          type: 'treegraph',
          clip: false,
          color: '#b7b6b9',
          // keys: ['parent', 'id', 'level'],
          marker: { radius: 6, lineWidth: 2, lineColor: 'white' },
          link: { color: '#ddd' },
          dataLabels: {
            align: 'left',
            pointFormat: '{point.id}<br> <div style="color:#bbb; font-size: 11px">{point.name}',
            style: {
              fontSize: 12,
              color: '#999',
              textOutline: '3px #ffffff',
              whiteSpace: 'nowrap',
              fontWeight: 500,
              padding: 0,
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
});

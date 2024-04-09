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
  // const bomData3 = [
  //   { from: 'Sofa', to: 'Frame' },
  //   { from: 'Sofa', to: 'Cushions' },
  //   { from: 'Frame', to: 'Wood' },
  //   { from: 'Frame', to: 'Screws' },
  //   { from: 'Frame', to: 'Staples' },
  //   { from: 'Frame', to: 'Glue' },
  //   { from: 'Cushions', to: 'Foam' },
  //   { from: 'Cushions', to: 'Fabric' },
  //   { from: 'Cushions', to: 'Zipper' },
  //   { from: 'Cushions', to: 'Thread' },
  //   { from: 'Sofa', to: 'Legs' },
  //   { from: 'Legs', to: 'Metal' },
  //   { from: 'Legs', to: 'Screws' },
  //   { from: 'Legs', to: 'Bolts' },
  //   { from: 'Legs', to: 'Rubber Pads' },
  //   { from: 'Legs', to: 'Paint' },
  // ];

  // const bomNodes3 = [
  //   { id: 'Sofa', title: 'AB-00020-C', name: 'KLIPPAN Loveseat' },
  //   { id: 'Frame', title: 'CD-00103-E', name: 'Sofa Frame', selected: true },
  //   { id: 'Cushions', title: 'FG-00050-H', name: 'Sofa Cushion' },
  //   { id: 'Wood', title: 'IJ-06789-K', name: 'Pine Wood <span class="badge">4</span>' },
  //   { id: 'Screws', title: 'LM-03456-N', name: 'Metal Screws <span class="badge">20</span>' },
  //   { id: 'Staples', title: 'ST-03456-N', name: 'Metal Staples <span class="badge">50</span>' },
  //   { id: 'Glue', title: 'GL-03456-N', name: 'Wood Glue <span class="badge">1</span>' },
  //   { id: 'Foam', title: 'OP-07890-Q', name: 'Cushion Foam' },
  //   { id: 'Fabric', title: 'RS-04567-T', name: 'Cushion Fabric' },
  //   { id: 'Zipper', title: 'ZP-07890-Q', name: 'Cushion Zipper' },
  //   { id: 'Thread', title: 'TH-03456-N', name: 'Sewing Thread' },
  //   { id: 'Legs', title: 'UV-01234-W', name: 'Sofa Leg' },
  //   { id: 'Metal', title: 'XY-05678-Z', name: 'Metal for Legs' },
  //   { id: 'Bolts', title: 'BT-03456-N', name: 'Metal Bolts' },
  //   { id: 'Rubber Pads', title: 'RP-03456-N', name: 'Rubber Pads' },
  //   { id: 'Paint', title: 'PT-03456-N', name: 'Metal Paint' },
  // ];

  const bomData3 = [
    { from: 'Sofa', to: 'Frame' },
    { from: 'Frame', to: 'Wood' },
    { from: 'Frame', to: 'Screws' },
    { from: 'Frame', to: 'Staples' },
    { from: 'Frame', to: 'Glue' },
  ];

  const bomNodes3 = [
    { id: 'Sofa', title: 'AB-00020-C', name: 'KLIPPAN Loveseat' },
    { id: 'Frame', title: 'CD-00103-E', name: 'Sofa Frame', selected: true },
    { id: 'Wood', title: 'IJ-06789-K', name: 'Pine Wood <span class="badge">4</span>' },
    { id: 'Screws', title: 'LM-03456-N', name: 'Metal Screws <span class="badge">20</span>' },
    { id: 'Staples', title: 'ST-03456-N', name: 'Metal Staples <span class="badge">50</span>' },
    { id: 'Glue', title: 'GL-03456-N', name: 'Wood Glue <span class="badge">1</span>' },
  ];

  // @ts-ignore
  Highcharts.chart(
    'bom3',
    Highcharts.merge(highchartsCommonOptions, {
      chart: { width: 1200, height: 440 }, // We have to calculate the height based on the number of nodes
      xAxis: { crosshair: false },
      series: [
        {
          type: 'organization',
          data: bomData3,
          nodes: bomNodes3,
          borderColor: '#e2e2e3',
          borderWidth: 1,
          cursor: 'pointer',
          dataLabels: {
            format: '{point.name}<br><div style="font-size: 12px; opacity: .7">{point.title}</div>',
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
   * Organization chart V3
   */

  // @ts-ignore
  Highcharts.chart(
    'bom2',
    Highcharts.merge(highchartsCommonOptions, {
      chart: { width: 1200, height: 620 }, // We have to calculate the height based on the number of nodes
      xAxis: { crosshair: false },
      series: [
        {
          type: 'organization',
          // Full
          data: [
            { from: 'Sofa', to: 'Frame' },
            { from: 'Sofa', to: 'Cushions' },
            { from: 'Frame', to: 'Wood' },
            { from: 'Frame', to: 'Screws' },
            { from: 'Frame', to: 'Staples' },
            { from: 'Frame', to: 'Glue' },
            { from: 'Cushions', to: 'Foam' },
            { from: 'Cushions', to: 'Fabric' },
            { from: 'Cushions', to: 'Zipper' },
            { from: 'Cushions', to: 'Thread' },
            { from: 'Sofa', to: 'Legs' },
            { from: 'Legs', to: 'Metal' },
            { from: 'Legs', to: 'Screws' },
            { from: 'Legs', to: 'Bolts' },
            { from: 'Legs', to: 'Rubber Pads' },
            { from: 'Legs', to: 'Paint' },
          ],
          nodes: [
            { id: 'Sofa', title: 'AB-00020-C', name: 'KLIPPAN Loveseat' },
            { id: 'Frame', title: 'CD-00103-E', name: 'Sofa Frame' },
            { id: 'Cushions', title: 'FG-00050-H', name: 'Sofa Cushion' },
            { id: 'Wood', title: 'IJ-06789-K', name: 'Pine Wood' },
            { id: 'Screws', title: 'LM-03456-N', name: 'Metal Screws', selected: true },
            { id: 'Staples', title: 'ST-03456-N', name: 'Metal Staples' },
            { id: 'Glue', title: 'GL-03456-N', name: 'Wood Glue' },
            { id: 'Foam', title: 'OP-07890-Q', name: 'Cushion Foam' },
            { id: 'Fabric', title: 'RS-04567-T', name: 'Cushion Fabric' },
            { id: 'Zipper', title: 'ZP-07890-Q', name: 'Cushion Zipper' },
            { id: 'Thread', title: 'TH-03456-N', name: 'Sewing Thread' },
            { id: 'Legs', title: 'UV-01234-W', name: 'Sofa Leg' },
            { id: 'Metal', title: 'XY-05678-Z', name: 'Metal for Legs' },
            { id: 'Bolts', title: 'BT-03456-N', name: 'Metal Bolts' },
            { id: 'Rubber Pads', title: 'RP-03456-N', name: 'Rubber Pads' },
            { id: 'Paint', title: 'PT-03456-N', name: 'Metal Paint' },
          ],
          // Line
          // data: [
          //   { from: 'Sofa', to: 'Frame' },
          //   { from: 'Frame', to: 'Screws' },
          //   { from: 'Sofa', to: 'Legs' },
          //   { from: 'Legs', to: 'Screws' },
          // ],
          // nodes: [
          //   { id: 'Sofa', title: 'AB-00020-C', name: 'KLIPPAN Loveseat' },
          //   { id: 'Frame', title: 'CD-00103-E', name: 'Sofa Frame' },
          //   { id: 'Screws', title: 'LM-03456-N', name: 'Metal Screws', selected: true },
          //   { id: 'Legs', title: 'UV-01234-W', name: 'Sofa Legs' },
          // ],
          borderColor: '#e2e2e3',
          borderWidth: 1,
          cursor: 'pointer',
          dataLabels: {
            format: '{point.name}<br><div style="font-size: 12px; opacity: .7">{point.title}</div>',
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

  // Data additions
  data[0].dataLabels = { color: '#555' };
  data[2].dataLabels = { color: '#555' };
  data[2].link = { color: '#000' };
  data[9].dataLabels = { color: '#0a0a0a', borderWidth: 2, style: { fontWeight: 600 } };
  data[9].link = { color: '#000' };
  data[9].marker = { borderColor: '#000', borderWidth: 2, fillColor: '#111' };

  // @ts-ignore
  Highcharts.chart(
    'bom1',
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

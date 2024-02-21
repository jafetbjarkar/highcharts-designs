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
  const bomData = [
    { from: 'P', to: 'C1' },
    { from: 'P', to: 'C2' },
    { from: 'C1', to: 'SC1' },
    { from: 'C1', to: 'SC2' },
    { from: 'C2', to: 'SC3' },
    { from: 'C2', to: 'SC4' },
    { from: 'SC1', to: 'T1' },
    { from: 'SC1', to: 'T2' },
    { from: 'SC2', to: 'T3' },
    { from: 'SC2', to: 'T4' },
    { from: 'SC3', to: 'T5' },
    { from: 'SC3', to: 'T6' },
    { from: 'SC4', to: 'T7' },
    { from: 'SC4', to: 'T8' },
    { from: 'SC4', to: 'T9' },
    { from: 'SC4', to: 'T10' },
    { from: 'P', to: 'C3' },
  ];
  const bomNodes = [
    { id: 'P', title: 'AB-00020-C', name: 'Plumbus' },
    { id: 'C1', title: 'CD-00103-E', name: 'Fleeb <span class="bom-amount">2</span>' },
    { id: 'C2', title: 'FG-00050-H', name: 'Dinglebop <span class="bom-amount">7</span>' },
    { id: 'SC1', title: 'IJ-06789-K', name: 'Schleem <span class="bom-amount">2</span>' },
    { id: 'SC2', title: 'LM-03456-N', name: 'Grumbo <span class="bom-amount">4</span>', selected: true },
    { id: 'SC3', title: 'OP-07890-Q', name: 'Blamf <span class="bom-amount">10</span>' },
    { id: 'SC4', title: 'RS-04567-T', name: 'Shleem <span class="bom-amount">1</span>' },
    { id: 'T1', title: 'UV-01234-W', name: 'Repurposed Schleem <span class="bom-amount">1</span>' },
    { id: 'T2', title: 'XY-05678-Z', name: 'Repurposed Fleeb <span class="bom-amount">2</span>' },
    { id: 'T3', title: 'AB-02345-C', name: 'Repurposed Dinglebop <span class="bom-amount">5</span>' },
    { id: 'T4', title: 'DE-06789-F', name: 'Repurposed Grumbo <span class="bom-amount">1</span>' },
    { id: 'T5', title: 'GH-03456-I', name: 'Repurposed Blamf <span class="bom-amount">2</span>' },
    { id: 'T6', title: 'JK-07890-L', name: 'Repurposed Shleem <span class="bom-amount">2</span>' },
    { id: 'T7', title: 'MN-04567-P', name: 'Repurposed Schleem <span class="bom-amount">1</span>' },
    { id: 'T8', title: 'QR-01234-S', name: 'Repurposed Fleeb <span class="bom-amount">1</span>' },
    { id: 'T9', title: 'TU-05678-V', name: 'Repurposed Dinglebop <span class="bom-amount">1</span>' },
    { id: 'T10', title: 'WX-02345-Y', name: 'Repurposed Grumbo <span class="bom-amount">99</span>' },
    { id: 'C3', title: 'ZA-08910-B', name: 'Greebybox <span class="bom-amount">1</span>' },
  ];
  // @ts-ignore
  Highcharts.chart(
    'bom2',
    Highcharts.merge(highchartsCommonOptions, {
      chart: { width: 1200, height: 560 }, // We have to calculate the height based on the number of nodes
      series: [
        {
          type: 'organization',
          data: bomData,
          nodes: bomNodes,
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

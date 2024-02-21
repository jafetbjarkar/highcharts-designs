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
    { id: 'C1', title: 'CD-00103-E', name: 'Fleeb <span class="badge">2</span>' },
    { id: 'C2', title: 'FG-00050-H', name: 'Dinglebop <span class="badge">7</span>' },
    { id: 'SC1', title: 'IJ-06789-K', name: 'Schleem <span class="badge">2</span>' },
    { id: 'SC2', title: 'LM-03456-N', name: 'Grumbo <span class="badge">4</span>', selected: true },
    { id: 'SC3', title: 'OP-07890-Q', name: 'Blamf <span class="badge">10</span>' },
    { id: 'SC4', title: 'RS-04567-T', name: 'Shleem <span class="badge">1</span>' },
    { id: 'T1', title: 'UV-01234-W', name: 'Repurposed Schleem <span class="badge">1</span>' },
    { id: 'T2', title: 'XY-05678-Z', name: 'Repurposed Fleeb <span class="badge">2</span>' },
    { id: 'T3', title: 'AB-02345-C', name: 'Repurposed Dinglebop <span class="badge">5</span>' },
    { id: 'T4', title: 'DE-06789-F', name: 'Repurposed Grumbo <span class="badge">1</span>' },
    { id: 'T5', title: 'GH-03456-I', name: 'Repurposed Blamf <span class="badge">2</span>' },
    { id: 'T6', title: 'JK-07890-L', name: 'Repurposed Shleem <span class="badge">2</span>' },
    { id: 'T7', title: 'MN-04567-P', name: 'Repurposed Schleem <span class="badge">1</span>' },
    { id: 'T8', title: 'QR-01234-S', name: 'Repurposed Fleeb <span class="badge">1</span>' },
    { id: 'T9', title: 'TU-05678-V', name: 'Repurposed Dinglebop <span class="badge">1</span>' },
    { id: 'T10', title: 'WX-02345-Y', name: 'Repurposed Grumbo <span class="badge">99</span>' },
    { id: 'C3', title: 'ZA-08910-B', name: 'Greebybox <span class="badge">1</span>' },
  ];
  // @ts-ignore
  Highcharts.chart(
    'bom-chart1',
    Highcharts.merge(highchartsCommonOptions, {
      chart: { width: 1200, height: 560 }, // We have to calculate the height based on the number of nodes
      xAxis: { crosshair: false },
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
});

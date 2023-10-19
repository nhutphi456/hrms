import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { UIChart } from 'primeng/chart';
import { ChartOptions, Plugin } from 'chart.js/dist/types/index';
import { themeColors as colors } from '../constants/share.constants';

export const pieChartColors: string[] = [
  colors.primary,
  colors.primaryLight,
  colors.primaryLight1,
  colors.primaryLight2,
  colors.primaryLight3,
];
export const radarChartColors = [
  {
    borderColor: colors.primaryLight3,
    backgroundColor: 'rgba(205, 233, 234, 0.2)'
  },
  {
    borderColor: colors.lightGreen,
    backgroundColor: 'rgba(130, 196, 90, 0.2)'
  }
]
// export const radarChartColors: string[] = [
//   colors.primaryLight1,
//   colors.primaryLight2,
//   colors.primaryLight3,
//   colors.lightGreen,
// ];
export const colorObj = {
  primary: colors.primary,
  secondary: colors.secondary,
  primaryLight: colors.primaryLight,
  primaryLight1: colors.primaryLight1,
  primaryLight2: colors.primaryLight2,
  primaryLight3: colors.primaryLight3,
  primaryLight4: colors.primaryLight4,
  third: colors.third,
  forth: colors.forth,
  fifth: colors.fifth,
  errors: colors.errors,
  warning: colors.warning,
  success: colors.success,
  danger: colors.danger,
  lightGreen: colors.lightGreen,
};
@Component({
  selector: 'hrms-chart',
  templateUrl: './hrms-chart.component.html',
  styleUrls: ['./hrms-chart.component.scss'],
})
export class HrmsChartComponent {
  @ViewChild('chartJS') chartJS!: UIChart;
  @Input() type!: ChartType | 'heatmap' | 'treemap' | 'geomap';
  @Input() data!: ChartData;
  @Input() options!: ChartOptions;
  @Input() plugins!: Plugin[];
  @Input() width!: string;
  @Input() height!: string;
  @Output() dataSelect = new EventEmitter();

  onDataSelect(e: any): void {
    this.dataSelect.emit(e);
  }
}

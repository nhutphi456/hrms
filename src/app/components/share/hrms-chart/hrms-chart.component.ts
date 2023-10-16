import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { UIChart } from 'primeng/chart';
import {
  ChartOptions,
  Plugin,
  PluginChartOptions,
} from 'chart.js/dist/types/index';
import { themeColors as colors } from '../constants/share.constants';
export const pieChartColors: string[] = [
  colors.primary,
  colors.primaryLight,
  colors.primaryLight1,
  colors.primaryLight2,
  colors.primaryLight3,
];
export const colorObj: { [key: string]: string } = {
  primary: colors.primary,
  secondary: colors.secondary,
  third: colors.third,
  forth: colors.forth,
  fifth: colors.fifth,
  errors: colors.errors,
  warning: colors.warning,
  success: colors.success,
  danger: colors.danger,
  lightGreen: colors.lightGreen
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

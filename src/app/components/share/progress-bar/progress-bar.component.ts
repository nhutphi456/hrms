import { Component, ViewEncapsulation, inject } from '@angular/core';
import { ProgressBarService } from './progress-bar.service';
import { ProgressBarModule } from 'primeng/progressbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hrms-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, ProgressBarModule],
  encapsulation: ViewEncapsulation.None
})
export class ProgressBarComponent {
  private readonly service = inject(ProgressBarService);
  isShowProgressBar$ = this.service.progressBarSubject$
}

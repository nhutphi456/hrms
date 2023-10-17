import { Component, Input } from '@angular/core';

@Component({
  selector: 'job-tag',
  templateUrl: './job-tag.component.html',
  styleUrls: ['./job-tag.component.scss']
})
export class JobTagComponent {
  @Input() label!: string
}

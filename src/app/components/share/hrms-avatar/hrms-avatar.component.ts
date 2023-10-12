import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'hrms-avatar',
  templateUrl: './hrms-avatar.component.html',
  styleUrls: ['./hrms-avatar.component.scss'],
  standalone: true,
  imports: [CommonModule, AvatarModule, SkeletonModule],
})
export class HrmsAvatarComponent implements OnChanges {
  @Input() imgSrc!: string;

  @Input() shape!: 'square' | 'circle';

  @Input() label = 'user-avt.alt';

  @Input() size: 'normal' | 'large' | 'xlarge' = 'normal';

  @Input() style = '';

  @Input() styleClass = '';

  isLoading = true;

  ngOnChanges(changes: SimpleChanges): void {
    this.imgSrc = changes['imgSrc']?.currentValue;

    this.isLoading = false;
  }
}

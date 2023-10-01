import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { EmployeeCarouselComponent } from './employee-carousel.component';

@NgModule({
  declarations: [EmployeeCarouselComponent],
  imports: [CommonModule, CarouselModule, AvatarModule, TagModule],
  exports: [EmployeeCarouselComponent],
})
export class EmployeeCarouselModule {}

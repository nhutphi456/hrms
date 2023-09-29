import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'primeng/carousel';
import {AvatarModule} from 'primeng/avatar';
import { EmployeeCarouselComponent } from './employee-carousel.component';

@NgModule({
  declarations: [EmployeeCarouselComponent],
  imports: [
    CommonModule, CarouselModule, AvatarModule
  ],
  exports: [EmployeeCarouselComponent]
})
export class EmployeeCarouselModule { }

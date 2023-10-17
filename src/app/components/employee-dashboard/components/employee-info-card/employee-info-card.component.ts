import { Component } from '@angular/core';

@Component({
  selector: 'employee-info-card',
  templateUrl: './employee-info-card.component.html',
  styleUrls: ['./employee-info-card.component.scss'],
})
export class EmployeeInfoCardComponent {
  defaultImg = 'assets/images/avatar-default.jpg';
  skillTags = ['Figma', 'Adobe Creative Suite', 'Adobe Illustrator'];
  interests = ['Wireframing', 'Adobe Creative Suite', 'Collaboration skills'];
}

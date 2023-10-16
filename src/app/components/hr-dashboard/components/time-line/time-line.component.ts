import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'competency-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss'],
})
export class TimeLineComponent implements OnInit {
  events!: any[];

  ngOnInit(): void {
    this.events = [
      {
        status: '04 March',
        date: '15/10/2020 10:30',
        icon: 'pi pi-user-edit',
        color: '#9C27B0',
        image: 'game-controller.jpg',
        description: 'Evaluation',
        isActive: true,
      },
      {
        status: '04 March',
        date: '15/10/2020 14:00',
        icon: 'pi pi-users',
        color: '#673AB7',
        description: 'Face-to-face meeting',
        isActive: false,
      },
      {
        status: '04 March',
        date: '15/10/2020 16:15',
        icon: 'pi pi-gift',
        color: '#FF9800',
        description: 'Promotion',
        isActive: false,
      },
      {
        status: '04 March',
        date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#607D8B',
        description: 'Notify result',
        isActive: false,
      },
    ];
  }
}

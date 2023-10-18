import { Component, OnInit } from '@angular/core';
import { HrDashboardShareStoreService as HrDashboardShareStore } from '../../store/hr-dashboard-share-store.service';

@Component({
  selector: 'competency-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss'],
})
export class TimeLineComponent implements OnInit {
  events!: any[];
  competencyTimeline$ = this.shareStore.competencyTimeline$;

  constructor(private shareStore: HrDashboardShareStore) {}

  ngOnInit(): void {
    this.shareStore.getCompetencyTimeline(8);
    this.competencyTimeline$.subscribe(result => {
      console.log({result})
      this.events = result.map((r, i) => ({
        ...r,
        icon: this.getTimelineIcon(i)
      }))
      console.log({events: this.events})
    });
  }

  getTimelineIcon(index: number): string {
    switch (index) {
      case 0:
        return 'pi pi-user-edit';
      case 1:
        return 'pi pi-users';
      case 2:
        return 'pi pi-gift';
      case 3:
        return 'pi pi-check';
      default:
        return '';
    }
  }
}

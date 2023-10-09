import { Component, Input } from '@angular/core';
import { ContractType } from '../../models/employee-management.model';

@Component({
  selector: 'contract-badge',
  templateUrl: './contract-badge.component.html',
  styleUrls: ['./contract-badge.component.scss'],
})
export class ContractBadgeComponent {
  @Input() currentContract!: number;
  contractType = ContractType;
}

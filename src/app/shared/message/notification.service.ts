import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  service = inject(MessageService);

  errorNotification(mes: string): void {
    this.service.add({
      severity: 'error',
      summary: 'Error',
      detail: mes,
      closable: true,
    });
  }

  successNotification(mes: string): void {
    this.service.add({
      severity: 'success',
      summary: 'Success',
      detail: mes,
      closable: true,
    });
  }
}

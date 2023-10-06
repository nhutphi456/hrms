import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { ProgressBarService } from '../components/share/progress-bar/progress-bar.service';

@Injectable()
export class ProgressBarInterceptor implements HttpInterceptor {
  constructor(private progressBarService: ProgressBarService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    this.progressBarService.showProgressBar(true);
    return next
      .handle(request)
      .pipe(finalize(() => this.progressBarService.showProgressBar(false)));
  }
}

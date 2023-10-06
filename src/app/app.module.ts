import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app-layout.module';
import { SharedModule } from './shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { GraphQLModule } from './grapql.module';
import { ProgressBarInterceptor } from './http/progress-bar.interceptor';
import { ProgressBarComponent } from './components/share/progress-bar/progress-bar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ProgressBarComponent,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AppLayoutModule,
    SharedModule,
    ToastModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    ToastModule,
    GraphQLModule,
  ],
  providers: [
    MessageService,
    DialogService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProgressBarInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

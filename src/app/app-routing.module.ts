import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout.component';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
  {
    path: "",
    component: AppLayoutComponent,
  },
  { path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

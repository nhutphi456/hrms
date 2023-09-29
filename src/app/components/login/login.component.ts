// import { ɵ$localize } from '@angular/localize';
import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
// import { catchError, tap } from 'rxjs';
// import { AuthService } from 'src/app/services/auth.service';
// import { NotificationService } from 'src/app/shared/message/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  @HostBinding('class') hostClass = 'oms-login-host';

  showPassword = false;

  isLoading = false;

  helper = new JwtHelperService();

  constructor(
    // private authService: AuthService,
    private router: Router,
    // private notificationService: NotificationService
  ) {}

  signInForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    userPassword: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.signInForm.markAllAsTouched();

    // if (!this.signInForm.valid) {
    //   this.notificationService.errorNotification(
    //     $localize`Enter valid form value`
    //   );
    // } else {
    //   this.isLoading = true;

    //   // const values: Partial<{
    //   //   userName: string | null;
    //   //   userPassword: string | null;
    //   // }> = this.signInForm.value;

    //   // this.authService
    //   //   .login(values)
    //   //   .pipe(
    //   //     tap(res => {
    //   //       const token = res.data?.login;

    //   //       localStorage.setItem('token', token!);

    //   //       const decodedToken = this.helper.decodeToken(token!);

    //   //       localStorage.setItem('userId', decodedToken.Id);

    //   //       this.router.navigate(['dashboard']);

    //   //       this.isLoading = false;
    //   //     }),
    //   //     catchError(async err => {
    //   //       this.isLoading = false;

    //   //       const errMes = err.networkError.error.errors[0].extensions?.message;

    //   //       if (errMes) {
    //   //         this.notificationService.errorNotification(errMes);

    //   //         this.signInForm.reset();
    //   //       }
    //   //     })
    //   //   )
    //   //   .subscribe();
    // }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}

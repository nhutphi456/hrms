import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Apollo } from 'apollo-angular';
import { REGISTER } from './constants/register.constant';
import { NotificationService } from 'src/app/shared/message/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent {
  @HostBinding('class') hostClass = 'oms-login-host';

  showPassword = false;

  isLoading = false;

  helper = new JwtHelperService();

  constructor(
    // private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,
    private apollo: Apollo,
  ) {}

  signInForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.signInForm.markAllAsTouched();

    const { username, password } = this.signInForm.value;

    this.apollo
      .mutate({
        mutation: REGISTER,
        variables: { signupDto: { username, password } },
      })
      .subscribe({
        next: () => {          
          this.router.navigate(['login']);
            this.notificationService.successNotification(
              $localize`Register Successfully`,
            );
        },
        error: () => {
          this.isLoading = false;
            this.notificationService.errorNotification(
              $localize`User already exists`,
            );
        }
      });
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

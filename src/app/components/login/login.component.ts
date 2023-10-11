import { ɵ$localize } from '@angular/localize';
import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, map, tap } from 'rxjs';
// import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/shared/message/notification.service';
import { MessageService } from 'primeng/api';
import { Apollo } from 'apollo-angular';
import { LOGIN } from './constants/login.constants';

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
    private notificationService: NotificationService,
    private messageService: MessageService,
    private apollo: Apollo,
  ) {}

  signInForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.signInForm.markAllAsTouched();
    const {username, password} = this.signInForm.value

    if (!this.signInForm.valid) {
      console.log(this.signInForm);
      this.notificationService.errorNotification(
        $localize`Enter valid form value`,
      );
    } else {
      this.isLoading = true;
      // this.router.navigate(['system-admin']);
      // this.notificationService.successNotification($localize`Login Successful`);
      this.apollo.watchQuery({
        query: LOGIN,
        variables: {
          username,
          password
        }
      }).valueChanges.pipe(map((res: any) => res.data)).subscribe();

      // còn xử lý token ở đây....
    }

    // const values: Partial<{
    //   userName: string | null;
    //   userPassword: string | null;
    // }> = this.signInForm.value;

    // this.authService
    // .login(values)
    //     .pipe(
    //       tap(res => {
    //         const token = res.data?.login;

    //         localStorage.setItem('token', token!);

    //         const decodedToken = this.helper.decodeToken(token!);

    //         localStorage.setItem('userId', decodedToken.Id);

    //         this.router.navigate(['system-admin']);

    //         this.isLoading = false;
    //       }),
    // catchError(async err => {
    //   this.isLoading = false;

    //   const errMes = err.networkError.error.errors[0].extensions?.message;

    //   if (errMes) {
    //     this.notificationService.errorNotification(errMes);

    //     this.signInForm.reset();
    //   }
    // }),
    //     )
    //     .subscribe();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }
}

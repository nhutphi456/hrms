import { Injectable, inject } from '@angular/core';
import { Apollo, MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';
import { LOGIN } from '../components/login/constants/login.constants';
import { LoginApiResponse } from '../components/login/models/login.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apollo = inject(Apollo);

  login(
    user: Partial<{ userName: string | null; userPassword: string | null }>
  ): Observable<MutationResult<LoginApiResponse>> {
    return this.apollo.mutate<LoginApiResponse>({
      mutation: LOGIN,
      variables: {
        username: user.userName,
        password: user.userPassword,
      },
    });
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  get getAuthenticationToken(): string | null {
    const token = localStorage.getItem('token');
    return token ? token : null;
  }
}

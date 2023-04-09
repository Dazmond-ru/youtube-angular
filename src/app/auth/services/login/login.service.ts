import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

const token = 'token';

export interface LoginState {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLogin = new BehaviorSubject<boolean>(this.isAuth());

  constructor(private router: Router) {}

  login({ login, password }: LoginState) {
    localStorage.setItem(token, `${login}.${password}`);

    login = login?.trim();
    password = password?.trim();
    this.router.navigate(['/youtube']);

    this.isLogin.next(true);
  }

  logout() {
    localStorage.removeItem(token);
    this.isLogin.next(false);
    this.router.navigate(['/']);
  }

  isAuth() {
    return Boolean(localStorage.getItem(token));
  }
}

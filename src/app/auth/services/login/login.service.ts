import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const token = 'token';

export interface LoginState {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {}

  login({ login, password }: LoginState) {
    localStorage.setItem(token, `${login}.${password}`);

    login = login?.trim();
    password = password?.trim();
    this.router.navigate(['/youtube']);
  }

  logout() {
    localStorage.removeItem(token);
  }

  isAuth() {
    return Boolean(localStorage.getItem(token));
  }
}

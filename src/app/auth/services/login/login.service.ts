import { Injectable } from '@angular/core';

const token = 'token';

export interface LoginState {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  login({ login, password }: LoginState) {
    localStorage.setItem(token, `${login}.${password}`);
  }

  logout() {
    localStorage.removeItem(token);
  }

  isAuth() {
    return Boolean(localStorage.getItem(token));
  }
}

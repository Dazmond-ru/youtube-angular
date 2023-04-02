import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService, LoginState } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = this.formBuilder.group({
    login: ['', [Validators.required, this.checkLength]],
    password: ['', [Validators.required, this.checkLength]],
  });

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {}

  onSubmit() {
    this.form.value.login = this.form.value.login?.trim();
    this.form.value.password = this.form.value.password?.trim();

    this.loginService.login(this.form.value as LoginState);
    this.router.navigate(['/youtube']);
  }

  checkLength(control: FormControl) {
    if (control.value.trim().length === 0) {
      return {
        lengthError: true,
      };
    }

    return null;
  }
  get login() {
    return this.form.get('login');
  }
  get password() {
    return this.form.get('password');
  }
}

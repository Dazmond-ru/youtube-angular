import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {}

  onSubmit() {
    this.loginService.login(this.form.value as LoginState);
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

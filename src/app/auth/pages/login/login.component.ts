import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService, LoginState } from '../../services/login/login.service';

const passwordPattern = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@#$%^&(){}[\\]:;<>,.?~_+\\-=|\\\\/"\']).{8,}$';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = this.formBuilder.group({
    login: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(passwordPattern)]],
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

  getLoginError(error: string) {
    return this.form.get('login')?.errors?.[error];
  }

  getPasswordError(error: string) {
    return this.form.get('password')?.errors?.[error];
  }
}
